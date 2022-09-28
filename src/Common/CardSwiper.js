import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Container,
  ProgressBar,
  Dropdown,
  Form,
  Card,
} from "react-bootstrap";

import Evolution from "../assets/images/swiper/evolution.png";
import HackSaw from "../assets/images/swiper/hacksaw.png";
import NoLimit from "../assets/images/swiper/nolimit.png";
import Play from "../assets/images/swiper/play n go.png";
import Pragmatic from "../assets/images/swiper/pragmatic.png";
import Push from "../assets/images/swiper/push.png";

function CardSwiper() {
  const swiperImages = [
    { img: Evolution },
    { img: HackSaw },
    { img: NoLimit },
    { img: Play },
    { img: Pragmatic },
    { img: Push },
  ];

  return (
    <div>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div>
          <h4 className="card-title m-0">Providers</h4>
        </div>
        <div className="" id="swiper">
          <div
            className="swiper-button swiper-button-prev"
            style={{ background: "#344452" }}
          >
            Previous
          </div>
          <div
            className="swiper-button swiper-button-next"
            style={{ background: "#344452" }}
          >
            Next
          </div>
        </div>
      </Card.Header>

      <Card.Body>
        <Swiper
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            550: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
          loop={true}
          className="list-unstyled row top-rated-item mb-0 iq-rtl-direction"
        >
          {swiperImages.map((s, i) => {
            return (
              <SwiperSlide className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                <div className="iq-thumb">
                  <Link to="#">
                    <img
                      src={s.img}
                      className="img-fluid  img-border-radius"
                      width="200vw"
                      height="400vh"
                      alt=""
                    />
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Card.Body>
    </div>
  );
}

export default CardSwiper;
