import React from 'react'
import Slides from '../Slides/Slides'
import "./home.css"
import per from "../../assets/perfume/per.webp"
import rightIcon from "../../assets/AllImages/rightIcon.jpeg"
import starIcon from "../../assets/AllImages/starIcon.png"
import per1 from "../../assets/perfume/per1.webp"
import per2 from "../../assets/perfume/per2.webp"
import per3 from "../../assets/perfume/per3.webp"
import per4 from "../../assets/perfume/per4.webp"
import per5 from "../../assets/perfume/per5.webp"
import per6 from "../../assets/perfume/per6.webp"
import per7 from "../../assets/perfume/per7.webp"
import per8 from "../../assets/perfume/per8.webp"
import per9 from "../../assets/perfume/per9.webp"
import per10 from "../../assets/perfume/per10.webp"
import per11 from "../../assets/perfume/per11.webp"
import per12 from "../../assets/perfume/per12.webp"
import per13 from "../../assets/perfume/per13.webp"
import per14 from "../../assets/perfume/per14.webp"
import per15 from "../../assets/perfume/per15.webp"
import per16 from "../../assets/perfume/per16.webp"
import per17 from "../../assets/perfume/per17.webp"
import per18 from "../../assets/perfume/per18.webp"
import per19 from "../../assets/perfume/per19.webp"
import per20 from "../../assets/perfume/per20.webp"
import per21 from "../../assets/perfume/per21.webp"
import per22 from "../../assets/perfume/per22.webp"
import per23 from "../../assets/perfume/per23.webp"
import per24 from "../../assets/perfume/per24.webp"
import FOOTER from '../FOOTER/FOOTER'


