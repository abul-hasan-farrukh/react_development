import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  // Props are used to pass data from parent component to child component. Here, App is the parent component and Card is the child component.
  // We are passing username and btnText as props to Card component.
  // If btnText is not passed, it will take the default value "Know More" as defined in Card component.
  // Props are read-only, child component cannot modify the props received from parent component.
  // Props help in making components reusable with different data.
  // Here, we are using the Card component twice with different props.
  // This demonstrates how props can be used to customize the behavior and appearance of child components.
  // This is a fundamental concept in React for building dynamic and flexible UIs.
  // Props can be of any data type - string, number, object, array, function, etc.

  return (
    <>
      <h1 className='bg-blue-500 p-5 rounded-3xl mb-5'>Tailwind CSS</h1>
      <Card username="Julia" btnText="Click me"/> // Passing props to Card component
      <Card username="Michael"/> // Passing only username prop, btnText will take default value "Know More"
    </>
  )
}


export default App