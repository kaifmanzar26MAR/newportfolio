import React from 'react'
import './Projects.css'
const Projects = () => {
  return (
    <>
      <div className="project_container">
        <h1>Projects</h1>
        <div className="projects">
            <div className="project">
                <div className="img amazon"></div>
                <div className="text">
                    <h3 className='pro_name'>Amazon Clone</h3>
                    <p className='dis'> Mern Stack Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, earum?</p>
                </div>
            </div>
            <div className="project">
                <div className="img spotify"></div>
                <div className="text">
                    <h3 className='pro_name'>Spotify Clone</h3>
                    <p className='dis'> Mern Stack Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, earum?</p>
                </div>
            </div>
            <div className="project">
                <div className="img netflix"></div>
                <div className="text">
                    <h3 className='pro_name'>Netflix Clone</h3>
                    <p className='dis'> Mern Stack Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, earum?</p>
                </div>
            </div>
            <div className="project">
                <div className="img weather"></div>
                <div className="text">
                    <h3 className='pro_name'>Weather Forcast</h3>
                    <p className='dis'> Mern Stack Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, earum?</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Projects
