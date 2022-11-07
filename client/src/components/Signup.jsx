import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Signup = () => {
  const [name,setname] = useState("")
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  
  const navigate = useNavigate()

   const handlebutton = ()=>{
      let payload = {name,email,password}
      console.log(payload)
      axios.post('http://localhost:8000/users/create',payload)
      .then((res)=> {
        //  console.log(res.data)
         navigate("/login")
      })
   }

  return (
    <div>
      <h1>Sign up</h1>
        <br/>
        <div  style={{display: 'flex', flexDirection: 'column', width:"300px",margin:"auto"}}>
          <br/>
            <input type="text" placeholder="Name" onChange={(e)=>setname(e.target.value)}/>
            <br/>
            <input type="email" placeholder="Email" onChange={(e)=>setemail(e.target.value)}/>
            <br/>
            <input type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
            <br/>
            <button onClick={handlebutton}>Click</button>
        </div>
        <Link to="/login"><p>Login here</p></Link> 
    </div>
  )
}

export default Signup