import React from 'react'

import { Container, Row, Col ,Form, Button} from 'react-bootstrap';

// import Img1 from "../assets/images/Customheader/Headerimg44.png"
import "../assets/css/Customheader.css"

const Customheader = ({title,SVG,wid,Img,Headercls}) => {
  return (
    <Row>
    <div className="iq-top-navbar headertop" style={{height:"10%",marginTop:"4%",background:"#1E2C37"}}>
               <div className="iq-navbar-custom" style={{display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",marginTop:"7.5px"}}>
               <div>
<img src={Img} className="LOGOO" style={{height:"9vh",width:"19vw"}}/>
               </div>
               <div className={Headercls} style={{display:"flex",flexDirection:"row",justifyContent:'space-between',alignItems:"center",width:wid}}>
                  {/* <img src={UltrafairOrignalsSVG} height="20px" width="20px"/>
                   */}
    {SVG}
                  <h3>{title}</h3>
               </div>


               </div>
               </div>

               
    </Row> 
  )
}

export default Customheader
