import React, { useEffect } from 'react'
import Loding from './components/Loding'
const App = () => {
  useEffect(()=>{
    setTimeout(function(){
      const loding=document.getElementsByTagName(Loding);
      const main=document.getElementById('main');
      main.style.display="flex";
      loding.style.display="none";
    },100000);
  },[])
  return (
    <div>
      <Loding></Loding>
      <div id='main'>
        sadfasdf Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, commodi cum quaerat enim non tempore nobis aliquid vero sapiente aperiam sint asperiores? Voluptatibus facere odit culpa porro ad minus itaque!
      </div>
    </div>
  )
}

export default App
