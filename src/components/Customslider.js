import React from 'react'
import  Card  from '../components/Card'

import { Link } from 'react-router-dom'
import Showimg1 from '../assets/images/Show1.png'
import Showimg2 from '../assets/images/Show2.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import Showimg3 from '../assets/images/Show3.png'

const Customslider = ({classnm,classnm2,title}) => {
  return (
    <div>
        <Card id="slider1" >
                    <Card.Header className="d-flex justify-content-between align-items-center">
                           <div>
                              <h4 className="card-title m-0">{title}</h4>
                           </div>
                                <div className="" id="swiper">
                              <div className={`swiper-button right ${classnm}`} style={{background:"#344452",lineHeight:1.5}}>Previous</div>
                              <div className={`swiper-button left ${classnm2}`} style={{background:"#344452",lineHeight:1.5}}>Next</div>
                           
                           </div>
                    </Card.Header>
                    <Card.Body>
                       <Swiper
                           navigation={{
                              prevEl: `.${classnm}`,
                              nextEl: `.${classnm2}`
                           }}
                           breakpoints={{
                              320: {   slidesPerView: 1},                
                              550: { slidesPerView: 2 },
                              991: { slidesPerView: 3 },
                              1400: { slidesPerView: 4 },
                           }}
                           loop={true}
                           className="list-unstyled row top-rated-item mb-0 iq-rtl-direction"
                        >
                        
                          <SwiperSlide className="col-sm-2 col-lg-2 col-xl-2 iq-rated-box">
                             
               
                                   <div className="iq-thumb" >
                                      <Link >
                                         <img src={Showimg1} className="img-fluid  img-border-radius" width="150vw" height="300vh" alt=""/>
                                      </Link>
                                   </div>
                            
                          
                    
                          </SwiperSlide>
                          <SwiperSlide className="col-sm-2 col-lg-2 col-xl-2 iq-rated-box">
                             
               
                             <div className="iq-thumb" >
                                <Link >
                                   <img src={Showimg2} className="img-fluid  img-border-radius" width="150vw" height="300vh" alt=""/>
                                </Link>
                             </div>
                       
                    
              
                    </SwiperSlide>
                    <SwiperSlide className="col-sm-2 col-lg-2 col-xl-2 iq-rated-box">
                             
               
                             <div className="iq-thumb" >
                                <Link >
                                   <img src={Showimg3} className="img-fluid  img-border-radius" width="150vw" height="300vh" alt=""/>
                                </Link>
                             </div>
                  
              
                    </SwiperSlide>
                    <SwiperSlide className="col-sm-2 col-lg-2 col-xl-2 iq-rated-box">
                             
               
                             <div className="iq-thumb" >
                                <Link >
                                   <img src={Showimg2} className="img-fluid  img-border-radius" width="150vw" height="300vh" alt=""/>
                                </Link>
                             </div>
                       
                    
              
                    </SwiperSlide>
                    
                          
                          </Swiper>
                    </Card.Body>
                 </Card>
    </div>
  )
}

export default Customslider
