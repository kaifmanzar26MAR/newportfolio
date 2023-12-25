import React from 'react'
import './Topbar.css'
import { FaUser } from 'react-icons/fa'
const TopBar = () => {
  return (
    <>
      <div className="top_bar">
        <button>Contact Me <FaUser size={15}/></button>
      </div>
    </>
  )
}

export default TopBar
