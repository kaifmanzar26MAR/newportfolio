import React, { useState } from 'react'
import './Topbar.css'
import {FaHamburger, FaXbox } from 'react-icons/fa'

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaYoutube, FaHome, FaProjectDiagram, FaImage, FaList, FaUser, FaUserCircle } from 'react-icons/fa';
import { TiUserOutline } from 'react-icons/ti';
const TopBar = () => {
  const [on,setOn]=useState(true);
  const toggle=()=>{
    if(on){
      setOn(false);
    }else{
      setOn(true);
    }
  }
  return (
    <>
      <div className="top_bar">
        <button>Contact Me <FaUser size={15}/></button>
        <div className="hamburgur" onClick={toggle}>
          {on ?<FaHamburger size={25} style={{color:'white'}}/>:
          <FaXbox size={25} style={{color:'red'}}/>}
        </div>
        {/* <div id="hammenue">
          <div className="ham_nav_container">
            <div className="ham_pages">
              <div className="ham_menue">home</div>
              <div className="ham_menue">home</div>
              <div className="ham_menue">home</div>
              <div className="ham_menue">home</div>
            </div>
          </div>
          
        </div> */}
      </div>
    </>
  )
}

export default TopBar
