import React from "react";
import {
  Col,
  Row,
  Container,
  ProgressBar,
  Dropdown,
  Form,
  Card,
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
  ];
  return (
    <div>
      <Row>
        {ultraFairOriginalsCard.map((card, i) => {
          return (
            <Col sm="6" md="6" lg="2" key={i}>
              <Card
                className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3"
                style={{ height: "195px", width: "150px" }}
              >
                <Card.Img
                  variant="top"
                  style={{ height: "195px", width: "150px" }}
                  src={card.img}
                  alt="card image"
                />
              </Card>
            </Col>
          );
        })}
      </Row>
      <div className="cards-section">Displaying 18 of 18 games</div>
    </div>
  );
}

export default UltraFairCard;
