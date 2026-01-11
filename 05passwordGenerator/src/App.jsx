import { useRef, useEffect, useCallback, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("") 

  // useRef Hook
  const passwordRef = useRef(null)  
   
  const passwordGenerator = useCallback(() => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    // let numbers = 
    // let specialChar = 
    
    if (number)  str = str + "0123456789"      
    

    if (character)  str = str + "!@#$%^&*()_+~`|}{[]:"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      password = password + str.charAt(char); 
     }
     setPassword(password);

  }, [length, number, character, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password) 
  }, [password])

  useEffect(() => {passwordGenerator()}, [length, number, character, passwordGenerator])
    
  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-white font-bold text-center mb-4 my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text"
        value={password}
        className="w-full outline-none py-1 px-3"
        placeholder="Password"  
        readOnly
        ref={passwordRef}      
        />
        <button onClick={copyPasswordToClipboard} className="outline-none font-bold text-white bg-blue-700 px-3 py-0.5 shrink-0">copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex text-center gap-x-1">
          <input
          type="range"
          min={8}
          max={40}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          /> 
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={() => {setNumber((prev) => !prev);}}
          />
          <label className="ml-1" htmlFor="numberInput">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input 
          type="checkbox"
          defaultChecked={character}
          id="characterInput"
          onChange={() => {setCharacter((prev) => !prev);}}
          />
          <label className="ml-1" htmlFor="characterInput">Character</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
