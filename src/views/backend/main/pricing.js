import React,{useState} from 'react'
// import {Container,Row,Col,Button} from 'react-bootstrap'

import { Container, Row, Col, Card, Button, ListGroup, CardGroup, CardColumns } from 'react-bootstrap'
// import Card  from '../../../components/Card'
import Img1 from "../../../assets/images/Customheader/Headerimg4.png"
import CardImg1 from "../../../assets/images/Cardimg.png"
import CardImg2 from "../../../assets/images/Cardimg1.png"
import CardImg3 from "../../../assets/images/Cardimg3.png"
import CardImg4 from "../../../assets/images/Cardimg4.png"
import CardImg5 from "../../../assets/images/Cardimg5.png"
import CardImg6 from "../../../assets/images/Cardimg6.png"
import CardImg7 from "../../../assets/images/Cardimg7.png"
import CardImg8 from "../../../assets/images/Cardimg8.png"
import CardImg9 from "../../../assets/images/Cardimg9.png"
import CardImg10 from "../../../assets/images/Cardimg310.png"
import "../../../assets/css/Customheader.css"
import {ChallengesSVG,UltrafairOrignalsSVG } from "../../../components/partials/backend/sidebarstyle/sidebarIcons"
const check=<i className='ri-check-line ri-2x'></i>
const close=<i className='ri-close-line i_close'></i>

