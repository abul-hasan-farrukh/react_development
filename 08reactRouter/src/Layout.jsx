import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

// Outlet will treat Layout.jsx as a base and inject other components dynamically.

// here we are trying to keep the Header and Footer on all pages and insert other components dynamically using Outlet imported above.
function Layout() {
  return (
    <>
    <Header/>
     {/* Outlet helps to perform nesting with the help of React router dom  */}
    <Outlet/>
    <Footer />
    </>
  )
}

export default Layout