import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../../../components/Card'
import Chart from "react-apexcharts";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import Select from 'react-select'

// CSS 

import '../../.././assets/css/dashboard.css'

// img
import dash01 from '../../../assets/images/dashboard/01.jpg'
import dash02 from '../../../assets/images/dashboard/02.jpg'
import dash03 from '../../../assets/images/dashboard/03.jpg'
import dash04 from '../../../assets/images/dashboard/04.jpg'
import dash05 from '../../../assets/images/dashboard/05.jpg'
import dash06 from '../../../assets/images/dashboard/06.jpg'

import mt01 from '../../../assets/images/movie-thumb/01.jpg'
import mt04 from '../../../assets/images/movie-thumb/04.jpg'
import mt05 from '../../../assets/images/movie-thumb/05.jpg'
import mt07 from '../../../assets/images/movie-thumb/07.jpg'

import Blackjack from '../../../assets/images/Ultrafair/Blackjack.svg'
import SweetBon from '../../../assets/images/Ultrafair/Sweetbon.svg'
import Bitcion from '../../../assets/images/Ultrafair/Bitcion.svg'
import BitcionLogo from '../../../assets/images/Ultrafair/Bitcoin-logo.png'
import Ellipse from '../../../assets/images/Ultrafair/Ellipse.png'


SwiperCore.use([Navigation, Autoplay]);