const Images =[CardImg1,CardImg2,CardImg3,CardImg4,CardImg5,CardImg6,CardImg7,CardImg8,CardImg9,CardImg10]
const Pricing = () => { 
    const [pricing, setPricing]=useState('pricing') 
    const pricingLists = [
     {
       title: 'New Movies',
       icon: check,
       icon1: check,
       icon2: check,
       icon3: check,
     },
     {
       title: 'Streamit Special',
       icon: close,
       icon1: check,
       icon2: check,
       icon3: check,
     },
     {
       title: 'American Tv Shows',
       icon: close,
       icon1: check,
       icon2: check,
       icon3: check,
     },
     {
       title: 'Hollywood Movies',
       icon: check,
       icon1: check,
       icon2: check,
       icon3: check,
     },
     {
       title: 'Video Quality',
       icon: 'SD(480p)',
       icon1: 'HD(720p)', 
       icon2: 'FHD(1080p)',
       icon3: 'FHD(1080p)'
     },
     {
        title: 'Ad Free Entertainment	',
        icon: close,
        icon1: close,
        icon2: check,
        icon3: check,
      }
   ]
    return (
        <>
            <Container fluid>
                {/* <Row>
                    <Col sm="12">
                        <Card>
                            <Card.Body>
                                <div className="table-responsive pricing pt-2">
                                    <table id="my-table" className="table">
                                        <thead>
                                        <tr>
                                            <th className="text-center prc-wrap"></th>
                                            <th className="text-center prc-wrap">
                                                <div className={`prc-box ${pricing === 'Basic' ? 'active' : ''} `} onClick={() =>setPricing('Basic')}>
                                                    <div className="h3 pt-4 text-white">$19<small> / Per month</small></div>
                                                    <span className="type">Basic</span>
                                                </div>
                                            </th>
                                            <th className="text-center prc-wrap">
                                                <div className={`prc-box  ${pricing === 'pricing' ? 'active' : ''}`} onClick={() =>setPricing('pricing')}>
                                                    <div className="h3 pt-4 text-white">$39<small> / Per month</small></div>
                                                    <span className="type">Standard</span>
                                                </div>
                                            </th>
                                            <th className="text-center prc-wrap">
                                                <div className={`prc-box ${pricing === 'Platinum' ? 'active' : ''}`} onClick={() =>setPricing('Platinum')}>
                                                    <div className="h3 pt-4 text-white">$119<small> / Per month</small></div>
                                                    <span className="type">Platinum</span>
                                                </div>
                                            </th>
                                            <th className="text-center prc-wrap">
                                                <div className={`prc-box ${pricing === 'Premium' ? 'active' : ''} `} onClick={() =>setPricing('Premium')}>
                                                    <div className="h3 pt-4 text-white">$219<small> / Per month</small></div>
                                                    <span className="type">Premium</span>
                                                </div>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {pricingLists.map((item) => (
                                                <tr key={item.title}>
                                                    <th className="text-center" scope="row">{item.title}</th>
                                                    <td className={`text-center child-cell ${pricing === 'Basic' ? 'active' : ''}`}>{item.icon}</td>
                                                    <td className={`text-center child-cell ${pricing === 'pricing' ? 'active' : ''}`}>{item.icon1}</td>
                                                    <td className={`text-center child-cell ${pricing === 'Platinum' ? 'active' : ''}`}>{item.icon2}</td>
                                                    <td className={`text-center child-cell ${pricing === 'Premium' ? 'active' : ''}`}>{item.icon3}</td>
                                                </tr>
                                                
                                            ))}
                                            <tr>
                                                <td className="text-center"><i className="ri-close-line i_close"></i></td>
                                                <td className="text-center"> <Button href="#" variant="primary mt-3">Purchase</Button></td>
                                                <td className="text-center"> <Button href="#" variant="primary mt-3">Purchase</Button></td>
                                                <td className="text-center"> <Button href="#" variant="primary mt-3">Purchase</Button></td>
                                                <td className="text-center"> <Button href="#" variant="primary mt-3">Purchase</Button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row> */}
      <Row>
      <div className="iq-top-navbar headertop" style={{height:"10%",marginTop:"4%",background:"#1E2C37"}}>
                 <div className="iq-navbar-custom" style={{display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",marginTop:"7.5px"}}>
                 <div>
 <img src={Img1} className="LOGOO" style={{height:"9vh",width:"8vw"}}/>
                 </div>
                 <div style={{display:"flex",flexDirection:"row",justifyContent:'space-between',alignItems:"center",width:"13%"}}>
                    {/* <img src={UltrafairOrignalsSVG} height="20px" width="20px"/>
                     */}
                     <svg  width="26" height="26" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0195 0.108172C9.57736 0.107346 9.12966 0.135734 8.67579 0.194109C4.10379 0.782109 0.453973 4.5953 0.0429732 9.1863C-0.537027 15.6733 5.08054 21.0223 11.6445 19.9773C15.7755 19.3193 19.1228 16.0153 19.8438 11.8953C20.1568 10.1073 19.9891 8.3905 19.4531 6.8445C19.2131 6.1525 18.3442 5.93492 17.8262 6.45192L17.7734 6.50466C17.5114 6.76666 17.4425 7.1537 17.5625 7.5027C18.0275 8.8477 18.1458 10.3527 17.7988 11.9187C17.1208 14.9717 14.6121 17.3936 11.5371 17.9656C5.90611 19.0136 1.06935 14.1563 2.15235 8.52028C2.74935 5.41328 5.2369 2.90114 8.3379 2.27614C10.8211 1.77532 13.144 2.43576 14.8945 3.79958L13.4648 5.22927C12.2801 4.38299 10.7832 3.94813 9.17188 4.16481C6.56488 4.51481 4.4325 6.62426 4.0625 9.22927C3.4925 13.2453 6.90383 16.6398 10.9238 16.0398C13.0438 15.7228 14.8375 14.2059 15.6035 12.2039C15.7775 11.7499 15.8883 11.3049 15.9473 10.8699C16.0753 9.92689 14.9054 9.37367 14.2324 10.0457C14.0704 10.2087 13.9783 10.427 13.9473 10.655C13.6393 12.908 11.4713 14.5669 9.03125 13.9949C7.60225 13.6599 6.44433 12.4991 6.11133 11.0691C5.50133 8.44311 7.478 6.10817 10 6.10817C10.7422 6.10817 11.4328 6.31474 12.0254 6.66872L10.5156 8.17848C10.3476 8.13269 10.1742 8.10905 10 8.10817C9.46957 8.10817 8.96086 8.31889 8.58579 8.69396C8.21072 9.06903 8 9.57774 8 10.1082C8 10.6386 8.21072 11.1473 8.58579 11.5224C8.96086 11.8975 9.46957 12.1082 10 12.1082C10.5304 12.1082 11.0391 11.8975 11.4142 11.5224C11.7893 11.1473 12 10.6386 12 10.1082C11.9999 9.9334 11.9769 9.75939 11.9316 9.59059L19.293 2.22927C19.684 1.83927 19.684 1.2062 19.293 0.815203C18.903 0.424203 18.2699 0.424203 17.8789 0.815203L16.3164 2.3777C14.5974 0.971417 12.4124 0.112643 10.0195 0.108172Z" fill="#11FFBD" />
    </svg>
                    <h3>Challenges</h3>
                 </div>


                 </div>
                 </div>

                 
      </Row>


              <Row style={{marginTop:"10vh"}}>
              {Images.map((e,i)=>
              {return(
                <Col sm="4" md="4" lg="2" key={i}>
                  <Card className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3" style={{height:"95%",width:"111%"}} >
                     <Card.Img variant="top" src={e}  alt="#"  style={{height:"55%"}}  />
                     <Card.Body>
                        <Card.Title as="h5">Hypernova Radial Reel</Card.Title>
                        <Card.Text style={{color:"#B3BAD1"}}>First to hit 3,0000x with min</Card.Text>
                   <div><span style={{color:"#B3BAD1"}}>0.000000005&nbsp;</span><i class="ri-bit-coin-fill" style={{color:"orange",fontSize:'15px'}} ></i><span style={{color:"#B3BAD1"}}>&nbsp;bet</span></div>
                      <div style={{display:"flex",flexDirection:"column"}}>
                      <span style={{color:"#B3BAD1",fontSize:"12px"}}>Prize</span>
                       <div style={{display:'flex'}}><h5>0.000000005&nbsp;</h5><i class="ri-bit-coin-fill" style={{color:"orange"}} ></i></div>

                      </div>

                      <div style={{display:"flex",flexDirection:"column"}}>
                      <span style={{color:"#B3BAD1",fontSize:"12px"}}>Created by</span>
                       <div style={{display:'flex'}}><i class="ri-bit-coin-fill" style={{color:"orange",fontSize:'15px'}} ></i><h5>&nbsp;Creature</h5></div>

                      </div>
                     </Card.Body>
                  </Card>
               </Col>
              )
              }
               )
              }
              </Row>
                 
            </Container>
        </>
    )
}
export default Pricing;