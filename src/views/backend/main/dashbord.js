import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Card from "../../../components/Card";
import Chart from "react-apexcharts";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "../../../assets/css/dashboard.css";
import Select from "react-select";

import Modal from 'react-bootstrap/Modal';


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

import mt01 from '../../../assets/images/movie-thumb/01.jpg'
import mt04 from '../../../assets/images/movie-thumb/04.jpg'
import mt05 from '../../../assets/images/movie-thumb/05.jpg'
import mt07 from '../../../assets/images/movie-thumb/07.jpg'

import Blackjack from '../../../assets/images/Ultrafair/Blackjack.svg'
import SweetBon from '../../../assets/images/Ultrafair/Sweetbon.svg'
import Bitcion from '../../../assets/images/Ultrafair/Bitcion.svg'
import BitcionLogo from '../../../assets/images/Ultrafair/Bitcoin-logo.png'
import Ellipse from '../../../assets/images/Ultrafair/Ellipse.png'
import Name from '../../../components/Modals/Wallet_Modals'
import { BitCoinSVG, WalletSVG } from './dashboardIcons'
import Customslider from "../../../components/Customslider";
import CardSwiper from "../../../Common/CardSwiper";
import SearchBar from "../../../Common/SearchBar";

import CurrentSelection from "../../../components/Modals/Wallet_Modals/CurrentSelection"

import ProfileVerification from "../../../components/Modals/Wallet_Modals/ProfileVerification"

SwiperCore.use([Navigation, Autoplay]);


