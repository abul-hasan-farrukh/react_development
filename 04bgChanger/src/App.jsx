import { useState } from "react"


function App() {
  // useState hook is used to manage state in functional components.
  // Here, we are using useState to manage the background color of the main div.
  // The initial color is set to "olive".
  // setColor is the function used to update the color state.
  const [color, setColor] = useState("olive")
  return (
          <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>

    <div className="fixed flex flex-wrap justify-center border-spacing-1 bottom-12 inset-x-0 px-2">
      
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">

          <button onClick={() => setColor("red")} className="outline-none px-3 py-2 rounded-full text-white font-bold shadow-lg"
          style={{backgroundColor:"red"}}>Red</button>

<button onClick={() => setColor("green")} className="outline-none px-3 py-2 rounded-full text-white font-bold shadow-lg"
          style={{backgroundColor:"green"}}>Green</button>

<button onClick={() => setColor("blue")} className="outline-none px-3 py-2 rounded-full text-white font-bold shadow-lg"
          style={{backgroundColor:"blue"}}>Blue</button>

<button onClick={() => setColor("purple")} className="outline-none px-3 py-2 rounded-full text-white font-bold shadow-lg"
          style={{backgroundColor:"purple"}}>Purple</button>

<button onClick={() => setColor("pink")} className="outline-none px-3 py-2 rounded-full text-black font-bold shadow-lg"
          style={{backgroundColor:"pink"}}>Pink</button>

<button onClick={() => setColor("yellow")} className="outline-none px-3 py-2 rounded-full text-black font-bold shadow-lg"
          style={{backgroundColor:"yellow"}}>Yellow</button>

<button onClick={() => setColor("skyblue")} className="outline-none px-3 py-2 rounded-full text-black font-bold shadow-lg"
          style={{backgroundColor:"skyblue"}}>Sky Blue</button>

<button onClick={() => setColor("orange")} className="outline-none px-3 py-2 rounded-full text-white font-bold shadow-lg"
          style={{backgroundColor:"orange"}}>Orange</button>

<button onClick={() => setColor("gray")} className="outline-none px-3 py-2 rounded-full text-white font-bold shadow-lg"
          style={{backgroundColor:"gray"}}>Gray</button>

<button onClick={() => setColor("brown")} className="outline-none px-3 py-2 rounded-full text-white font-bold shadow-lg"
          style={{backgroundColor:"brown"}}>Brown</button>

<button onClick={() => setColor("black")} className="outline-none px-3 py-2 rounded-full text-white font-bold shadow-lg"
          style={{backgroundColor:"black"}}>Black</button>

<button onClick={() => setColor("white")} className="outline-none px-3 py-2 rounded-full text-black font-bold shadow-lg"
          style={{backgroundColor:"white"}}>White</button>

      </div>

    </div>

      </div>
    )
}

export default App
