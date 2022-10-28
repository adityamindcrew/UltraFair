import React from "react";
import {
  Col,
  Row,
  Container,
  ProgressBar,
  Dropdown,
  Form,
  Card,
  Button,
} from "react-bootstrap";
import Swiper from "swiper";
import Dice from "../assets/images/cards/dice.png";
import Limbo from "../assets/images/cards/limbo.png";
import "../assets/css/Customheader.css";

function UltraFairCard({ Images, htt, wdd, disp, mr, nmm, Respo }) {
  const ultraFairOriginalsCard = [
    Dice,
    Limbo,
    Dice,
    Limbo,
    Dice,
    Limbo,
    Dice,
    Limbo,
    Dice,
    Limbo,
    Dice,
    Limbo,
    Dice,
    Limbo,
    Dice,
    Limbo,
  ];
  return (
    <div style={{ marginTop: "3%" }} className="Casinocards">
      <Row
        className={`Flexcenter ${Respo}`}
        style={{ marginTop: mr ? mr : "", display: "flex", marginLeft: "0px" }}
      >
        {Images
          ? Images.map((card, i) => {
              return (
                // <Col sm="2" md="2" lg="2" key={i}>
                <Card
                  key={i}
                  className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-2"
                  style={{
                    height: "fit-content",
                    maxWidth: "fit-content",
                    background: "transparent",
                    marginRight: "10px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    style={{
                      height: htt ? htt : "195px",
                      width: wdd ? wdd : "150px",
                      borderRadius: "10px",
                    }}
                    src={card}
                    alt="card image"
                  />
                </Card>
                // </Col>
              );
            })
          : ultraFairOriginalsCard.map((card, i) => {
              return (
                // <Col sm="2" md="2" lg="2" key={i}>
                <Card
                  key={i}
                  className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-2"
                  style={{
                    height: "fit-content",
                    maxWidth: "fit-content",
                    background: "transparent",
                  }}
                >
                  <Card.Img
                    variant="top"
                    style={{
                      height: "195px",
                      width: "150px",
                      borderRadius: "10px",
                      marginRight: "10px",
                    }}
                    src={card}
                    alt="card image"
                  />
                </Card>
                // </Col>
              );
            })}
      </Row>
      <div
        className="cards-section"
        style={{ display: disp ? disp : "", color: "white" }}
      >
        Displaying {ultraFairOriginalsCard.length} of{" "}
        {ultraFairOriginalsCard.length} games
      </div>
      {nmm ? (
        ""
      ) : (
        <div
          style={{ display: "flex", justifyContent: "center", margin: "1%" }}
        >
          <svg
            width="201"
            height="1"
            viewBox="0 0 201 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0.5" y1="0.5" x2="200.5" y2="0.5" stroke="green" />
          </svg>
        </div>
      )}

      <div className="cards-section" style={{ display: disp ? disp : "" }}>
        {" "}
        <button
          style={{
            background: "#344452",
            borderColor: " #344452",
            color: "white",
            padding: "10px 20px",
            borderRadius: "10px",
            boxShadow: "none",
            borderBottomColor: "#344452",
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default UltraFairCard;
