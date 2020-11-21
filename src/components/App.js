import React, {Component, useState} from "react";
import '../styles/App.css';

const App = (props) => {
  console.log(props)
  console.log(props.slides[0].title) 
  const [value,setValue]=useState(props.title)
  return (
    <>
      <div> {props.slides[0].title}</div>
    </>
  )
}


export default App;
