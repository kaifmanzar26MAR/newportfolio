import React from 'react'
import './NavBar.css'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaYoutube, FaHome, FaProjectDiagram, FaImage, FaList, FaUser, FaUserCircle } from 'react-icons/fa';
import { TiUserOutline } from 'react-icons/ti';
const NavBar = () => {
  return (
    <>
      <div className='nav'>
        <div className="circles">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="nav_container">
          <div className="pages">
            <div className="tags"><a href='#'><FaHome size={27}/>Home</a></div>
            <div className="tags"><a href='#'><FaUserCircle size={27}/>About</a></div>
            <div className="tags"><a href='#'><FaProjectDiagram size={27}/>Project</a></div>
            <div className="tags"><a href='#'><TiUserOutline size={27}/>Others</a></div>
          </div>
          <div className="social">
          Socials
          </div>
          <div className="pages">
            <div className="tags"><a href='#'><FaInstagram size={27} style={{color:"#b5179e"}}/>Instagram</a></div>
            <div className="tags"><a href='#'><FaGithub size={27} style={{color:"cyan"}}/>GitHub</a></div>
            <div className="tags"><a href='#'><FaLinkedin size={27} style={{color:"#0277b5"}}/>LinkedIn</a></div>
            <div className="tags"><a href='#'><FaYoutube size={27} style={{color:"red"}}/>Youtube</a></div>
            <div className="tags"><a href='#'><FaFacebook size={27} style={{color:"skyblue"}}/>Facebook</a></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
