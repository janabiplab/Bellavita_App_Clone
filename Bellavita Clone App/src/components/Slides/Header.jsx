import React from 'react'
import "./header.css"
import searchIcon from "../../assets/AllImages/search.png"
import userIcon from "../../assets/AllImages/user.jpeg"
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate=useNavigate()
  const signUpPage=()=>{
    window.location.href="/signUp"
  }
  const logout=()=>{
    localStorage.removeItem('user')
    navigate("/login")
  }

  return (
    <div className="header">
        <div className="search_name_container">
            <div className="search">
               <img src={searchIcon}/>
               <input placeholder="search here"/>
            </div>
            <div className="app_name">
                <p>Bellavita</p>
            </div>
            <div className="userimage">
                <img src={userIcon}/>
            </div>
            <div className="sign_up">
              <button onClick={signUpPage}>Sign Up</button> &nbsp;
              <button onClick={logout}>logout</button>
            
            </div>
        </div>
        <div className="all_items">
              <a href=''>CRAZY DEALS</a>
              <a href=''>SHOP ALL</a>
              <a href="">BESTSELLERS</a>
              <a href=''>PERFUMES</a>
              <a href=''>BATH & BODY</a>
              <a href=''>COSMETICS</a>
             
        </div>
    </div>
  )
}

export default Header