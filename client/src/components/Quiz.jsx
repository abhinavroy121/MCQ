import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quizQuestion } from '../Redux/action';
import Quizmap from './Quizmap';

const Quiz = () => {
    // console.log(process.env.REACT_APP_API_KEY)
  const quizapi = `https://quizapi.io/api/v1/questions?apiKey=${process.env.REACT_APP_API_KEY}&category=code&difficulty=Easy&limit=10&tags=JavaScript`;
  
    const [data,setdata] = useState([])
    const dispatch = useDispatch()
    const quiz  = useSelector(store=> store.quizquestion)
   useEffect(()=>{
    getquestions()

   },[window.load])

   function getquestions (){
      axios.get(quizapi)
      .then((res)=> {
        setdata(...res.data)
        // console.log(res.data)
        if(quiz.length <1){
          dispatch(quizQuestion(res.data))
        }
     
      })
      .catch((err)=> {
        console.log(err,"error while getting questions")
      })
  }


  return (
    <div>
      <Quizmap getquestions={getquestions}/>
    </div>
  )
}

export default Quiz