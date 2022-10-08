import React,{useState} from 'react'
import  Card  from '../components/Card'

import { Link } from 'react-router-dom'
import Showimg1 from '../assets/images/Show1.png'
import Showimg2 from '../assets/images/Show2.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import Showimg3 from '../assets/images/Show3.png'


const Customslider = ({classnm,classnm2,title}) => {
  function handlemouse(id){
    setshow(id)
    console.log("dfsdfsd",id)

   }

  const [show,setshow]= useState(null)
   const Images =[Showimg1, Showimg2, Showimg3,Showimg1, Showimg2, Showimg3,Showimg1, Showimg2, Showimg3,Showimg1, Showimg2, Showimg3,Showimg1, Showimg2, Showimg3,Showimg1, Showimg2, Showimg3,Showimg3,Showimg1, Showimg2, Showimg3,Showimg1, Showimg2, Showimg3,Showimg1, Showimg2, Showimg3,Showimg1, Showimg2, Showimg3]
  return (
    <div>
        <Card id="slider1" >
                    <Card.Header className="d-flex justify-content-between align-items-center Cardresponsive ResponsiveHeader">
                           <div>
                              <h3 className="card-title m-0">{title}</h3>
                           </div>
                                <div className="" id="swiper">
                              <div className={`swiper-button swiper-button-prev Responsivrbtn ${classnm}`} style={{background:"#344452",padding: '23px 30px' }}>Previous</div>
                              <div className={`swiper-button swiper-button-next  Responsivrbtn ${classnm2}`} style={{background:"#344452",padding: '23px 30px' }}>Next</div>
                           
                           </div>
                    </Card.Header>
                    <Card.Body>
                       <Swiper
                           navigation={{
                              prevEl: `.${classnm2}`,
                              nextEl: `.${classnm}`,
                           }}
                           breakpoints={{
                              320: {   slidesPerView: 1},                
                              550: { slidesPerView: 2 },
                              991: { slidesPerView: 3 },
                              1400: { slidesPerView: 4 },
                           }}
                           spaceBetween={10}
                           // loop={true}
                           className="list-unstyled row top-rated-item mb-0 iq-rtl-direction"
                      
                        >
                        {Images.map((e,i)=>{
                           return(
                                 <SwiperSlide className="col-sm-1 col-lg-1 col-xl-1 iq-rated-box threeinone" style={{padding:0}} key={i} >
                             
               
                                 <div className="iq-thumb bg-image hover-overlay" style={{position:"relative"}}  onMouseLeave={()=>setshow(null)} >
                           
                                       <img src={e} className="img-fluid  img-border-radius" width="150vw" height="300vh"style={{borderRadius:"0px",borderRadius:'10px'}} alt="" onMouseEnter={()=>handlemouse(i)} />
                        
                                    <div style={{display:show==i?"flex":"none",background:'#11FFBD',position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:'10px',opacity:0.9,justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                                    <svg width="30" height="30" viewBox="0 0 32 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 3.31249V35.6875C0 38.1562 2.71875 39.6562 4.8125 38.3125L30.25 22.125C32.1875 20.9062 32.1875 18.0937 30.25 16.8437L4.8125 0.687495C2.71875 -0.656255 0 0.843745 0 3.31249Z" fill="#263642"/>
</svg><span style={{color:'black',fontSize:"10px",fontWeight:"bold"}}>{title}</span>


    
                                    </div>
                                 </div>
        
           
                           
                        
                  
                        </SwiperSlide>
                           )

                        })}
                    
               
              
                    
                          
                          </Swiper>
                    </Card.Body>
                 </Card>
    </div>
  )
}

export default Customslider
