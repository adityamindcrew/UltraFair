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

function UltraFairCard() {
  const ultraFairOriginalsCard = [
    { img: Dice },
    { img: Limbo },
    { img: Dice },
    { img: Limbo },
    { img: Dice },
    { img: Limbo },
    { img: Dice },
    { img: Limbo },
    { img: Dice },
    { img: Limbo },
    { img: Dice },
    { img: Limbo },
    { img: Dice },
    { img: Limbo },
    { img: Dice },
    { img: Limbo },
    { img: Limbo },
    { img: Dice },
    { img: Limbo },
    { img: Dice },
    { img: Limbo },
    { img: Dice },
    { img: Limbo },
    { img: Dice },
    { img: Limbo },
    
  ];
  return (
    <div style={{marginTop:'3s%'}} className="Casinocards">
      <Row>
        {ultraFairOriginalsCard.map((card, i) => {
          return (
            // <Col sm="2" md="2" lg="2" key={i}>
              <Card key={i}
                className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-2"
                style={{ height: "fit-content", width: "fit-content" ,background:"transparent" }}
              >
                <Card.Img
                  variant="top"
                  style={{ height: "195px", width: "150px",borderRadius: "10px" }}
                  src={card.img}
                  alt="card image"
                  
                />
              </Card>
            // </Col>
          );
        })}
      </Row>
      <div className="cards-section">Displaying {ultraFairOriginalsCard.length} of {ultraFairOriginalsCard.length} games</div>
      <div className="cards-section">   <Button variant="secondary mt-2" style={{background:"#344452",borderColor:" #344452"}}>Load More</Button></div>
    </div>
  );
}

export default UltraFairCard;
