import React from "react";
import {
  Col,
  Row,
  Container,
  ProgressBar,
  Dropdown,
  Form,
  Card,
  Button
} from "react-bootstrap";
import Swiper from "swiper";
import Dice from "../assets/images/cards/dice.png";
import Limbo from "../assets/images/cards/limbo.png";

function UltraFairCard({Images,htt,wdd ,disp,mr}) {
  const ultraFairOriginalsCard = [
   Dice,Limbo,Dice,Limbo, Dice,Limbo,Dice,Limbo, Dice,Limbo,Dice,Limbo ,Dice,Limbo,Dice,Limbo
    
  ];
  return (
    <div style={{marginTop:'3s%'}} className="Casinocards">
      <Row style={{marginTop:mr?mr:""}}>
        {
        Images?Images.map((card, i) => {
          return (
            // <Col sm="2" md="2" lg="2" key={i}>
              <Card key={i}
                className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-2"
                style={{ height: "fit-content", width: "fit-content" ,background:"transparent" }}
              >
                <Card.Img
                  variant="top"
                  style={{ height: htt?htt:"195px", width: wdd?wdd: "150px",borderRadius: "10px" }}
                  src={card}
                  alt="card image"
                  
                />
              </Card>
            // </Col>
          );
        }) :
        ultraFairOriginalsCard.map((card, i) => {
          return (
            // <Col sm="2" md="2" lg="2" key={i}>
              <Card key={i}
                className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-2"
                style={{ height: "fit-content", width: "fit-content" ,background:"transparent" }}
              >
                <Card.Img
                  variant="top"
                  style={{ height: "195px", width: "150px",borderRadius: "10px" }}
                  src={card}
                  alt="card image"
                  
                />
              </Card>
            // </Col>
          );
        })}
      </Row>
      <div className="cards-section" style={{display:disp?disp:""}}>Displaying {ultraFairOriginalsCard.length} of {ultraFairOriginalsCard.length} games</div>
      <div className="cards-section" style={{display:disp?disp:""}}>   <Button variant="secondary mt-2" style={{background:"#344452",borderColor:" #344452"}}>Load More</Button></div>
    </div>
  );
}

export default UltraFairCard;
