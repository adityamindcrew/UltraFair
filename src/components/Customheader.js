import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

// import Img1 from "../assets/images/Customheader/Headerimg44.png"
import "../assets/css/Customheader.css";

const Customheader = ({ title, SVG, wid, Img, Headercls, mt, TaD }) => {
  return (
    <Row>
      <div
        className="iq-top-navbar headertop"
        style={{
          marginTop: "5.5%",
          background: "#1E2C37",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="iq-navbar-custom"
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{alignSelf:'center'}}>
            <img src={Img} className="LOGOO" style={{ width: "13vw" }} />
          </div>
          <div
            className={Headercls}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "",
              marginTop: mt,
            }}
          >
            {/* <img src={UltrafairOrignalsSVG} height="20px" width="20px"/>
             */}
            <span style={{ marginRight: "10px" }}>{SVG} </span>
            {/* <span style={{color:"#1E2C37"}} className="Freespace" >sdfs</span> */}
            <span className="CustomHeaderTitle">{title}</span>
          </div>
        </div>
      </div>
    </Row>
  );
};

export default Customheader;
