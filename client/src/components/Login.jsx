
import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Login = () => {
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
  
     const handlebutton = ()=>{
        let payload = {email,password}
        console.log(payload)
        axios.post('http://localhost:8000/users/login',payload)
        .then((res)=> {
           console.log(res.data)
        })
     }
  
    return (
      <div>
        <h1>Login here</h1>
          <br/>
          <div  style={{display: 'flex', flexDirection: 'column', width:"300px",margin:"auto"}}>
            <br/>
              <input type="email" placeholder="Email" onChange={(e)=>setemail(e.target.value)}/>
              <br/>
              <input type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
              <br/>
              <button onClick={handlebutton}>Click</button>
          </div>
          <Link to="/signup"><p>Register here</p></Link> 
      </div>
    )
}

export default Login