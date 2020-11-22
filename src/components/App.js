import React, {Component, useState} from "react";
import '../styles/App.css';

const App = (props) => {
  console.log(props)
  //console.log(props.slides[0].title) 
  const [value,setValue]=useState(props.slides[0].title)
  const [i,seti]=useState(0)
  const [but,setbut]=useState(0)

 let j=0
function changeNextSlides(){
seti(i+1)
  }
  function changePrevSlides(){
    seti(i-1)
  }
  function restartSlides(){
    seti(0)
  }


  return (    
    <>

    <button disabled={i>=props.slides.length-1?true:false} data-testid="button-next" onClick={changeNextSlides}>Next</button>
    <button disabled={i<=0?true:false} data-testid="button-prev" onClick={changePrevSlides}>Prev</button>
    <button disabled={i===0?true:false}data-testid="button-restart" onClick={restartSlides}>Restart</button>
    <h1 data-testid="title">{props.slides[i].title}</h1>
    <p data-testid="text">{props.slides[i].text}</p>

    
    </>
  )
}
  

export default App;

