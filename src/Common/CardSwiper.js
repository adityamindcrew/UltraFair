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

function CardSwiper({classnm,classnm1}) {
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
          <h3 className="card-title m-0">Providers</h3>
        </div>
        <div className="" id="swiper">
          <div
            className={`swiper-button swiper-button-prev Responsivrbtn ${classnm}`}
            style={{ background: "#344452",padding: '23px 30px' }}
          >
            Previous
          </div>
          <div
            className={`swiper-button swiper-button-next Responsivrbtn ${classnm1}`}
            style={{ background: "#344452",padding: '23px 30px'}}
          >
            Next
          </div>
        </div>
      </Card.Header>

      <Card.Body>
        <Swiper
          navigation={{
            prevEl: `.${classnm1}`,
            nextEl: `.${classnm}`,
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
              <SwiperSlide className="col-sm-1 col-lg-2 col-xl-2 iq-rated-box" style={{padding:"0px"}}>
                <div className="iq-thumb">
                  <Link to="/providers">
                    <img
                      src={s.img}
                      className="img-fluid  img-border-radius"
                      width="200vw"
                      height="400vh"
                      alt=""
                      style={{borderRadius: "10px"}}
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