function Home() {
  const productDetails=[{id:1,url:per1,discount:"30%",text:"GIFT SET FOR MAN",prName:"Luxury Perfume Gift Set For Men",sRating:"4.7",views:"1.2K Reviews",price:"₹549.00",dPrice:"₹0.49.00"},
    {id:2,url:per2,discount:"46%",text:"SUN BLOCK",prName:"SUN BLOCK ",sRating:"4.8",views:"746 Reviews",price:"₹449.00",dPrice:"₹099.00"},
    {id:3,url:per3,discount:"36%",text:"EAU DE PARFUM",prName:"HONEY OUD",sRating:"4.2",views:"46 Reviews",price:"₹649.00",dPrice:"₹199.00"},
    {id:4,url:per4,discount:"26%",text:"C-GLOW",prName:"C-GLOW Face Wash-100ml",sRating:"4.5",views:"2.6K Reviews",price:"₹1449.00",dPrice:"₹499.00"},
    {id:5,url:per5,discount:"13%",text:"EYE BLOW",prName:"Growbrow Eye brow",sRating:"4",views:"4.6K Reviews",price:"₹1009.00",dPrice:"₹299.00"},
    {id:6,url:per6,discount:"56%",text:"SHOWER GEL",prName:"SHOWER GEL",sRating:"4.8",views:"456 Reviews",price:"₹1599.00",dPrice:"₹899.00"},
    {id:7,url:per7,discount:"30%",text:"EAU DE PARFUM",prName:"MOOD COLLECTION GIFT SET",sRating:"4.4",views:"846 Reviews",price:"₹1200.00",dPrice:"₹699.00"},
    {id:8,url:per8,discount:"28%",text:"EAU DE PARFUM",prName:"Best Of Men Perfume Combo",sRating:"4.7",views:"7.6K Reviews",price:"₹455.00",dPrice:"₹1099.00"},
    {id:9,url:per9,discount:"32%",text:"EAU DE PARFUM",prName:"WHITE OUD PERFUME",sRating:"4.2",views:"74 Reviews",price:"₹1456.00",dPrice:"₹899.00"},
    {id:10,url:per10,discount:"40%",text:"EAU DE PARFUM",prName:"DATE NIGHT GIFT SET",sRating:"4.8",views:"766 Reviews",price:"₹699.00",dPrice:"₹209.00"},
    {id:11,url:per11,discount:"49%",text:"EAU DE PARFUM",prName:"Tiger Man Perfume-100ml",sRating:"4.9",views:"5.K Reviews",price:"₹759.00",dPrice:"₹049.00"},
    {id:12,url:per12,discount:"40%",text:"KLUB HAN",prName:"G.O.A.T Man Perfume-100ml",sRating:"4.4",views:"716 Reviews",price:"₹399.00",dPrice:"₹049.00"},
    {id:13,url:per13,discount:"36%",text:"BLUSH PERFUM",prName:"FRESH Unisex Perfume",sRating:"4.5",views:"2.6K Reviews",price:"₹489.00",dPrice:"₹099.00"},
    {id:14,url:per14,discount:"32%",text:"EAU DE PARFUM",prName:"CEO Man INTENSE",sRating:"4.3",views:"589 Reviews",price:"₹1389.00",dPrice:"₹399.00"},
    {id:15,url:per15,discount:"27%",text:"EAU DE PARFUM",prName:"MOOD COLLECTION GIFT SET",sRating:"4.8",views:"706 Reviews",price:"₹699.00",dPrice:"₹199.00"},
    {id:16,url:per16,discount:"33%",text:"EAU DE PARFUM",prName:"EXPERIENCE PERFUME",sRating:"4.2",views:"1.2K Reviews",price:"₹1200.00",dPrice:"₹599.00"},
    {id:17,url:per17,discount:"41%",text:"EAU DE PARFUM",prName:"CEO MAN PERFUME-100ml",sRating:"4.1",views:"77 Reviews",price:"₹1699.00",dPrice:"₹499.00"},
    {id:18,url:per18,discount:"21%",text:"EAU DE PARFUM",prName:"KLUB PERFUME-100ml",sRating:"4.8",views:"845 Reviews",price:"₹1300.00",dPrice:"₹099.00"},
    {id:19,url:per19,discount:"06%",text:"EAU DE PARFUM",prName:"GROW BLOW EYE BROW",sRating:"4.9",views:"2.7K Reviews",price:"₹449.00",dPrice:"₹099.00"},
    {id:20,url:per20,discount:"43%",text:"EAU DE PARFUM",prName:"FACE SERUM",sRating:"4.6",views:"4.4K Reviews",price:"₹899.00",dPrice:"₹1009.00"},
    {id:21,url:per21,discount:"48%",text:"EAU DE PARFUM",prName:"CEO Man Perfume-100ml",sRating:"4.5",views:"134 Reviews",price:"₹1009.00",dPrice:"₹1999.00"},
    {id:22,url:per22,discount:"27%",text:"EAU DE PARFUM",prName:"Tan-Free & Glowing Skin",sRating:"4.6",views:"456 Reviews",price:"₹479.00",dPrice:"₹099.00"},
    {id:23,url:per23,discount:"28%",text:"EAU DE PARFUM",prName:"SUN GLOW",sRating:"4.8",views:"345 Reviews",price:"₹1209.00",dPrice:"₹209.00"},
    {id:24,url:per24,discount:"30%",text:"EAU DE PARFUM",prName:"G.O.A.T Man Perfume-100ml",sRating:"4.4",views:"3.8 Reviews",price:"₹600.00",dPrice:"₹099.00"}
  ]
  return (
    <div className="home_container">
        <Slides/>
        <div className="middle_container">
            <h3 className="best_sellers">
              BESTSELLERS
            </h3>
            <div className="product_container">
              {productDetails.map((product)=>(
              <div className="product_details_container" key={product.id}>
                
                <div className="product_image" style={{backgroundImage:`url(${product.url})`}}>
                   <a href="" className="best">BESTSELLERS</a>
                  
                   <a href=""className="discount">{product.discount} OFF</a>
                </div>
                
                <p className="product_name">{product.text}</p>
                <p className="perfume_detail">{product.prName}</p>
                <div className="star_div">
                  <img src={starIcon}/>
                  <p >{product.sRating} |</p>
                  <img src={rightIcon} className="star"/>
                  <p>&#40;{product.views}&#41;</p>
                </div>
                <div className="price_container">
                  <p className="price">{product.price}</p>
                  <del>{product.dPrice}</del>
                </div>
                <div className="add_to_cart">
                  <a href="">ADD TO CART</a>
                </div>
                
              </div>
              ))}
            </div>
        </div>
        <FOOTER/>
    </div>
   
  )
}

export default Home