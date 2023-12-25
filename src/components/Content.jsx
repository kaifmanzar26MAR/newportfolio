import React from 'react'
import './Content.css'
import TopBar from './TopBar'
import Projects from './Projects'
import WhatIKnow from './WhatIKnow'
import { FaInstagram } from 'react-icons/fa'
const Content = () => {
  return (
    <div className='container'>
      <TopBar/>
      <div className="intro">
          <div className="cont">
              <div className="in_cont">
                  <div className="image">
                      <div className="img"></div>
                  </div>
                  <div className="names">
                      <h1>Md Kaif Manzar</h1>
                      <h3>@kaifmanzar</h3>
                  </div>
              </div>
              
              <div className="followup">
                  <FaInstagram size={25} id='icon'/>
                  <p>Follow me on Instagram</p>
              </div> 
          </div>
          
      </div>
      <br />
      <Projects/>
      <WhatIKnow/>
    </div>
  )
}

export default Content
