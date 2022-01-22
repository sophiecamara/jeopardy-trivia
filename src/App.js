import React,{Component, useEffect, useState} from 'react';
import './index.css';
import './components/Score'

function App () {
  
  const[question, setQuestion]=useState([])
  const[toggle,setToggle]=useState("false")
  const[score, setScore]=useState(0)
 
   useEffect(()=>{
     setTimeout(()=> setQuestion(data, 5000))
const decrement=()=>{
  score ===question.value? :ternary operator)
  alert("try agaim")
}

 const  handleClick = () => {
    fetch('http://jservice.io/api/random')
      .then(response => response.json())
      .then(data => {
        console.log(data[0])
        setQuestion(question.data[0] )
      })
      .catch(error => console.error(error))
  }
 
    return (
      <>
        <h1 id='start'>Let's play Jeopardy</h1>
        <button type="submit" onClick={handleClick}>Question</button>
        <div id='Main'>

          <h2>Questions: {question.question}</h2>
          <h2>Categories: {question.category?.title}</h2>
          <h3>Points: {question.value}</h3>
        </div>

        <button onClick={() => setToggle("toggle")}>TOGGLE</button>

        {
          toggle ?<h4>answer:{question.answer}</h4> : null
        }
        <div>
          <h2>score: {score}</h2>
          <button onClick={() => setScore( score("score!") (question.value)}>increment</button>
          <button onClick={decrement}>decrease</button>
        </div>
      </>
    );
  }
}

export default App;
