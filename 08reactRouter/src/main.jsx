import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

//creating a router below

// const router = createBrowserRouter([
//   {
//       path: '/',
//       element: <Layout/>,
//       children: [
//         {
//           path: "",
//           element: <Home/>
//         }, 
//         {
//           path: "about-us",
//           element: <About/>
//         }, 
//         {
//           path: "contact-us",
//           element: <Contact/>
//         }
//       ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path = '' element={<Home/>}/>
        <Route path = '/about-us' element={<About/>}/>
        <Route path = '/contact-us' element={<Contact/>}/>
        <Route path = '/user/:userid' element={<User/>}/>
        <Route
        loader= {githubInfoLoader}  // loader uses callback and helps to make API call directly from the component before useEffect, it hits the API as soon as you hover over a link.
        path = '/github' 
        element={<Github/>}
        />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* RouterProvider takes a prop otherwise it won't work. */}
    <RouterProvider router = {router}/> 
  </StrictMode>,
)
