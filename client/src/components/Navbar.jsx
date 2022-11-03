import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around',backgroundColor:"lightgreen"}}>
       <Link to="/"> <h3>Home</h3></Link>
        <h3>Difficulty</h3>
        <h3>Question No.</h3>
        <h3>Score</h3>
        <Link to="/login">  <h3>Login</h3></Link>
    </div>
  )
}

export default Navbar