import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("")


  const passwordRef = useRef(null) // useRef Hook to take reference of the password input field. It is used to select the text inside the input field when copying the password to clipboard.

  const generatePassword = useCallback(() => { //useCallback hook is used here, It takes two arguments, first is the function to be memoized(cached) and second is the dependency array i.e variables of useState hooks. useCallback is used to memoize functions i.e to prevent them from being recreated on every render. 
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

  const copyPasswordToClipboard = useCallback(() => { // useCallback hook is used here to memoize the function that copies the password to clipboard.
      passwordRef.current?.select() // select the text inside the input field using useRef hook.
      window.navigator.clipboard.writeText(password) // write the selected text to clipboard.
    }, [password]) // dependency is password state.

    useEffect(() => {generatePassword()}, [length, number, character, generatePassword]) // useEffect gets called first when the page loads, useEffect hook is used to call the generatePassword function whenever any of the dependencies change.
  return (
  
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-white font-bold text-center mb-4 my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text"
        value={password}
        className="w-full outline-none py-1 px-3"
        placeholder="Password"  
        readOnly
        ref={passwordRef} // useRef Hook to refer the input field. It is used to select the text inside the input field when copying the password to clipboard.
        />
        <button onClick={copyPasswordToClipboard} className="outline-none font-bold text-white bg-blue-700 px-3 py-0.5 shrink-0">COPY</button>
      </div>
      <div
      className='flex text-sm gap-x-2'
      >
        <div
        className='flex items-center gap-x-1'>
          <input type="range"
          min={8}
          max={40}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor='lengthInput'>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={() => {setNumber((prev) => !prev);}} //toggle number state, it inverts the previous state.
          />
          <label className="ml-1" htmlFor="numberInput">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input 
          type="checkbox"
          defaultChecked={character}
          id="characterInput"
          onChange={() => {setCharacter((prev) => !prev);}} //toggle character state, it inverts the previous state.
          />
          <label className="ml-1" htmlFor="characterInput">Character</label>
        </div>
      </div>
     </div>
  )
}
export default App