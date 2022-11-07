import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const diff = useSelector(store=> store.singlequestion.difficulty)
  return (
    <div style={{display: 'flex', justifyContent: 'space-around',backgroundColor:"lightgreen"}}>
       <Link to="/"> <h3>Home</h3></Link>
        <Link to="/login">  <h3>Login</h3></Link>
    </div>
  )
}

export default Navbar