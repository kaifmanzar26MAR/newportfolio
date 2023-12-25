import React, { useEffect } from 'react'
import Loding from './components/Loding'
import './App.css'
import NavBar from './components/NavBar'
import Content from './components/Content'
const App = () => {
  useEffect(()=>{
    setTimeout(function(){
      document.getElementById('main').style.display='flex';
    },10500)
  },[])
  return (
    <div>
      <Loding/>
      <div id='main'>
        <NavBar/>
        <Content/>
      </div>
    </div>
  )
}

export default App