const Dashbord = () => {




   // const Navigation = () => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const handleClose2 = () => setModalShow(false);

   const [tablebtn, settablebtn] = useState("")
   const [choice, setChoice] = useState();
   const [btn, setbtn] = useState("")
   const DashbordCard = [Pic1, Pic2, Pic3];

   const btncolorhandles = (color) => {
      setbtn(color)
      handleShow()
      console.log('dsklfjsdl')
   }

   const btncolorhandles2 = (color) => {
      setbtn(color)
      setModalShow(true)
   }

   const [modalShow3, setModalShow3] = React.useState(false);
   const btncolorhandles3 = (color) => {
      setbtn(color)
      setModalShow3(true)
   }

   const tablebtncolorhandles = (color) => {
      settablebtn(color)
   }
   const options1 = [
      { value: 'today', label: 'Today' },
      { value: 'this month', label: 'This Month' },
      { value: 'this week', label: 'This Week' }
   ]


   const options2 = [
      { value: '10', label: '10' },
      { value: '15', label: '15' },
      { value: '20', label: '20' },
      { value: '50', label: '50' },
      { value: '100', label: '100' },
   ]

   const chart1 = {
      options: {
         chart: {
            id: "view-chart-01",
         },
         colors: ['#e20e02', '#f68a04', '#007aff', '#545e75'],
         labels: ["New Customer", "Exsisting Subscriber's", "Daily Visitor's", "Extented Subscriber's"],
         dataLabels: {
            enabled: false
         },
         stroke: {
            show: false,
            width: 0
         },
         legend: {
            show: false,
         },
         responsive: [{
            breakpoint: 480,
            options: {
               chart: {
                  width: 200
               },
               legend: {
                  position: 'bottom'
               }
            }
         }]
      },
      series: [44, 55, 30, 30],
   }
   const chart2 = {
      options: {
         colors: ['#e20e02', '#007aff'],
         chart: {
            id: "view-chart-03",
            foreColor: '#D1D0CF'
         },
         plotOptions: {
            bar: {
               horizontal: false,
               columnWidth: '55%',
               endingShape: 'rounded'
            },
         },
         dataLabels: {
            enabled: false
         },
         stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
         },
         xaxis: {
            categories: ['a', 'b', 'c', 'd'],
         },
         yaxis: {
            title: {
               text: ''
            }
         },
         fill: {
            opacity: 1
         },
         tooltip: {
            enabled: false,
            y: {
               formatter: function (val) {
                  return "$ " + val + " thousands"
               }
            }
         }
      },
      series: [{
         name: 'This Month',
         data: [44, 55, 30, 60]
      }, {
         name: 'Last Month',
         data: [35, 41, 20, 40]
      }],
   }
   const chart3 = {
      options: {
         chart: {
            id: "view-chart-02",
         },
         colors: ['#e20e02', '#83878a', '#007aff', '#f68a04', '#14e788', '#545e75'],
         labels: ['Actions', 'Comedy', 'Harror', 'Drama', 'Kids', 'Thrilled'],
         dataLabels: {
            enabled: false
         },
         stroke: {
            show: false,
            width: 0
         },
         legend: {
            show: false,
            formatter: function (val, opts) {
               return val + " - " + opts.w.globals.series[opts.seriesIndex]
            }
         },
         responsive: [{
            breakpoint: 480,
            options: {
               chart: {
                  width: 200
               },
               legend: {
                  position: 'bottom'
               }
            }
         }]
      },
      series: [44, 30, 20, 43, 22, 20],
   }

   const [modalShow, setModalShow] = React.useState(false);

   const signUpCallback = (l) => {
      console.log("func signup", l);
      setModalShow(l);

   };
   const signUpCallback3 = (l) => {
      console.log("func signup", l);
      setModalShow3(l);

   };

   const CloseButton = () => {
      setModalShow(false);
   };
   const CloseButton3 = () => {
      setModalShow3(false);
   };


   function ModalViewSelection(props) {
      return (

         <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="textclass wallet-modal'"
            
         >
            <Modal.Header style={{ border: 'none' }}>
               <Modal.Title>
                  <div style={{ marginLeft: 10 }}>
                     <WalletSVG />
                     <span style={{ color: "white", paddingLeft: 7, }} className="wallet-header">Currency Selection</span>
                  </div>
                  <button
                     type="button"
                     class="close"
                     aria-label="Close"
                     style={{ color: "white", position: 'absolute', top: 9, right: 20 }}
                     onClick={CloseButton}
                  >
                     <span aria-hidden="true" style={{ fontSize: 22, fontWeight: 1 }}>x</span>
                  </button>
               </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
               <CurrentSelection showModal={signUpCallback} close={CloseButton} />
            </Modal.Body>

         </Modal>


      );
   }

   function UserVerification(props) {
      return (

         <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="textclass user-modal'"
         >
            <Modal.Header style={{ border: 'none' }}>
               <Modal.Title>
                  
                  <button
                     type="button"
                     class="close"
                     aria-label="Close"
                     style={{ color: "white", position: 'absolute', top: -1, right: 10 }}
                     onClick={CloseButton3}
                  >
                     <span aria-hidden="true" style={{ fontSize: 33, fontWeight: 1 }}>&times;</span>
                  </button>
               </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid modalbody">
               <ProfileVerification showModal={signUpCallback3} close={CloseButton3} />
            </Modal.Body>

         </Modal>


      );
   }




   return (
      <>
         <Container fluid>


            <Row>
                     <>
                  <Container fluid>
                     <Row>
                        <Col lg="8" xl="12">
                           <Row xl="20" className="DashborCards">
                              {DashbordCard.map((e, i) => {
                                 return (
                                    <Col sm="6" lg="6" xl="4" key={i} className="SAFARIRESPp">
                                       <Card className="iq-card-block iq-card-stretch iq-card-height SAFARIRESP">
                                          <img src={e} style={{ borderRadius: "10px" ,}} className="SAFARIRESPr" />
                                       </Card>
                                    </Col>
                                 );
                              })}
                           </Row>
                           
                           <Row>
                              <SearchBar hg="5%" wd="325%" notmt="Mquery" />
                           </Row>

                           <Row xl="20" className="SCROLL">
                              <div
                                 className="iq-search-bar Searchit Mquery"
                                 style={{
                                    background: "#13212D",
                                    borderRadius: "30px",
                                    width: "67%",
                                    marginTop: "3%",
                                    marginBottom: "3%",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    height: "14%",
                                    marginLeft: "14px"
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
                                       height:'50px'
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
                                    onClick={() => btncolorhandles2("btn2")}
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
                                    onClick={() => btncolorhandles3("btn3")}
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
                              title="Ultrafair Originals"
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

                  </Container>
               </>


            </Row>

            <Modal show={show} onHide={handleClose} size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
               className="textclass wallet-modal'"


            >
               <Modal.Header style={{ border: 'none' }}>
                  <Modal.Title>
                     <div style={{ marginLeft: 10 }}>
                        <WalletSVG />
                        <span style={{ color: "white", paddingLeft: 7, }} className="wallet-header">let</span>
                     </div>
                     <button
                        type="button"
                        class="close"
                        aria-label="Close"
                        style={{ color: "white", position: 'absolute', top: 9, right: 13 }}
                        onClick={handleClose}
                     >
                        <span aria-hidden="true" style={{ fontSize: 18, fontWeight: 1 }}>X</span>
                     </button>
                  </Modal.Title>
               </Modal.Header>
               <Modal.Body className="head-wallet-body">
                  <Name />
               </Modal.Body>

            </Modal>

            <ModalViewSelection
               show={modalShow}
               onHide={() => setModalShow(false)}
            />

            <UserVerification
               show={modalShow3}
               onHide={() => setModalShow3(false)}
            />

         </Container>

      </>
   );
};

export default Dashbord;
