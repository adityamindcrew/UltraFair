import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col ,Form, Button} from 'react-bootstrap';
import  Card  from '../../../components/Card'
import Chart from "react-apexcharts";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import "../../../assets/css/dashboard.css"
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
import Pic1 from '../../../assets/images/dashboard/dash1.png'
import Pic2 from '../../../assets/images/dashboard/dash2.png'
import Pic3 from '../../../assets/images/dashboard/dash3.png'
import ICON1 from '../../../assets/images/icon/ICON1.png'
import ICON2 from '../../../assets/images/icon/ICON2.png'
import ICON3 from '../../../assets/images/icon/ICON3.png'
import ICON4 from '../../../assets/images/icon/ICON4.png'
import ICON5 from '../../../assets/images/icon/ICON5.png'

import Svg1 from '../../../assets/images/icon/V1.svg'
import Svg2 from '../../../assets/images/icon/V2.svg'
import Svg3 from '../../../assets/images/icon/V3.svg'
import Svg4 from '../../../assets/images/icon/V4.svg'

import Svg5 from '../../../assets/images/icon/V5.svg'
import Showimg1 from '../../../assets/images/Show1.png'
import Showimg2 from '../../../assets/images/Show2.png'
import Showimg3 from '../../../assets/images/Show3.png'

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
   const [tablebtn, settablebtn] = useState("")
   const [choice, setChoice] = useState();
      const [btn,setbtn]= useState("")
     
  const   btncolorhandles =(color)=>{
        setbtn(color)
        console.log('dsklfjsdl')
      }
   const options1 = [
      { value: 'today', label: 'Today' },
      { value: 'this month', label: 'This Month' },
      { value: 'this week', label: 'This Week' }
   ]

   const tablebtncolorhandles = (color) => {
      settablebtn(color)
   }
   const options2 = [
      { value: '10', label: '10' },
      { value: '15', label: '15' },
      { value: '20', label: '20' },
      { value: '50', label: '50' },
      { value: '100', label: '100' },
   ]
  
   const chart1={
      options:{
         chart: {
            id: "view-chart-01",
            },
         colors:['#e20e02', '#f68a04', '#007aff','#545e75'],
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
   const chart2={
         options : {
       colors:['#e20e02', '#007aff'],
         chart: {
         id:"view-chart-03",
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
         categories: ['a','b','c','d'],
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
         data: [44, 55,30,60]
       }, {
         name: 'Last Month',
         data: [35, 41,20,40]
       }],
   }
   const chart3={
         options : {
         chart: {
         id:"view-chart-02",
       },
       colors:['#e20e02','#83878a', '#007aff','#f68a04', '#14e788','#545e75'],
       labels: ['Actions', 'Comedy', 'Harror', 'Drama', 'Kids','Thrilled'],
       dataLabels: {
         enabled: false
       },
       stroke: {
           show: false,
           width: 0
       },
       legend: {
           show: false,
         formatter: function(val, opts) {
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
       series: [44, 30, 20, 43, 22,20],
   }
    return (
       <> 
        <Container fluid>
           <Row >
              <Col lg="8"xl="12">
                 <Row   xl="20" >
                    <Col sm="6" lg="6" xl="4">
                       <Card className="iq-card-block iq-card-stretch iq-card-height">
                          {/* <Card.Body>
                             <div className="d-flex align-items-center justify-content-between">
                                <div className="iq-cart-text text-capitalize">
                                   <p className="mb-0">
                                      view
                                   </p>
                                </div>
                                <div className="icon iq-icon-box-top rounded-circle bg-primary">
                                   <i className="las la-eye"></i>
                                </div>
                             </div>
                             <div className="d-flex align-items-center justify-content-between mt-3">
                                <h4 className=" mb-0">+24K</h4>
                                <p className="mb-0 text-primary"><span><i className="fa fa-caret-down mr-2"></i></span>35%</p>
                             </div>
                          </Card.Body> */}
                       <img src={Pic1}/>
                       </Card>
                    </Col>
                    <Col sm="6" lg="6" xl="4">
                       <Card className="iq-card-block iq-card-stretch iq-card-height">
                          {/* <Card.Body>
                             <div className="d-flex align-items-center justify-content-between">
                                <div className="iq-cart-text text-capitalize">
                                   <p className="mb-0 font-size-14">
                                      Rated This App
                                   </p>
                                </div>
                                <div className="icon iq-icon-box-top rounded-circle bg-warning">
                                   <i className="lar la-star"></i>
                                </div>
                             </div>
                             <div className="d-flex align-items-center justify-content-between mt-3">
                                <h4 className="mb-0">+55K</h4>
                                <p className="mb-0 text-warning"><span><i className="fa fa-caret-up mr-2"></i></span>50%</p>
                             </div>
                          </Card.Body> */}
                             <img src={Pic2}/>
                       </Card>
                    </Col>
                    <Col sm="6" lg="6" xl="4">
                       <Card className="iq-card-block iq-card-stretch iq-card-height">
                          {/* <Card.Body>
                             <div className="d-flex align-items-center justify-content-between">
                                <div className="iq-cart-text text-capitalize">
                                   <p className="mb-0 font-size-14">
                                      Downloaded
                                   </p>
                                </div>
                                <div className="icon iq-icon-box-top rounded-circle bg-info">
                                   <i className="las la-download"></i>
                                </div>
                             </div>
                             <div className="d-flex align-items-center justify-content-between mt-3">/static/media/dash1.c2e77b8f.png
                                <h4 className="mb-0">+1M</h4>
                                <p className="mb-0 text-info"><span><i className="fa fa-caret-up mr-2"></i></span>80%</p>
                             </div>

                          </Card.Body> */}   <img src={Pic3}/>

                       </Card>
                    </Col>
                    {/* <Col sm="6" lg="6" xl="3">
                       <Card className="iq-card-block iq-card-stretch iq-card-height">
                          <Card.Body>
                             <div className="d-flex align-items-center justify-content-between">
                                <div className="iq-cart-text text-uppercase">
                                   <p className="mb-0 font-size-14">
                                      Visitors
                                   </p>
                                </div>
                                <div className="icon iq-icon-box-top rounded-circle bg-success">
                                   <i className="lar la-user"></i>
                                </div>
                             </div>
                             <div className="d-flex align-items-center justify-content-between mt-3">
                                <h4 className="mb-0">+2M</h4>
                                <p className="mb-0 text-success"><span><i className="fa fa-caret-up mr-2"></i></span>80%</p>
                             </div>
                          </Card.Body>
                       </Card>
                    </Col> */}
                 </Row>
            <Row >
            <div className="iq-search-bar ml-auto Searchtext1" style={{width:"100%"}}   >
                    <Form action="#" className="searchbox Searchtext1" style={{backgroundRadius:"25px"}} >
                        <input type="text" className="text search-input TEXTINPUT" style={{width:"325%",background:"#13212D",borderRadius:"25px",height:"44px"}} placeholder="Search Here..."/>
                        <Link className="search-link" to="#"><i className="ri-search-line"></i></Link>
                    </Form>
                </div>
            </Row>

            <Row style={{marginLeft:"0px"}} xl="20">
            <div className="iq-search-bar Searchit" style={{background:"#13212D",borderRadius:"30px",width:"70%",marginTop:"3%",marginBottom:"3%",display:"flex",justifyContent:"flex-start"}}   >
                   <button className='BTN-1'  style={{background:btn==="btn1"?'#344452':"#13212D",padding:"10px",borderRadius:"30px",color:"white",border:btn==="btn1"?"1px solid #11FFBD":"0px",boxShadow:"none",width:"20%",display:"flex",justifyContent:"space-around",alignSelf:"flex-start",alignItems:"center",marginLeft:"-15px"}} onClick={()=>btncolorhandles("btn1")} ><img className='BTNLOGO'  src={btn==="btn1"?ICON1:Svg1} height="18px" width="18" />Button1</button>
                   <button className='BTN-1' style={{background:btn==="btn2"?'#344452':"#13212D",padding:"10px",borderRadius:"30px",color:"white",border:btn==="btn2"?"1px solid  #11FFBD":"0px",boxShadow:"none",width:"20%",display:"flex",justifyContent:"space-around",alignItems:"center"}} onClick={()=>btncolorhandles("btn2")}> <img className='BTNLOGO' src={btn==="btn2"?Svg2:ICON2} height="18px" width="18"/>Button2</button>
                   <button className='BTN-1' style={{background:btn==="btn3"?'#344452':"#13212D",padding:"10px",borderRadius:"23px",color:"white",border:btn==="btn3"?"1px solid  #11FFBD":"0px",boxShadow:"none",width:"20%",display:"flex",justifyContent:"space-around",alignItems:"center"}} onClick={()=>btncolorhandles("btn3")}> <img className='BTNLOGO' src={btn==="btn3"?Svg3:ICON3} height="18px" width="18"/>Button3</button>
                   <button className='BTN-1' style={{background:btn==="btn4"?'#344452':"#13212D",padding:"10px",borderRadius:"30px",color:"white",border:btn==="btn4"?"1px solid  #11FFBD":"0px",boxShadow:"none",width:"20%",display:"flex",justifyContent:"space-around",alignItems:"center"}} onClick={()=>btncolorhandles("btn4")}><img className='BTNLOGO' src={btn==="btn4"?Svg4:ICON4} height="18px" width="18"/>Button4</button>
                   <button className='BTN-1' style={{background:btn==="btn5"?'#344452':"#13212D",padding:"10px",borderRadius:"30px",color:"white",border:btn==="btn5"?"1px solid #11FFBD":"0px",boxShadow:"none",width:"20%",display:"flex",justifyContent:"space-around",alignItems:"center"}} onClick={()=>btncolorhandles("btn5")}><img className='BTNLOGO' src={btn==="btn5"?Svg5:ICON5} height="18px" width="15" style={{filter:""}} />Button5</button>
                </div>
            </Row>
  

                 <Card id="slider1" >
                    <Card.Header className="d-flex justify-content-between align-items-center">
                           <div>
                              <h4 className="card-title m-0">Ultrafair Originals</h4>
                           </div>
                           <div className="" id="swiper">
                              <div className="swiper-button swiper-button-prev" style={{background:"#344452"}}>Previous</div>
                              <div className="swiper-button swiper-button-next" style={{background:"#344452"}}>Next</div>
                           </div>
                    </Card.Header>

                    
                    <Card.Body>
                       <Swiper
                           navigation={{
                              prevEl: '.swiper-button-prev',
                              nextEl: '.swiper-button-next'
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
                          {/* <SwiperSlide className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                             <Card className="mb-0">
                                <Card.Body className="p-0">
                                   <div className="iq-thumb">
                                      <Link to="#">
                                         <img src={dash01} className="img-fluid w-100 img-border-radius" alt=""/>
                                      </Link>
                                   </div>
                                   <div className="iq-feature-list">
                                      <h6 className="font-weight-600 mb-0">The Last Breath</h6>
                                      <p className="mb-0 mt-2">T.v show</p>
                                      <div className="d-flex align-items-center my-2 iq-ltr-direction">
                                         <p className="mb-0 mr-2"><i className="lar la-eye mr-1"></i> 134</p>
                                         <p className="mb-0 "><i className="las la-download ml-2"></i> 30 k</p>
                                      </div>
                                   </div>
                                </Card.Body>
                             </Card>
                          </SwiperSlide> */}
                          {/* <SwiperSlide className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                             <Card className="mb-0">
                                <Card.Body className="p-0">
                                   <div className="iq-thumb">
                                      <Link to="#">
                                         <img src={dash02} className="img-fluid w-100 img-border-radius" alt=""/>
                                      </Link>
                                   </div>
                                   <div className="iq-feature-list">
                                      <h6 className="font-weight-600 mb-0">Last Night</h6>
                                      <p className="mb-0 mt-2">Movie</p>
                                      <div className="d-flex align-items-center my-2 iq-ltr-direction">
                                         <p className="mb-0 mr-2"><i className="lar la-eye mr-1"></i> 133</p>
                                         <p className="mb-0 "><i className="las la-download ml-2"></i> 20 k</p>
                                      </div>
                                   </div>
                                </Card.Body>
                             </Card>
                          </SwiperSlide> */}
                          {/* <SwiperSlide className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                             <Card className="mb-0">
                                <Card.Body className="p-0">
                                   <div className="iq-thumb">
                                      <Link to="#">
                                         <img src={dash03} className="img-fluid w-100 img-border-radius" alt=""/>
                                      </Link>
                                   </div>
                                   <div className="iq-feature-list">
                                      <h6 className="font-weight-600 mb-0">Jeon Woochie</h6>
                                      <p className="mb-0 mt-2">Movie</p>
                                      <div className="d-flex align-items-center my-2 iq-ltr-direction">
                                         <p className="mb-0 mr-2"><i className="lar la-eye mr-1"></i> 222</p>
                                         <p className="mb-0 "><i className="las la-download ml-2"></i> 40 k</p>
                                      </div>
                                   </div>
                                </Card.Body>
                             </Card>
                          </SwiperSlide>
                          <SwiperSlide className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                             <Card className="mb-0">
                                <Card.Body className="p-0">
                                   <div className="iq-thumb">
                                      <Link to="#">
                                         <img src={dash04} className="img-fluid w-100 img-border-radius" alt=""/>
                                      </Link>
                                   </div>
                                   <div className="iq-feature-list">
                                      <h6 className="font-weight-600 mb-0">Dino Land</h6>
                                      <p className="mb-0 mt-2">T.v show</p>
                                      <div className="d-flex align-items-center my-2 iq-ltr-direction">
                                         <p className="mb-0 mr-2"><i className="lar la-eye mr-1"></i> 122</p>
                                         <p className="mb-0 "><i className="las la-download ml-2"></i> 25 k</p>
                                      </div>
                                   </div>
                                </Card.Body>
                             </Card>
                          </SwiperSlide> */}
                          {/* <SwiperSlide className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                             <Card className="mb-0">
                                <Card.Body className="p-0">
                                   <div className="iq-thumb">
                                      <Link to="#">
                                         <img src={dash05} className="img-fluid w-100 img-border-radius" alt=""/>
                                      </Link>
                                   </div>
                                   <div className="iq-feature-list">
                                      <h6 className="font-weight-600 mb-0">Last Race</h6>
                                      <p className="mb-0 mt-2">T.v show</p>
                                      <div className="d-flex align-items-center my-2 iq-ltr-direction">
                                         <p className="mb-0 mr-2"><i className="lar la-eye mr-1"></i> 144</p>
                                         <p className="mb-0 "><i className="las la-download ml-2"></i> 35 k</p>
                                      </div>
                                   </div>
                                </Card.Body>
                             </Card>
                          </SwiperSlide> */}
                          <SwiperSlide className="col-sm-6 col-lg-2 col-xl-2 iq-rated-box">
                             
               
                                   <div className="iq-thumb" >
                                      <Link to="#">
                                         <img src={Pic1} className="img-fluid  img-border-radius" width="200vw" height="400vh" alt=""/>
                                      </Link>
                                   </div>
                                   {/* <div className="iq-feature-list">
                                      <h6 className="font-weight-600 mb-0">Opend Dead Shot</h6>
                                      <p className="mb-0 mt-2">T.v show</p>
                                      <div className="d-flex align-items-center my-2 iq-ltr-direction">
                                         <p className="mb-0 mr-2"><i className="lar la-eye mr-1"></i> 134</p>
                                         <p className="mb-0 "><i className="las la-download ml-2"></i> 30 k</p>
                                      </div>
                                   </div> */}
                          
                    
                          </SwiperSlide>
                          <SwiperSlide className="col-sm-6 col-lg-2 col-xl-2 iq-rated-box">
                             
               
                             <div className="iq-thumb" >
                                <Link to="#">
                                   <img src={Pic2} className="img-fluid  img-border-radius" width="200vw" height="400vh" alt=""/>
                                </Link>
                             </div>
                             {/* <div className="iq-feature-list">
                                <h6 className="font-weight-600 mb-0">Opend Dead Shot</h6>
                                <p className="mb-0 mt-2">T.v show</p>
                                <div className="d-flex align-items-center my-2 iq-ltr-direction">
                                   <p className="mb-0 mr-2"><i className="lar la-eye mr-1"></i> 134</p>
                                   <p className="mb-0 "><i className="las la-download ml-2"></i> 30 k</p>
                                </div>
                             </div> */}
                    
              
                    </SwiperSlide>
                    <SwiperSlide className="col-sm-6 col-lg-2 col-xl-2 iq-rated-box">
                             
               
                             <div className="iq-thumb" >
                                <Link to="#">
                                   <img src={Pic3} className="img-fluid  img-border-radius" width="200vw" height="400vh" alt=""/>
                                </Link>
                             </div>
                             {/* <div className="iq-feature-list">
                                <h6 className="font-weight-600 mb-0">Opend Dead Shot</h6>
                                <p className="mb-0 mt-2">T.v show</p>
                                <div className="d-flex align-items-center my-2 iq-ltr-direction">
                                   <p className="mb-0 mr-2"><i className="lar la-eye mr-1"></i> 134</p>
                                   <p className="mb-0 "><i className="las la-download ml-2"></i> 30 k</p>
                                </div>
                             </div> */}
                    
              
                    </SwiperSlide>
                          
                          </Swiper>
                    </Card.Body>
                 </Card>


                 <Card id="slider1" >
                    <Card.Header className="d-flex justify-content-between align-items-center">
                           <div>
                              <h4 className="card-title m-0">Slots</h4>
                           </div>
                      
                              {/* <div className="BTTTN  right  " style={{background:"#344452"}}><i class="ri-arrow-left-line"></i></div>
                              <div className="BTTTN  left  " style={{background:"#344452"}}><i class="ri-arrow-right-line"></i></div> */}
                                <div className="" id="swiper">
                              <div className="swiper-button right " style={{background:"#344452",lineHeight:1.5}}>Previous</div>
                              <div className="swiper-button left " style={{background:"#344452",lineHeight:1.5}}>Next</div>
                           
                           </div>
                    </Card.Header>
                    <Card.Body>
                       <Swiper
                           navigation={{
                              prevEl: '.right',
                              nextEl: '.left'
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
                          {/* <SwiperSlide className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                             <Card className="mb-0">
                                <Card.Body className="p-0">
                                   <div className="iq-thumb">
                                      <Link to="#">
                                         <img src={dash01} className="img-fluid w-100 img-border-radius" alt=""/>
                                      </Link>
                                   </div>
                                   <div className="iq-feature-list">
                                      <h6 className="font-weight-600 mb-0">The Last Breath</h6>
                                      <p className="mb-0 mt-2">T.v show</p>
                                      <div className="d-flex align-items-center my-2 iq-ltr-direction">
                                         <p className="mb-0 mr-2"><i className="lar la-eye mr-1"></i> 134</p>
                                         <p className="mb-0 "><i className="las la-download ml-2"></i> 30 k</p>
                                      </div>
                                   </div>
                                </Card.Body>
                             </Card>
                          </SwiperSlide> */}
                          {/* <SwiperSlide className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                             <Card className="mb-0">
                                <Card.Body className="p-0">
                                   <div className="iq-thumb">
                                      <Link to="#">
                                         <img src={dash02} className="img-fluid w-100 img-border-radius" alt=""/>
                                      </Link>
                                   </div>
                                   <div className="iq-feature-list">
                                      <h6 className="font-weight-600 mb-0">Last Night</h6>
                                      <p className="mb-0 mt-2">Movie</p>
                                      <div className="d-flex align-items-center my-2 iq-ltr-direction">
                                         <p className="mb-0 mr-2"><i className="lar la-eye mr-1"></i> 133</p>
                                         <p className="mb-0 "><i className="las la-download ml-2"></i> 20 k</p>
                                      </div>
                                   </div>
                                </Card.Body>
                             </Card>
                          </SwiperSlide> */}
                          {/* <SwiperSlide className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                             <Card className="mb-0">
                                <Card.Body className="p-0">
                                   <div className="iq-thumb">
                                      <Link to="#">
                                         <img src={dash03} className="img-fluid w-100 img-border-radius" alt=""/>
                                      </Link>
                                   </div>
                                   <div className="iq-feature-list">
                                      <h6 className="font-weight-600 mb-0">Jeon Woochie</h6>
                                      <p className="mb-0 mt-2">Movie</p>
                                      <div className="d-flex align-items-center my-2 iq-ltr-direction">
                                         <p className="mb-0 mr-2"><i className="lar la-eye mr-1"></i> 222</p>
                                         <p className="mb-0 "><i className="las la-download ml-2"></i> 40 k</p>
                                      </div>
                                   </div>
                                </Card.Body>
                             </Card>
                          </SwiperSlide>
                          <SwiperSlide className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                             <Card className="mb-0">
                                <Card.Body className="p-0">
                                   <div className="iq-thumb">
                                      <Link to="#">
                                         <img src={dash04} className="img-fluid w-100 img-border-radius" alt=""/>
                                      </Link>
                                   </div>
                                   <div className="iq-feature-list">
                                      <h6 className="font-weight-600 mb-0">Dino Land</h6>
                                      <p className="mb-0 mt-2">T.v show</p>
                                      <div className="d-flex align-items-center my-2 iq-ltr-direction">
                                         <p className="mb-0 mr-2"><i className="lar la-eye mr-1"></i> 122</p>
                                         <p className="mb-0 "><i className="las la-download ml-2"></i> 25 k</p>
                                      </div>
                                   </div>
                                </Card.Body>
                             </Card>
                          </SwiperSlide> */}
                          {/* <SwiperSlide className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                             <Card className="mb-0">
                                <Card.Body className="p-0">
                                   <div className="iq-thumb">
                                      <Link to="#">
                                         <img src={dash05} className="img-fluid w-100 img-border-radius" alt=""/>
                                      </Link>
                                   </div>
                                   <div className="iq-feature-list">
                                      <h6 className="font-weight-600 mb-0">Last Race</h6>
                                      <p className="mb-0 mt-2">T.v show</p>
                                      <div className="d-flex align-items-center my-2 iq-ltr-direction">
                                         <p className="mb-0 mr-2"><i className="lar la-eye mr-1"></i> 144</p>
                                         <p className="mb-0 "><i className="las la-download ml-2"></i> 35 k</p>
                                      </div>
                                   </div>
                                </Card.Body>
                             </Card>
                          </SwiperSlide> */}
                          <SwiperSlide className="col-sm-6 col-lg-2 col-xl-2 iq-rated-box">
                             
               
                                   <div className="iq-thumb" >
                                      <Link to="#">
                                         <img src={Showimg1} className="img-fluid  img-border-radius" width="150vw" height="300vh" alt=""/>
                                      </Link>
                                   </div>
                                   {/* <div className="iq-feature-list">
                                      <h6 className="font-weight-600 mb-0">Opend Dead Shot</h6>
                                      <p className="mb-0 mt-2">T.v show</p>
                                      <div className="d-flex align-items-center my-2 iq-ltr-direction">
                                         <p className="mb-0 mr-2"><i className="lar la-eye mr-1"></i> 134</p>
                                         <p className="mb-0 "><i className="las la-download ml-2"></i> 30 k</p>
                                      </div>
                                   </div> */}
                          
                    
                          </SwiperSlide>
                          <SwiperSlide className="col-sm-6 col-lg-2 col-xl-2 iq-rated-box">
                             
               
                             <div className="iq-thumb" >
                                <Link to="#">
                                   <img src={Showimg2} className="img-fluid  img-border-radius" width="150vw" height="300vh" alt=""/>
                                </Link>
                             </div>
                             {/* <div className="iq-feature-list">
                                <h6 className="font-weight-600 mb-0">Opend Dead Shot</h6>
                                <p className="mb-0 mt-2">T.v show</p>
                                <div className="d-flex align-items-center my-2 iq-ltr-direction">
                                   <p className="mb-0 mr-2"><i className="lar la-eye mr-1"></i> 134</p>
                                   <p className="mb-0 "><i className="las la-download ml-2"></i> 30 k</p>
                                </div>
                             </div> */}
                    
              
                    </SwiperSlide>
                    <SwiperSlide className="col-sm-6 col-lg-2 col-xl-2 iq-rated-box">
                             
               
                             <div className="iq-thumb" >
                                <Link to="#">
                                   <img src={Showimg3} className="img-fluid  img-border-radius" width="150vw" height="300vh" alt=""/>
                                </Link>
                             </div>
                             {/* <div className="iq-feature-list">
                                <h6 className="font-weight-600 mb-0">Opend Dead Shot</h6>
                                <p className="mb-0 mt-2">T.v show</p>
                                <div className="d-flex align-items-center my-2 iq-ltr-direction">
                                   <p className="mb-0 mr-2"><i className="lar la-eye mr-1"></i> 134</p>
                                   <p className="mb-0 "><i className="las la-download ml-2"></i> 30 k</p>
                                </div>
                             </div> */}
                    
              
                    </SwiperSlide>
                          
                          </Swiper>
                    </Card.Body>
                 </Card>
              </Col>




              {/* <Col lg="4">
                 <Card className="iq-card-block iq-card-stretch iq-card-height">
                    <div className="iq-card-header">
                       <Card.Header.Title>
                          <h4 className="card-title text-center">User's Of Product</h4>
                       </Card.Header.Title>
                    </div>
                    <Card.Body className="pb-0">
                        <Chart  id="view-chart-01" options={chart1.options} series={chart1.series} type="donut" width="250"  />
                       <Row className="mt-1">
                          <Col sm="6" md="3" lg="6" className="iq-user-list">
                             <Card>
                                <Card.Body>
                                   <div className="media align-items-center">
                                      <div className="iq-user-box bg-primary"></div>
                                      <div className="media-body text-white">
                                         <p className="mb-0 font-size-14 line-height">New <br/>
                                            Customer
                                         </p>
                                      </div>
                                   </div>
                                </Card.Body>
                             </Card>
                          </Col>
                          <Col sm="6" md="3" lg="6" className="iq-user-list">
                             <Card>
                                <Card.Body>
                                   <div className="media align-items-center">
                                      <div className="iq-user-box bg-warning"></div>
                                      <div className="media-body text-white">
                                         <p className="mb-0 font-size-14 line-height">Exsisting <br/>
                                            Subscriber's
                                         </p>
                                      </div>
                                   </div>
                                </Card.Body>
                             </Card>
                          </Col>
                          <Col sm="6" md="3" lg="6" className="iq-user-list">
                             <Card>
                                <Card.Body>
                                   <div className="media align-items-center">
                                      <div className="iq-user-box bg-info"></div>
                                      <div className="media-body text-white">
                                         <p className="mb-0 font-size-14 line-height">Daily<br/>
                                            Visitor's
                                         </p>
                                      </div>
                                   </div>
                                </Card.Body>
                             </Card>
                          </Col>
                          <Col sm="6" md="3" lg="6" className="iq-user-list">
                             <Card>
                                <Card.Body>
                                   <div className="media align-items-center">
                                      <div className="iq-user-box bg-danger"></div>
                                      <div className="media-body text-white">
                                         <p className="mb-0 font-size-14 line-height">Extented <br/>
                                            Subscriber's
                                         </p>
                                      </div>
                                   </div>
                                </Card.Body>
                             </Card>
                          </Col>
                       </Row>
                    </Card.Body>
                 </Card>
              </Col> */}
           </Row>
           {/* <Row>
              <Col sm="12" lg="4">
                 <Card className="iq-card-block iq-card-stretch iq-card-height">
                    <Card.Header className="d-flex align-items-center justify-content-between">
                       <Card.Header.Title>
                          <h4 className="card-title">Categories</h4>
                       </Card.Header.Title>
                    </Card.Header>
                    <Card.Body className="p-0">
                    <Chart  options={chart2.options} series={chart2.series} type="bar" height="230"  />
                    </Card.Body>
                 </Card>
              </Col>
              <Col lg="8">
                 <Card className="iq-card-block iq-card-stretch iq-card-height">
                    <Card.Header className="align-items-center">
                       <Card.Header.Title>
                          <h4 className="card-title">Top Category</h4>
                       </Card.Header.Title>
                       <div className="iq-card-header-toolbar d-flex align-items-center seasons">
                          <div className="iq-custom-select d-inline-block sea-epi s-margin">
                              <Select options={options1} className="iq-select" />
                          </div>
                       </div>
                    </Card.Header>
                    <Card.Body className="row align-items-center">
                       <Col lg="7">
                          <Row className="list-unstyled mb-0 pb-0">
                             <Col sm="6" md="4" lg="6" className="mb-3">
                                <div className="iq-progress-bar progress-bar-vertical iq-bg-primary">
                                   <span className="bg-primary" data-percent="100" style={{transition : "height 2s ease 0s", width: "100%", height: "40%",}}></span>
                                </div>
                                <div className="media align-items-center">
                                   <div className="iq-icon-box-view rounded mr-3 iq-bg-primary"><i className="las la-film font-size-32"></i></div>
                                   <div className="media-body text-white">
                                      <h6 className="mb-0 font-size-14 line-height">Actions</h6>
                                      <small className="text-primary mb-0">+34%</small>
                                   </div>
                                </div>
                             </Col>
                             <Col sm="6" md="4" lg="6" className="mb-3">
                                <div className="iq-progress-bar progress-bar-vertical iq-bg-secondary">
                                   <span className="bg-secondary" data-percent="100" style={{transition: "height 2s ease 0s", width: "100%", height: "70%"}}></span>
                                </div>
                                <div className="media align-items-center">
                                   <div className="iq-icon-box-view rounded mr-3 iq-bg-secondary"><i className="las la-laugh-squint font-size-32"></i></div>
                                   <div className="media-body text-white">
                                      <p className="mb-0 font-size-14 line-height">Comedy</p>
                                      <small className="text-secondary mb-0">+44%</small>
                                   </div>
                                </div>
                             </Col>
                             <Col sm="6" md="4" lg="6" className="mb-3">
                                <div className="iq-progress-bar progress-bar-vertical iq-bg-info">
                                   <span className="bg-info" data-percent="100" style={{transition : "height 2s ease 0s", width: "100%", height: "40%",}}></span>
                                </div>
                                <div className="media align-items-center">
                                   <div className="iq-icon-box-view rounded mr-3 iq-bg-info"><i className="las la-skull-crossbones font-size-32"></i></div>
                                   <div className="media-body text-white">
                                      <p className="mb-0 font-size-14 line-height">Horror</p>
                                      <small className="text-info mb-0">+56%</small>
                                   </div>
                                </div>
                             </Col>
                             <Col sm="6" md="4" lg="6" className="mb-3">
                                <div className="iq-progress-bar progress-bar-vertical iq-bg-warning">
                                   <span className="bg-warning" data-percent="100" style={{transition: "height 2s ease 0s", width: "100%", height: "40%"}}></span>
                                </div>
                                <div className="media align-items-center">
                                   <div className="iq-icon-box-view rounded mr-3 iq-bg-warning"><i className="las la-theater-masks font-size-32"></i></div>
                                   <div className="media-body text-white">
                                      <p className="mb-0 font-size-14 line-height">Drama</p>
                                      <small className="text-warning mb-0">+65%</small>
                                   </div>
                                </div>
                             </Col>
                             <Col sm="6" md="4" lg="6" className="mb-lg-0 mb-3">
                                <div className="iq-progress-bar progress-bar-vertical iq-bg-success">
                                   <span className="bg-success" data-percent="100" style={{transition: "height 2s ease 0s", width: "100%", height: "60%"}}></span>
                                </div>
                                <div className="media align-items-center mb-lg-0 mb-3">
                                   <div className="iq-icon-box-view rounded mr-3 iq-bg-success"><i className="las la-child font-size-32"></i></div>
                                   <div className="media-body text-white">
                                      <p className="mb-0 font-size-14 line-height">Kids</p>
                                      <small className="text-success mb-0">+74%</small>
                                   </div>
                                </div>
                             </Col>
                             <Col sm="6" md="4" lg="6" className="mb-lg-0 mb-3">
                                <div className="iq-progress-bar progress-bar-vertical iq-bg-danger">
                                   <span className="bg-danger" data-percent="100" style={{transition: "height 2s ease 0s", width: "100%", height: "80%"}}></span>
                                </div>
                                <div className="media align-items-center">
                                   <div className="iq-icon-box-view rounded mr-3 iq-bg-danger"><i className="las la-grin-beam font-size-32"></i></div>
                                   <div className="media-body text-white">
                                      <p className="mb-0 font-size-14 line-height">Thrilled</p>
                                      <small className="text-danger mb-0">+40%</small>
                                   </div>
                                </div>
                             </Col>
                          </Row>
                       </Col>
                       <Col lg="5">
                           <Chart id="view-chart-02" options={chart3.options} series={chart3.series} type="donut" height="210" />
                       </Col>
                    </Card.Body>
                 </Card>
              </Col>
              <Col sm="12">
                 <Card>
                    <Card.Header className="d-flex justify-content-between">
                       <Card.Header.Title>
                          <h4 className="card-title">Recently Viewed Items</h4>
                       </Card.Header.Title>
                       <div className="iq-card-header-toolbar d-flex align-items-center seasons">
                          <div className="iq-custom-select d-inline-block sea-epi s-margin">
                          <Select options={options2} />
                          </div>
                       </div>
                    </Card.Header>
                    <Card.Body>
                       <div className="table-responsive">
                          <table className="data-tables table movie_table" style={{width:"100%"}}>
                             <thead>
                                <tr>
                                   <th style={{width:"20%"}}>Movie</th>
                                   <th style={{width:"10%"}}>Rating</th>
                                   <th style={{width:"20%"}}>Category</th>
                                   <th style={{width:"10%"}}>Download/Views</th>
                                   <th style={{width:"10%"}}>User</th>
                                   <th style={{width:"20%"}}>Date</th>
                                   <th style={{width:"10%"}}><i className="lar la-heart"></i></th>
                                </tr>
                             </thead>
                             <tbody>
                                <tr>
                                   <td>
                                      <div className="media align-items-center">
                                         <div className="iq-movie">
                                            <Link to="#;"><img src={mt07} className="img-border-radius avatar-40 img-fluid" alt=""/></Link>
                                         </div>
                                         <div className="media-body text-white text-left ml-3">
                                            <p className="mb-0">Champions</p>
                                            <small>1h 40m</small>
                                         </div>
                                      </div>
                                   </td>
                                   <td><i className="lar la-star mr-2"></i> 9.2</td>
                                   <td>Horror</td>
                                   <td>
                                      <i className="lar la-eye "></i>
                                   </td>
                                   <td>Unsubcriber</td>
                                   <td>21 July,2020</td>
                                   <td><i className="las la-heart text-primary"></i></td>
                                </tr>
                                <tr>
                                   <td >
                                      <div className="media align-items-center">
                                         <div className="iq-movie">
                                            <Link to="#;"><img src={mt01} className="img-border-radius avatar-40 img-fluid" alt=""/></Link>
                                         </div>
                                         <div className="media-body text-white text-left ml-3">
                                            <p className="mb-0">Last Race</p>
                                         </div>
                                      </div>
                                   </td>
                                   <td><i className="lar la-star mr-2"></i> 7.2</td>
                                   <td>Horror</td>
                                   <td>
                                      <i className="lar la-eye "></i>
                                   </td>
                                   <td>subcriber</td>
                                   <td>22 July,2020</td>
                                   <td><i className="las la-heart text-primary"></i></td>
                                </tr>
                                <tr>
                                   <td>
                                      <div className="media align-items-center">
                                         <div className="iq-movie">
                                            <Link to="#;"><img src={mt01} className="img-border-radius avatar-40 img-fluid" alt=""/></Link>
                                         </div>
                                         <div className="media-body text-white text-left ml-3">
                                            <p className="mb-0">Boop Bitty</p>
                                         </div>
                                      </div>
                                   </td>
                                   <td><i className="lar la-star mr-2"></i> 8.2</td>
                                   <td>Thriller</td>
                                   <td>
                                      <i className="lar la-eye "></i>
                                   </td>
                                   <td>Unsubcriber</td>
                                   <td>23 July,2020</td>
                                   <td><i className="las la-heart text-primary"></i></td>
                                </tr>
                                <tr>
                                   <td>
                                      <div className="media align-items-center">
                                         <div className="iq-movie">
                                            <Link to="#;"><img src={mt05} className="img-border-radius avatar-40 img-fluid" alt=""/></Link>
                                         </div>
                                         <div className="media-body text-white text-left ml-3">
                                            <p className="mb-0">Dino Land</p>
                                         </div>
                                      </div>
                                   </td>
                                   <td><i className="lar la-star mr-2"></i> 8.5</td>
                                   <td>Action</td>
                                   <td>
                                      <i className="lar la-eye "></i>
                                   </td>
                                   <td>Unsubcriber</td>
                                   <td>24 July,2020</td>
                                   <td><i className="las la-heart text-primary"></i></td>
                                </tr>
                                <tr>
                                   <td>
                                      <div className="media align-items-center">
                                         <div className="iq-movie">
                                            <Link to="#;"><img src={mt04} className="img-border-radius avatar-40 img-fluid" alt=""/></Link>
                                         </div>
                                         <div className="media-body text-white text-left ml-3">
                                            <p className="mb-0">The Last Breath</p>
                                         </div>
                                      </div>
                                   </td>
                                   <td><i className="lar la-star mr-2"></i> 8.9</td>
                                   <td>Horror</td>
                                   <td>
                                      <i className="lar la-eye "></i>
                                   </td>
                                   <td>subcriber</td>
                                   <td>25 July,2020</td>
                                   <td><i className="las la-heart text-primary"></i></td>
                                </tr>
                             </tbody>
                          </table>
                       </div>
                    </Card.Body>
                 </Card>
              </Col>
           </Row> */}
             <Row>
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
            </Row>
        </Container>
        </>
    )
}

export default Dashbord;



