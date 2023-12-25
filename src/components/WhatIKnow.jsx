import React from 'react'
import './What.css'
import { FaArrowRight, FaGamepad, FaHome, FaNotesMedical, FaPizzaSlice, FaTshirt } from 'react-icons/fa'
const WhatIKnow = () => {
  return (
    <>
      <div className="what_container">
        <div className="left">
            <h1>What I Know</h1>
            <div className="left_in">
                <div className="skills">
                    <h3>Frontend</h3>
                    <div className="skill_con">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p style={{border:'1px solid skyblue'}}>Tailwind</p>
                        <p style={{border:'1px solid orange'}}>Javascript</p>
                        <p style={{border:'1px solid skyblue'}}>React Js</p>
                        <p>Next Js</p>
                    </div>
                </div>
                <div className="skills">
                    <h3>Backend</h3>
                    <div className="skill_con">
                        <p style={{border:'1px solid green'}}>Node Js</p>
                        <p style={{border:'1px solid gray'}}>Express Js</p>
                        <p>Next Auth</p>
                    </div>
                </div>
                <div className="skills">
                    <h3>Database</h3>
                    <div className="skill_con">
                        <p style={{border:'1px solid lightblue'}}>MongoDB</p>
                        <p style={{border:'1px solid green'}}>Firebase</p>
                        <p style={{border:'1px solid gray'}}>MySql</p>
                        
                    </div>
                </div>
                <div className="skills">
                    <h3>Devops</h3>
                    <div className="skill_con">
                        <p style={{border:'1px solid yellow'}}>AWS</p>
                        <p style={{border:'1px solid skyblue'}}>EC2</p>
                        <p style={{border:'1px solid orange'}}>Serverless</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="right">
            <h1>More Projects</h1>
            <div className="more_pro">
                <a href='#' className="m_pro">
                    <FaGamepad size={30} />
                    <div className="s_dis">
                        <h3>Snake Game</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, tempora?</p>
                    </div>
                    <p>&rarr;</p>
                </a>
                <a href='#' className="m_pro">
                    <FaTshirt size={30} />
                    <div className="s_dis">
                        <h3>E-commerce</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, tempora?</p>
                    </div>
                    <p>&rarr;</p>
                </a>
                <a href='#' className="m_pro">
                    <FaHome size={30} />
                    <div className="s_dis">
                        <h3>Real State</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, tempora?</p>
                    </div>
                    <p>&rarr;</p>
                </a>
                <a href='#' className="m_pro">
                    <FaPizzaSlice size={30} />
                    <div className="s_dis">
                        <h3>Resturant app</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, tempora?</p>
                    </div>
                    <p>&rarr;</p>
                </a>
                <a href='#' className="m_pro">
                    <FaNotesMedical size={30} />
                    <div className="s_dis">
                        <h3>To Do</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, tempora?</p>
                    </div>
                    <p>&rarr;</p>
                </a>
            </div>
        </div>
      </div>
    </>
  )
}

export default WhatIKnow
