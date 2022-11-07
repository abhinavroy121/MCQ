import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import '../App.css';
import { singlequestion } from '../Redux/action';

const Quizmap = () => {
     const [i,seti] = useState(0)
    const [ans,setAns] = useState(false)
    const [display,setdisplay] = useState(false)
    const quiz  = useSelector(store=> store.quizquestion)
    
     const handletrue = (e)=>{
          setAns(true)
          console.log(e.difficulty)
     }

     useEffect(()=>{
        if(i>9){
            setdisplay(true)
        }
     })
  
  return (
    <div className="container">
        <div>
           { quiz.map((item,index)=>(
              
                i==index? <div key={index} >
                       <p id="difvalue" >Difficulty: {i<=4?item.difficulty : "Medium"}</p>
                       <br/>
                   <h1>{item.question}</h1>                   
                   <p onClick={()=>handletrue(item)} className={ans && item.correct_answers.answer_a_correct== "true"? "green" :ans? "red": "white"}>{item.answers.answer_a}</p>
                   <p onClick={()=>handletrue(item)} className={ans && item.correct_answers.answer_b_correct== "true"?  "green" :ans? "red": "white"}>{item.answers.answer_b}</p>
                   <p onClick={()=>handletrue(item)} className={ans && item.correct_answers.answer_c_correct== "true"?  "green" :ans? "red": "white"}>{item.answers.answer_c}</p>
                   <p onClick={()=>handletrue(item)} className={ans && item.correct_answers.answer_d_correct== "true"?  "green" :ans? "red": "white"}>{item.answers.answer_d}</p>
                   <p onClick={()=>handletrue(item)} className={ans && item.correct_answers.answer_e_correct== "true"?  "green" :ans? "red": "white"}>{item.answers.answer_e}</p>
                   <p onClick={()=>handletrue(item)} className={ans && item.correct_answers.answer_f_correct== "true"? "green" :ans? "red": "white" }>{item.answers.answer_f}</p>
               
                   <button onClick={()=>{
                      if(ans== true){
                        setAns(false)
                        seti(i+1)                      
                      }                    
                     else{
                        alert("Please select an answer")
                     }
                   }}> Next</button>
                 </div>: <div key={index}></div>
            ))}
            <div> <h1 style={{display: display? "block": "none"}}>Test Finished</h1></div>
        </div>
    </div>
  )
}

export default Quizmap;