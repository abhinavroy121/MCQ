import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Quiz from './components/Quiz'
import Signup from './components/Signup'


const Routing = () => {
  return (
    <div>
        <Routes>
          
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/" element={<Quiz/>}/>
        </Routes>
    </div>
  )
}

export default Routing