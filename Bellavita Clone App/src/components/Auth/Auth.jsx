import React ,{useState}from 'react'
import "./auth.css"
import { useNavigate ,Link} from "react-router-dom";

function Auth() {
  const [name,setName]=useState("")
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const [signup,setSignUp]=useState(true)
  const navigate = useNavigate();

  const handleSignUp=()=>{
    const storeUsers = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser=storeUsers.find((user)=>user.email===email)
    if (existingUser){
      alert("user already exist,please login")
    }

    const newUser={name,email,password}
    storeUsers.push(newUser)
    localStorage.setItem('users',JSON.stringify(storeUsers))
    localStorage.setItem('user',JSON.stringify(newUser))
    navigate("/"); 
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    handleSignUp()
  }
  return (
   <div className="auth_container">
    <div className="Auth_div">

        <h4>SignUp</h4>
        <form onSubmit={handleSubmit}>
        <div className="sign_input">
          <label>Name:</label>
          <input
           type="text"
           placeholder='Enter Your Full Name'
           value={name}
           onChange={(e)=>setName(e.target.value)}
           required
          />
        </div>
        <div className="sign_input">
          <label>Email:</label>
          <input
           type="email"
           placeholder='Enter Your Email'
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           required
          />
         
        </div>
        <div className="sign_input">
          <label>Password:</label>
          <input
           type="password"
           placeholder='Enter password'
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
           required
          />
        </div>
        <div className="sign_input">
         <button type="submit">Sign Up</button>
        </div>
        </form>
        <div className="sign_input">
           <p>You have an account?<span><Link to="/login">login</Link></span></p>
        </div>

    </div>
   </div>
  )
}

export default Auth