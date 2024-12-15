
import React ,{useState} from 'react'
import "./login.css"
import { Link ,useNavigate} from "react-router-dom"

function Login() {
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")  
  const navigte=useNavigate()

  const handleLogin=()=>{
       const storeUsers=JSON.parse(localStorage.getItem("users")) || [];
       const user_detail=storeUsers.find((user)=>user.email===email && user.password===password)
       if (user_detail){
          navigte("/")
       }
       else{
        alert("Enter correct password/email")
       }
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    handleLogin()
  }
  return (
    <div className="login_container">
        <div className="input_container">
          <h3>Login</h3>
           <form onSubmit={handleSubmit} >
            <div className="input_detail_container">
                <div className="input_name">
                     <label>Email</label>
                </div>
                <div className="input">
                    <input
                      type="email"
                      placeholder='Enter Your Email'
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      required
                    />
                </div>
            </div>
            <div className="input_detail_container">
                <div className="input_name">
                    <label>Password</label>
                </div>  
                <div className="input">
                    <input
                      type="password"
                      placeholder='Enter the password'
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      required
                    />
                </div>
            </div>
            <div className="input_detail_container">
               <button type="submit">login</button>
            </div>
            </form> 
            <div className="input_detail_container">
              <p>Don't have an account? <span><Link to="/signUp" >sign up</Link></span></p>
            </div>
        </div>
    </div>
  )
}

export default Login