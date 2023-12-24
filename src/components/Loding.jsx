import React from 'react'
import {gsap} from 'gsap'
import { useEffect } from 'react'
import './Loding.css'
const Loding = () => {
  useEffect(()=>{
    const t=gsap.timeline();
    
    const color=["red","green","yellow","orange","cyan"]
    t.to(".latter",{
      opacity:0,
      fontSize:50,
      stagger:0.1,
      display:"flex",
      color:color[Math.floor(Math.random()*color.length)],
    })
    
    t.to(".latter",{
      position:"sticky",
      opacity:1,
      stagger:0.1,
      duration:2,
    })
    t.to(".inner .welcome_container .welcome",{
      backgroundColor:"white",
      duration:0.1
    }).to(".inner .welcome_container .welcome .up",{
      // color:"red",
      display:"inline",
      stagger:0.2
    }).to(".inner .bottom_container .bottom .down",{
      opacity:1,
      stagger:0.2,
      delay:-2
    })

    t.to(".latter",{
      delay:1,
      opacity:0,
      stagger:0.2
    }).to(".up",{
      opacity:0,
      delay:-2.5,
      stagger:0.2
    }).to(".bottom_container .bottom .down",{
      opacity:0,
      delay:-2.5,
      stagger:0.2,
    }).to(".welcome",{
      backgroundColor:"transparent",
      delay:-1
    })

   
    
   
  },[])
  return (
    <>
        <div className='loding_container'>
          <div className="inner">
            <div className="welcome_container">
               <div className="welcome">
                <span className="up">W</span>
                <span className="up">E</span>
                <span className="up">L</span>
                <span className="up">C</span>
                <span className="up">O</span>
                <span className="up">M</span>
                <span className="up">E</span>&nbsp;
                <span className="up">T</span>
                <span className="up">O</span>
              </div>
            </div>
           
            <div className="name">
              <span className="latter1 latter">M</span>
              <span className="latter2 latter">D</span>&nbsp;
              <span className="latter3 latter">K</span>
              <span className="latter4 latter">A</span>
              <span className="latter5 latter">I</span>
              <span className="latter6 latter">F</span>&nbsp;
              <span className="latter7 latter">M</span>
              <span className="latter8 latter">A</span>
              <span className="latter9 latter">N</span>
              <span className="latter10 latter">Z</span>
              <span className="latter11 latter">A</span>
              <span className="latter12 latter">R</span>

            </div>

            <div className="bottom_container">
              <div className="bottom">
                <span className="down">P</span>
                <span className="down">O</span>
                <span className="down">R</span>
                <span className="down">T</span>
                <span className="down">F</span>
                <span className="down">O</span>
                <span className="down">L</span>
                <span className="down">I</span>
                <span className="down">O</span>
              </div>
            </div>
            
          </div>
          
        </div>
    </>
  )
}

export default Loding