const Dashbord = () => {
   // const Navigation = () => {
   const [ tablebtn, settablebtn] = useState("")

   const tablebtncolorhandles = (color) => {
      settablebtn(color)
   }
   const options2 = [
      { value: '5', label: '5' },
      { value: '10', label: '10' },
      { value: '15', label: '15' },
      { value: '20', label: '20' },
      { value: '50', label: '50' },
      { value: '100', label: '100' },
   ]
   return (
      <>
         <Container fluid>

            <Row>
               <Col sm="12">
                  <Card>
                     <Row>
                        <Col className='col-8'>
                        <div className="iq-search-bar" style={{ fontWeight: "600", fontSize: "14px", background: "#13212D", borderRadius: "30px", width: "60%", marginTop: "3%", marginBottom: "3%",borderStyle :'solid !important', display: "flex", justifyContent: "flex-start" }}   >
                           <button className='BTN-1' style={{ background: tablebtn === "btn1" ? '#344452' : "#13212D", border : tablebtn === "btn1" ? " " : "none" , borderBottomStyle :  tablebtn === "btn1" ?'solid' : 'none' , borderRightStyle : tablebtn === "btn1" ?'solid' : 'none',padding: "5px", borderRadius: "30px", color: "white", borderColor: tablebtn === "btn1" ? "#11FFBD" : "rgb(19, 33, 45)", boxShadow: "none", width: "25%", display: "flex", justifyContent: "space-around", alignSelf: "flex-start", alignItems: "center", marginLeft: "-10px" }} onClick={() => tablebtncolorhandles("btn1")} >My Bets</button>
                           <button className='BTN-1' style={{ background: tablebtn === "btn2" ? '#344452' : "#13212D",border : tablebtn === "btn2" ? " " : "none",  borderBottomStyle :  tablebtn === "btn2" ?'solid' : 'none' , borderRightStyle : tablebtn === "btn2" ?'solid' : 'none',padding: "5px", borderRadius: "30px", color: "white", borderColor: tablebtn === "btn2" ? "#11FFBD" : "rgb(19, 33, 45)", boxShadow: "none", width: "25%", display: "flex", justifyContent: "space-around", alignItems: "center" }} onClick={() => tablebtncolorhandles("btn2")}>All Bets</button>
                           <button className='BTN-1' style={{ background: tablebtn === "btn3" ? '#344452' : "#13212D",border : tablebtn === "btn3" ? " " : "none",  borderBottomStyle :  tablebtn === "btn3" ?'solid' : 'none' , borderRightStyle : tablebtn === "btn3" ?'solid' : 'none', padding: "5px", borderRadius: "30px", color: "white", borderColor: tablebtn === "btn3" ? "#11FFBD" : "rgb(19, 33, 45)", boxShadow: "none", width: "30%", display: "flex", justifyContent: "space-around", alignItems: "center" }} onClick={() => tablebtncolorhandles("btn3")}>High Rollers</button>
                           <button className='BTN-1' style={{ background: tablebtn === "btn4" ? '#344452' : "#13212D",border : tablebtn === "btn4" ? " " : "none", borderBottomStyle :  tablebtn === "btn4" ?'solid' : 'none' , borderRightStyle : tablebtn === "btn4" ?'solid' : 'none', padding: "5px", borderRadius: "30px", color: "white", borderColor: tablebtn === "btn4" ? "#11FFBD" : "rgb(19, 33, 45)", boxShadow: "none", width: "20%", display: "flex", justifyContent: "space-around", alignItems: "center" }} onClick={() => tablebtncolorhandles("btn4")}>Races <div><img src={Ellipse} style={{marginLeft : "10px" ,paddingRight :'0px'}} height="10px" width="10px" /></div></button>
                        </div>
                     </Col><Col className='col-4'>
                        </Col>
                     </Row>
                     <Card.Body>
                        <div className="table-responsive">
                           <table  className="table table-striped table-bordered" >
                              <thead>
                                 <tr className='text-color'>
                                    <th style={{ width: "18%" }}>Game</th>
                                    <th style={{ width: "15%" }}>User</th>
                                    <th style={{ width: "15%" }}>Time</th>
                                    <th className='text-right' style={{ width: "18%" }}>Bet Amount</th>
                                    <th className='text-right' style={{ width: "15%" }}>Multiplier</th>
                                    <th className='text-right' style={{ width: "15%" }}>Payout</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>
                                       <div className="media align-items-center">
                                          <div className="iq-movie">
                                             <img src={Blackjack} height="20px" width="20px" />
                                          </div>
                                          <div className="media-body text-color text-left ml-3">
                                             Blackjackdfcccccccccccccc
                                          </div>
                                       </div>
                                    </td>
                                    <td>  <div className="media align-items-center">
                                       <div className="iq-movie">
                                          <img src={SweetBon} height="20px" width="20px" />
                                       </div>
                                       <div className="media-body text-color text-left ml-3">
                                          SweetBon
                                       </div>
                                    </div></td>
                                    <td className='timetextcolor'>10:01 AM</td>
                                    <td className='left-text-color '><div > 0.00023202302331
                                        <img src={BitcionLogo} style={{marginLeft : "10px"}} height="20px" width="20px" /></div></td>

                                    
                                    <td className='left-text-color'>0.00x</td>
                                    <td className='left-text-color '><div > -0.103293093304
                                       <img src={BitcionLogo} style={{marginLeft : "10px"}} height="20px" width="20px" /></div></td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="media align-items-center">
                                          <div className="iq-movie">
                                             <img src={Blackjack} height="20px" width="20px" />
                                          </div>
                                          <div className="media-body text-color text-left ml-3">
                                          Buffalo King                                          </div>
                                       </div>
                                    </td>
                                    <td>  <div className="media align-items-center">
                                       <div className="iq-movie">
                                          <img src={SweetBon} height="20px" width="20px" />
                                       </div>
                                       <div className="media-body text-color text-left ml-3">
                                          SweetBon
                                       </div>
                                    </div></td>
                                    <td className='timetextcolor'>10:01 AM</td>
                                    <td className='left-text-color '><div > 0.00445600
                                        <img src={BitcionLogo} style={{marginLeft : "10px"}} height="20px" width="20px" /></div></td>

                                    
                                    <td className='left-text-color'>22.00x</td>
                                    <td className='left-text-greencolor'><div style={{color: '#11FFBD !important'}}>0.09803200
                                       <img src={BitcionLogo} style={{marginLeft : "10px"}} height="20px" width="20px" /></div></td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="media align-items-center">
                                          <div className="iq-movie">
                                             <img src={Blackjack} height="20px" width="20px" />
                                          </div>
                                          <div className="media-body text-color text-left ml-3">
                                          Blackjack
                                                                                </div>
                                       </div>
                                    </td>
                                    <td>  <div className="media align-items-center">
                                       <div className="iq-movie">
                                          <img src={SweetBon} height="20px" width="20px" />
                                       </div>
                                       <div className="media-body text-color text-left ml-3">
                                          SweetBon
                                       </div>
                                    </div></td>
                                    <td className='timetextcolor'>10:01 AM</td>
                                    <td className='left-text-color '><div > 23549.99908
                                        <img src={BitcionLogo} style={{marginLeft : "10px"}} height="20px" width="20px" /></div></td>

                                    
                                    <td className='left-text-color'>2.00x</td>
                                    <td className='left-text-greencolor'><div >47099.99816
                                       <img src={BitcionLogo} style={{marginLeft : "10px"}} height="20px" width="20px" /></div></td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="media align-items-center">
                                          <div className="iq-movie">
                                             <img src={Blackjack} height="20px" width="20px" />
                                          </div>
                                          <div className="media-body text-color text-left ml-3">
                                          Cherry Pop
                                                                                </div>
                                       </div>
                                    </td>
                                    <td>  <div className="media align-items-center">
                                       <div className="iq-movie">
                                          <img src={SweetBon} height="20px" width="20px" />
                                       </div>
                                       <div className="media-body text-color text-left ml-3">
                                          SweetBon
                                       </div>
                                    </div></td>
                                    <td className='timetextcolor'>10:01 AM</td>
                                    <td className='left-text-color '><div >150.00000
                                        <img src={BitcionLogo} style={{marginLeft : "10px"}} height="20px" width="20px" /></div></td>

                                    
                                    <td className='left-text-color'>8.83x</td>
                                    <td className='left-text-greencolor'><div >1325.20000000
                                       <img src={BitcionLogo} style={{marginLeft : "10px"}} height="20px" width="20px" /></div></td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="media align-items-center">
                                          <div className="iq-movie">
                                             <img src={Blackjack} height="20px" width="20px" />
                                          </div>
                                          <div className="media-body text-color text-left ml-3">
                                          Sweet Bon
                                                                                </div>
                                       </div>
                                    </td>
                                    <td>  <div className="media align-items-center">
                                       <div className="iq-movie">
                                          <img src={SweetBon} height="20px" width="20px" />
                                       </div>
                                       <div className="media-body text-color text-left ml-3">
                                          SweetBon
                                       </div>
                                    </div></td>
                                    <td className='timetextcolor'>10:01 AM</td>
                                    <td className='left-text-color '><div >0.58430000
                                        <img src={BitcionLogo} style={{marginLeft : "10px"}} height="20px" width="20px" /></div></td>

                                    
                                    <td className='left-text-color'>0.28x</td>
                                    <td className='left-text-color'><div >-0.42274105
                                       <img src={BitcionLogo} style={{marginLeft : "10px"}} height="20px" width="20px" /></div></td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default Dashbord;