import React,{useState} from 'react'
import { SliderData } from './sliderdata';
import{FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'


const Slider = ({slides}) => {
  const[now,setNow]=useState(0)
  const length= slides.length;
   const nextSlide=()=>{
    setNow(now===length-1?0:now+1)
   }
   const prevSlide=()=>
   setNow(now===0?length-1:now-1)



  if(!Array.isArray(slides)||slides.length<=0){return null;}

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide()}
        />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide()} />
    {SliderData.map((slide,index)=>{
     return(
      <div className={index===now?'slideActive':'slide'} key={index}>
        {index===now&&(<img src={slide.image} alt="Nature Image" className='image'/>)}
              
    </div>
    
     )


    })}

    </section>
  )
}
export default Slider;