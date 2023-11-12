import React from 'react'
import './App.css'
import Header from './Header'
import BodyIne from './Body1'
import BodyOne from './Body1'
function App() {
  return (
    <div>
       <div className='navigationPanel'>
          <span className='logo'>
            <img src="/pic/logo.svg" alt="logo" />
            Building
          </span>
          <nav>
            <ul className='ul'>
              <li>Home</li>
              <li>Service</li>
              <li>About Us</li>
              <li>Properties</li>
              <li>Contact</li>
            </ul>
          </nav>
          <button className='btnLogo'>Log in</button>
        </div>
        <Header />
        <BodyOne/>
    </div>
   
  )
}

export default App
