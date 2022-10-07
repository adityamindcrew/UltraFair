import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button , Modal } from "react-bootstrap";
import Card from "../../../components/Card";
import Chart from "react-apexcharts";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "../../../assets/css/dashboard.css";
import Select from "react-select";
import Name from '../../../components/Modals/Wallet_Modals'
// CSS

import "../../.././assets/css/dashboard.css";

// img
import dash01 from "../../../assets/images/dashboard/01.jpg";
import dash02 from "../../../assets/images/dashboard/02.jpg";
import dash03 from "../../../assets/images/dashboard/03.jpg";
import dash04 from "../../../assets/images/dashboard/04.jpg";
import dash05 from "../../../assets/images/dashboard/05.jpg";
import dash06 from "../../../assets/images/dashboard/06.jpg";
import Pic1 from "../../../assets/images/dashboard/dash1.png";
import Pic2 from "../../../assets/images/dashboard/dash2.png";
import Pic3 from "../../../assets/images/dashboard/dash3.png";
import ICON1 from "../../../assets/images/icon/ICON1.png";
import ICON2 from "../../../assets/images/icon/ICON2.png";
import ICON3 from "../../../assets/images/icon/ICON3.png";
import ICON4 from "../../../assets/images/icon/ICON4.png";
import ICON5 from "../../../assets/images/icon/ICON5.png";

import Svg1 from "../../../assets/images/icon/V1.svg";
import Svg2 from "../../../assets/images/icon/V2.svg";
import Svg3 from "../../../assets/images/icon/V3.svg";
import Svg4 from "../../../assets/images/icon/V4.svg";

import Svg5 from "../../../assets/images/icon/V5.svg";
import Showimg1 from "../../../assets/images/Show1.png";
import Showimg2 from "../../../assets/images/Show2.png";
import Showimg3 from "../../../assets/images/Show3.png";
import { BitCoinSVG, WalletSVG } from './dashboardIcons'
import mt01 from "../../../assets/images/movie-thumb/01.jpg";
import mt04 from "../../../assets/images/movie-thumb/04.jpg";
import mt05 from "../../../assets/images/movie-thumb/05.jpg";
import mt07 from "../../../assets/images/movie-thumb/07.jpg";

import Blackjack from "../../../assets/images/Ultrafair/Blackjack.svg";
import SweetBon from "../../../assets/images/Ultrafair/Sweetbon.svg";
import Bitcion from "../../../assets/images/Ultrafair/Bitcion.svg";
import BitcionLogo from "../../../assets/images/Ultrafair/Bitcoin-logo.png";
import Ellipse from "../../../assets/images/Ultrafair/Ellipse.png";
import Customslider from "../../../components/Customslider";
import CardSwiper from "../../../Common/CardSwiper";
import SearchBar from "../../../Common/SearchBar";

SwiperCore.use([Navigation, Autoplay]);

