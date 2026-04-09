import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trustedby from './components/Trustedby'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import { Toaster } from "react-hot-toast";
const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  
  return (
<div className='dark:bg-black relative'>
      <Toaster position="top-right" />
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <Trustedby/>
    <Services/>
    <OurWork/>
    <Teams/>
    <ContactUs/>
</div>
  )
}

export default App
