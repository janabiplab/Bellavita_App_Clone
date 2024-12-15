import React from 'react'
import "./footer.css"
import Youtube from "../../assets/AllImages/Youtube.png"
import Facebook from "../../assets/AllImages/facebook.png"

import Twiter from "../../assets/AllImages/Twiter.png"
import Linkedin from "../../assets/AllImages/linkedin.png"
import Instra from "../../assets/AllImages/instra.jpeg"

function FOOTER() {
    const bestSeller=[
        {id:1,page:"Ultimate Perfume Box"},
        {id:2,page:"Perfume Gift Set For Men"},
        {id:3,page:"Perfume Gift Set For women"},
        {id:4,page:"Under Eye Cream for "},
        {id:5,page:"Dark Circles"},
        {id:6,page:"Perfume For Men"},
        {id:7,page:"Perfume For Women"},
        {id:8,page:"Unisex Perfume"},
        
    ]
    const INFORMATION=[
        {id:1,page:"Blogs"},
        {id:2,page:"Newsroom"},
        {id:3,page:"Terms & Conditions"},
        {id:4,page:"Privacy Policy"},
        {id:5,page:"Refund and Return"},
        {id:6,page:"Supply Policy"},
        {id:7,page:"Invoie"},
        
    ]

    const SUPPORT=[
        {id:1,page:"About Us"},
        {id:2,page:"Contact Us"},
        {id:3,page:"Order Tracking"},
        {id:4,page:"All Produts"},
        {id:5,page:"FAQ"},
        {id:6,page:"Sitemap"},


    ]

    const ContactUs=[
        {id:1,page:"Office Location 47T,"},
        {id:1,page:"Udvyy vihar phase III"},
        {id:1,page:"Gurgaon,Haryana,India"},
        {id:2,page:"Contact Us on WhatsApp"},
        {id:3,page:"+ 91-9311732440"},
        {id:4,page:"Timing 10.00 AM to 7.00"},
        {id:4,page:" PM Monday to Sunday"},
        

        

    ]
  return (
    <div className="footer_container">
        <div className="footer_main_container">
            <div className="BestSeller_container">
                <h2>BESTSELLER</h2>
                {bestSeller.map((bestsell)=>(
                   <p ><a href="">{bestsell.page}</a></p>
                ))}

            </div>
            <div className="BestSeller_container">
                <h2>INFORMATION</h2>
                {INFORMATION.map((infor)=>(
                   <p><a href="">{infor.page}</a></p>
                ))}

            </div>
            <div className="BestSeller_container">
                <h2>SUPPORT</h2>
                {SUPPORT.map((suport)=>(
                   <p><a href="">{suport.page}</a></p>
                ))}

            </div>
            <div className="BestSeller_container">
                <h2>Contact Us</h2>
                {ContactUs.map((contect)=>(
                   <p><a href="">{contect.page}</a></p>
                ))}

            </div>
            <div className="BestSeller_container">
                <h2>Sign Up/Login</h2>
                <div className="BestSeller_Signup_container">
                 <p><a href="/signUp"> SignUp</a></p>
                 <p><a href="/signUp"> Login</a></p>
                 </div>     

            </div>
            <div className="BestSeller_container">
                <h2>Follow Us On</h2>
                <div className="BestSeller_Signup_container">
                  <a href=""><img src={Youtube} alt="" className="youtube" /></a>
                  <a href=""><img src={Twiter} alt="" className="twiter" /></a>
                  <a href=""><img src={Linkedin} alt="" className="linkedin" /></a>
                  <a href=""><img src={Facebook} alt="" className="facebook" /></a>
                  <a href=""><img src={Instra} alt="" className="instra" /></a>
                 
                 </div>     

            </div>
            

        </div>

    </div>
  )
}

export default FOOTER