const Dashbord = () => {
  // const Navigation = () => {
  const [tablebtn, settablebtn] = useState("");
  const [choice, setChoice] = useState();
  const [btn, setbtn] = useState("");
  const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  const DashbordCard = [Pic1, Pic2, Pic3];

  const btncolorhandles = (color) => {
    setbtn(color);
    handleShow()
  };
  


 

 
 
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="" xl="12" className="Fullcontainer">
            <Row xl="20" className="DashborCards">
              {DashbordCard.map((e, i) => {
                return (
                  <Col sm="6" lg="6" xl="4" key={i}>
                    <Card className="iq-card-block iq-card-stretch iq-card-height">
                      <img src={e} style={{ borderRadius: "10px" }} />
                    </Card>
                  </Col>
                );
              })}
            </Row>
            <Row>
              <SearchBar hg="5%" wd="399%" />
            </Row>

            <Row xl="20" >
              <div
                className="iq-search-bar Searchit "
                style={{
                  background: "#13212D",
                  borderRadius: "30px",
                  width: "55%",
                  marginTop: "3%",
                  marginBottom: "3%",
                  display: "flex",
                  justifyContent: "flex-start",
                  height: "55px",
                  marginLeft:"14px"
                }}
                
              >
                <button
                  className="BTN-1 bbt"
                  style={{
                    background: btn === "btn1" ? "#344452" : "#13212D",
                    padding: "10px",
                    borderRadius: "30px",
                    color: "white",
                    border: btn === "btn1" ? "1px solid #11FFBD" : "0px",
                    boxShadow: "none",
                    width: "20%",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignSelf: "flex-start",
                    alignItems: "center",
                    marginLeft: "-12px",
                    marginTop:"4px",
                    height: "48px"
                  }}
                  onClick={() => btncolorhandles("btn1")}
                >
                  <img
                    className="BTNLOGO"
                    src={btn === "btn1" ? ICON1 : Svg1}
                    height="18px"
                    width="18"
                  />
                 Lobby
                </button>
                <button
                  className="BTN-1"
                  style={{
                    background: btn === "btn2" ? "#344452" : "#13212D",
                    padding: "10px",
                    borderRadius: "30px",
                    color: "white",
                    border: btn === "btn2" ? "1px solid  #11FFBD" : "0px",
                    boxShadow: "none",
                    width: "20%",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    height: "90%",
                    alignSelf: "center",
                  }}
                  onClick={() => btncolorhandles("btn2")}
                >
                  {" "}
                  <img
                    className="BTNLOGO"
                    src={btn === "btn2" ? Svg2 : ICON2}
                    height="18px"
                    width="18"
                  />
                  <span>Live Casino</span>
                </button>
                <button
                  className="BTN-1"
                  style={{
                    background: btn === "btn3" ? "#344452" : "#13212D",
                    padding: "10px",
                    borderRadius: "23px",
                    color: "white",
                    border: btn === "btn3" ? "1px solid  #11FFBD" : "0px",
                    boxShadow: "none",
                    width: "22%",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    height: "90%",
                    alignSelf: "center",
                  }}
                  onClick={() => btncolorhandles("btn3")}
                >
                  {" "}
                  <img
                    className="BTNLOGO"
                    src={btn === "btn3" ? Svg3 : ICON3}
                    height="18px"
                    width="18"
                  />
                  Featured slots
                </button>
                <button
                  className="BTN-1"
                  style={{
                    background: btn === "btn4" ? "#344452" : "#13212D",
                    padding: "10px",
                    borderRadius: "30px",
                    color: "white",
                    border: btn === "btn4" ? "1px solid  #11FFBD" : "0px",
                    boxShadow: "none",
                    width: "20%",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    height: "90%",
                    alignSelf: "center",
                  }}
                  onClick={() => btncolorhandles("btn4")}
                >
                  <img
                    className="BTNLOGO"
                    src={btn === "btn4" ? Svg4 : ICON4}
                    height="18px"
                    width="18"
                  />
                  Live Shows
                </button>
                <button
                  className="BTN-1"
                  style={{
                    background: btn === "btn5" ? "#344452" : "#13212D",
                    padding: "10px",
                    borderRadius: "30px",
                    color: "white",
                    border: btn === "btn5" ? "1px solid #11FFBD" : "0px",
                    boxShadow: "none",
                    width: "23%",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    height: "90%",
                    alignSelf: "center",
                    marginRight: "-12px",
                  }}
                  onClick={() => btncolorhandles("btn5")}
                >
                  <img
                    className="BTNLOGO"
                    src={btn === "btn5" ? Svg5 : ICON5}
                    height="18px"
                    width="15"
                  />
                  Ultrafair Originals
                </button>
              </div>
            </Row>

            <Customslider
              classnm="testclass11"
              classnm2="testclass12"
              title="Ultrafair Origianls"
            />
            <Customslider
              classnm="testclass31"
              classnm2="testclass32"
              title="Slots"
            />
            <CardSwiper
              classnm="testclass21"
              classnm1="testclass22"
              title="Providers"
            />
            <Customslider
              classnm="testclass41"
              classnm2="testclass42"
              title="Live Casino"
            />
            <Customslider
              classnm="testclass51"
              classnm2="testclass52"
              title="Table Games"
            />
            <Customslider
              classnm="testclass54"
              classnm2="testclass53"
              title="New Releases"
            />
          </Col>
        </Row>

        {/* <Row>
               <Col sm="12">
                  <Card>
                     <Row>
                        <Col className='col-8'>
                           <div className="iq-search-bar search-bar-class" style={{ display: "flex", justifyContent: "flex-start" }}>
                              <button className='BTN-1' style={{ background: tablebtn === "btn1" ? '#344452' : "#13212D", border: tablebtn === "btn1" ? " " : "none", borderBottomStyle: tablebtn === "btn1" ? 'solid' : 'none', borderRightStyle: tablebtn === "btn1" ? 'solid' : 'none', padding: "5px", borderRadius: "30px", color: "white", borderColor: tablebtn === "btn1" ? "#11FFBD" : "rgb(19, 33, 45)", boxShadow: "none", width: "25%", display: "flex", justifyContent: "space-around", alignSelf: "flex-start", alignItems: "center", marginLeft: "-10px" }} onClick={() => tablebtncolorhandles("btn1")} >My Bets</button>
                              <button className='BTN-1' style={{ background: tablebtn === "btn2" ? '#344452' : "#13212D", border: tablebtn === "btn2" ? " " : "none", borderBottomStyle: tablebtn === "btn2" ? 'solid' : 'none', borderRightStyle: tablebtn === "btn2" ? 'solid' : 'none', padding: "5px", borderRadius: "30px", color: "white", borderColor: tablebtn === "btn2" ? "#11FFBD" : "rgb(19, 33, 45)", boxShadow: "none", width: "25%", display: "flex", justifyContent: "space-around", alignItems: "center" }} onClick={() => tablebtncolorhandles("btn2")}>All Bets</button>
                              <button className='BTN-1' style={{ background: tablebtn === "btn3" ? '#344452' : "#13212D", border: tablebtn === "btn3" ? " " : "none", borderBottomStyle: tablebtn === "btn3" ? 'solid' : 'none', borderRightStyle: tablebtn === "btn3" ? 'solid' : 'none', padding: "5px", borderRadius: "30px", color: "white", borderColor: tablebtn === "btn3" ? "#11FFBD" : "rgb(19, 33, 45)", boxShadow: "none", width: "30%", display: "flex", justifyContent: "space-around", alignItems: "center" }} onClick={() => tablebtncolorhandles("btn3")}>High Rollers</button>
                              <button className='BTN-1' style={{ background: tablebtn === "btn4" ? '#344452' : "#13212D", border: tablebtn === "btn4" ? " " : "none", borderBottomStyle: tablebtn === "btn4" ? 'solid' : 'none', borderRightStyle: tablebtn === "btn4" ? 'solid' : 'none', padding: "5px", borderRadius: "30px", color: "white", borderColor: tablebtn === "btn4" ? "#11FFBD" : "rgb(19, 33, 45)", boxShadow: "none", width: "20%", display: "flex", justifyContent: "space-around", alignItems: "center" }} onClick={() => tablebtncolorhandles("btn4")}>Races <div><img src={Ellipse} style={{ marginLeft: "5px", paddingRight: '0px' }} height="10px" width="10px" /></div></button>
                           </div>
                        </Col><Col className='col-4'>
                              <div className="m-2" style={{width : "50px !important"}}>
                                 <Select style={{maxWidth : "50px !important"}} options={options2}
                                 defaultValue={{label: "5", value: ""}}
                               />
                              </div>
                        </Col>
                     </Row>
                     <Card.Body>
                        <div className="table-responsive">
                           <table className="table table-striped table-bordered" >
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
                                       <img src={BitcionLogo} style={{ marginLeft: "10px" }} height="20px" width="20px" /></div></td>


                                    <td className='left-text-color'>0.00x</td>
                                    <td className='left-text-color '><div > -0.103293093304
                                       <img src={BitcionLogo} style={{ marginLeft: "10px" }} height="20px" width="20px" /></div></td>
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
                                       <img src={BitcionLogo} style={{ marginLeft: "10px" }} height="20px" width="20px" /></div></td>


                                    <td className='left-text-color'>22.00x</td>
                                    <td className='left-text-greencolor'><div style={{ color: '#11FFBD !important' }}>0.09803200
                                       <img src={BitcionLogo} style={{ marginLeft: "10px" }} height="20px" width="20px" /></div></td>
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
                                       <img src={BitcionLogo} style={{ marginLeft: "10px" }} height="20px" width="20px" /></div></td>


                                    <td className='left-text-color'>2.00x</td>
                                    <td className='left-text-greencolor'><div >47099.99816
                                       <img src={BitcionLogo} style={{ marginLeft: "10px" }} height="20px" width="20px" /></div></td>
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
                                       <img src={BitcionLogo} style={{ marginLeft: "10px" }} height="20px" width="20px" /></div></td>


                                    <td className='left-text-color'>8.83x</td>
                                    <td className='left-text-greencolor'><div >1325.20000000
                                       <img src={BitcionLogo} style={{ marginLeft: "10px" }} height="20px" width="20px" /></div></td>
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
                                       <img src={BitcionLogo} style={{ marginLeft: "10px" }} height="20px" width="20px" /></div></td>


                                    <td className='left-text-color'>0.28x</td>
                                    <td className='left-text-color'><div >-0.42274105
                                       <img src={BitcionLogo} style={{ marginLeft: "10px" }} height="20px" width="20px" /></div></td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row> */}
             <div className='container wallet-modal'>
               <Modal show={show} onHide={handleClose} size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  className="textclass"
                  
               >
                  <Modal.Header style={{ border: 'none' }}>
                     <Modal.Title>
                        <div style={{marginLeft: 10}}>
                        <WalletSVG />
                        <span style={{ fontSize: 15, color: "white", paddingLeft: 7 }}>Wallet</span>
                        </div>
                        <button
                           type="button"
                           class="close"
                           aria-label="Close"
                           style={{ color: "white", position: 'absolute', top: -1, right: 10 }}
                           onClick={handleClose}
                        >
                           <span aria-hidden="true" style={{ fontSize: 33, fontWeight: 1 }}>&times;</span>
                        </button>
                     </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                     <Name />
                  </Modal.Body>

               </Modal>
            </div>
      </Container>
     
    </>
  );
};

export default Dashbord;