import React,{useEffect,useState} from 'react'
import image1 from "../../assets/PerfumeImage/Image1.webp"
import image2 from "../../assets/PerfumeImage/Image2.jpg"
import image3 from "../../assets/PerfumeImage/Image3.jpg"
import image4 from "../../assets/PerfumeImage/Image4.jpg"
import image5 from "../../assets/PerfumeImage/Image5.jpg"
import image6 from "../../assets/PerfumeImage/Image6.jpg"
import image7 from "../../assets/PerfumeImage/Image7.jpg"
import image8 from "../../assets/PerfumeImage/Image8.jpg"
import "./slides.css"
import Header from "./Header.jsx"




function Slides() {
    const [moves,setMoves]=useState(0)
    const Images=[
        {id:1,about_perfume:"Awaken your senses with our captivating perfumes",photo:image1,shop:"SHOP NOW",discount:"30% OFF"},
        {id:2,about_perfume:"Luxury in every spritz, crafted just for you",photo:image2,shop:"SHOP NOW",discount:"20% OFF"},
        {id:3,about_perfume:"Unleash your charm with our signature scents.",photo:image3,shop:"SHOP NOW",discount:"36% OFF"},
        {id:4,about_perfume:"Long-lasting elegance, bottled to perfection",photo:image4,shop:"SHOP NOW",discount:"40% OFF"},
        {id:5,about_perfume:"A fragrance as unique as you are.",photo:image5,shop:"SHOP NOW",discount:"32% OFF"},
        {id:6,about_perfume:"Indulge in the art of fine perfumery",photo:image6,shop:"SHOP NOW",discount:"27% OFF"},
        {id:7,about_perfume:"Make every moment unforgettable with our perfumes",photo:image7,shop:"SHOP NOW",discount:"43% OFF"},
        {id:8,about_perfume:"Your perfect match, in a bottle of perfume",photo:image8,shop:"SHOP NOW",discount:"56% OFF"},
    ]
     useEffect(()=>{
        // Automatically change slides every 10 seconds
        const  moveSlides=setInterval(()=>{
            setMoves((prevIndex)=>(prevIndex+1)%Images.length)
        },10000)

        //clear Interval 
        return ()=>clearInterval(moveSlides)
     },[])

     const currentSlide=Images[moves]
    
  return (
    <div className="slides_main_container">
       <div key={currentSlide.id} className={`slides_container`} style={{backgroundImage:`url(${currentSlide.photo})`}} >
         <Header/>
         <div className="shopnow_container">
         <div className="shop_container">
            <p>{currentSlide.about_perfume}</p>
            <p className="char">{currentSlide.discount}</p>
            <a href="">{currentSlide.shop}</a>
          </div>
          </div>
       </div>
       
   </div>
  )
}

export default Slides