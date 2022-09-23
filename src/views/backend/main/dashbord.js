import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../../../components/Card'
import Chart from "react-apexcharts";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import Select from 'react-select'

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

SwiperCore.use([Navigation, Autoplay]);

const Dashbord = () => {
   // const Navigation = () => {
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
                     <Card.Header className="d-flex justify-content-between">
                        <Card.Header className="d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Bootstrap Datatables</h4>
                           </div>
                        </Card.Header>
                        <div className="iq-card-header-toolbar d-flex align-items-center seasons">
                           <div className="iq-custom-select d-inline-block sea-epi s-margin">
                              <Select options={options2} />
                           </div>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <div className="table-responsive">
                           <table id="datatable" className="table table-striped table-bordered" >
                              <thead>
                                 <tr className='text-color'>
                                    <th style={{ width: "15%" }}>Game</th>
                                    <th style={{ width: "15%" }}>User</th>
                                    <th style={{ width: "15%" }}>Time</th>
                                    <th style={{ width: "20%" }}>Bet Amount</th>
                                    <th style={{ width: "15%" }}>Multiplier</th>
                                    <th style={{ width: "20%" }}>Payout</th>
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
                                    <td className='text-color'>
                                     <div className='text-color'>  0.00023202302331   </div>                                </td>
                                    <td className='text-color'>0.00x</td>
                                    <td className='text-color'><div className='text-color'> -0.103293093304 
                                    <img src={Bitcion} height="15px" width="15px" /></div></td>
                                 </tr>
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
                                    <td className='text-color'>
                                     <div className='text-color'>  0.00023202302331   </div>                                </td>
                                    <td className='text-color'>0.00x</td>
                                    <td className='text-color'><div className='text-color'> -0.103293093304 
                                    <img src={Bitcion} height="15px" width="15px" /></div></td>
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