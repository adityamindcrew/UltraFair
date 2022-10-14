import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CardSwiper from '../../../../Common/CardSwiper'
import UltraFairCard from '../../../../Common/UltraFairCard'
import Card from '../../../../components/Card'
import Img1 from "../../../../assets/images/Customheader/Headerimg22.png";
import Customheader from "../../../../components/Customheader";
import Customsearchbar from "../../../../components/Customsearchbar";
import Evolution from "../../../../assets/images/swiper/evolution.png";
import HackSaw from "../../../../assets/images/swiper/hacksaw.png";
import NoLimit from "../../../../assets/images/swiper/nolimit.png";
import Play from "../../../../assets/images/swiper/play n go.png";
import Pragmatic from "../../../../assets/images/swiper/pragmatic.png";
import Push from "../../../../assets/images/swiper/push.png";

const Timeline2 = () => {
   const Images= [Evolution,HackSaw,NoLimit,Pragmatic,Push,Play,Evolution,HackSaw,NoLimit,Pragmatic,Push,Play,Evolution,HackSaw,NoLimit,Pragmatic,Push,Play,Evolution,HackSaw,NoLimit,Pragmatic,Push,Play]
    const SVG =<svg width="38" height="35" viewBox="0 0 38 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.16651 0.333496C4.94985 0.333496 2.33318 2.95016 2.33318 6.16683C2.33318 8.17984 3.35927 9.95853 4.91456 11.0073C2.89492 11.8655 1.33243 13.4938 0.829275 15.6037C0.775703 15.8175 0.765072 16.0398 0.797997 16.2578C0.830923 16.4757 0.906752 16.685 1.0211 16.8734C1.13544 17.0619 1.28602 17.2258 1.46413 17.3556C1.64225 17.4855 1.84435 17.5787 2.05874 17.63C2.27313 17.6812 2.49555 17.6894 2.71313 17.6541C2.93071 17.6188 3.13913 17.5407 3.32631 17.4243C3.5135 17.3079 3.67574 17.1555 3.80365 16.976C3.93155 16.7965 4.02258 16.5934 4.07146 16.3784C4.40663 14.973 6.02365 13.6668 8.16651 13.6668C10.3094 13.6668 11.9264 14.973 12.2616 16.3784C12.3104 16.5934 12.4015 16.7965 12.5294 16.976C12.6573 17.1555 12.8195 17.3079 13.0067 17.4243C13.1939 17.5407 13.4023 17.6188 13.6199 17.6541C13.8375 17.6894 14.0599 17.6812 14.2743 17.63C14.4887 17.5787 14.6908 17.4855 14.8689 17.3556C15.047 17.2258 15.1976 17.0619 15.3119 16.8734C15.4263 16.685 15.5021 16.4757 15.535 16.2578C15.568 16.0398 15.5573 15.8175 15.5038 15.6037C15.0006 13.4938 13.4381 11.8655 11.4185 11.0073C12.9738 9.95853 13.9998 8.17984 13.9998 6.16683C13.9998 2.95016 11.3832 0.333496 8.16651 0.333496ZM19.9504 0.366048C19.5209 0.377522 19.1125 0.55434 18.8103 0.859622C18.5081 1.1649 18.3354 1.57508 18.3283 2.00459C18.3211 2.4341 18.4801 2.84979 18.772 3.16495C19.0639 3.4801 19.4662 3.67039 19.895 3.69613C25.4566 4.06393 30.0753 7.83729 31.7049 12.9409C31.7714 13.1495 31.8783 13.343 32.0196 13.5103C32.1608 13.6776 32.3336 13.8154 32.5281 13.9159C32.7226 14.0164 32.935 14.0776 33.1532 14.0961C33.3714 14.1145 33.591 14.0897 33.7997 14.0233C34.0083 13.9568 34.2017 13.8499 34.369 13.7086C34.5363 13.5674 34.6742 13.3946 34.7747 13.2001C34.8752 13.0056 34.9364 12.7932 34.9548 12.575C34.9732 12.3568 34.9485 12.1372 34.882 11.9285C32.8417 5.53884 27.0548 0.828163 20.1164 0.369303C20.0611 0.365461 20.0057 0.364374 19.9504 0.366048ZM29.8332 17.0002C26.6165 17.0002 23.9998 19.6168 23.9998 22.8335C23.9998 24.8465 25.0259 26.6252 26.5812 27.674C24.5616 28.5322 22.9991 30.1605 22.4959 32.2703C22.4424 32.4842 22.4317 32.7065 22.4647 32.9244C22.4976 33.1424 22.5734 33.3516 22.6878 33.5401C22.8021 33.7285 22.9527 33.8924 23.1308 34.0223C23.3089 34.1521 23.511 34.2454 23.7254 34.2966C23.9398 34.3478 24.1622 34.356 24.3798 34.3207C24.5974 34.2854 24.8058 34.2073 24.993 34.0909C25.1802 33.9745 25.3424 33.8222 25.4703 33.6426C25.5982 33.4631 25.6892 33.26 25.7381 33.0451C26.0733 31.6397 27.6903 30.3335 29.8332 30.3335C31.976 30.3335 33.5931 31.6397 33.9282 33.0451C33.9771 33.26 34.0681 33.4631 34.1961 33.6426C34.324 33.8222 34.4862 33.9745 34.6734 34.0909C34.8606 34.2073 35.069 34.2854 35.2866 34.3207C35.5041 34.356 35.7266 34.3478 35.941 34.2966C36.1553 34.2454 36.3574 34.1521 36.5355 34.0223C36.7137 33.8924 36.8642 33.7285 36.9786 33.5401C37.0929 33.3516 37.1688 33.1424 37.2017 32.9244C37.2346 32.7065 37.224 32.4842 37.1704 32.2703C36.6673 30.1605 35.1048 28.5322 33.0851 27.674C34.6404 26.6252 35.6665 24.8465 35.6665 22.8335C35.6665 19.6168 33.0498 17.0002 29.8332 17.0002ZM5.02849 20.7502C4.75385 20.7468 4.48262 20.8113 4.23893 20.9381C3.99525 21.0648 3.78665 21.2498 3.6317 21.4765C3.47675 21.7033 3.38025 21.9649 3.35077 22.238C3.32129 22.5111 3.35976 22.7872 3.46274 23.0418C5.77365 28.9776 11.389 33.2583 18.0363 33.6375C18.2586 33.6568 18.4824 33.6313 18.6946 33.5625C18.9068 33.4937 19.1031 33.383 19.2717 33.2369C19.4403 33.0909 19.5779 32.9125 19.6763 32.7122C19.7748 32.512 19.832 32.2941 19.8446 32.0714C19.8573 31.8487 19.8251 31.6257 19.7499 31.4156C19.6748 31.2055 19.5583 31.0127 19.4072 30.8485C19.2562 30.6843 19.0738 30.5521 18.8707 30.4597C18.6677 30.3674 18.4481 30.3167 18.2251 30.3107C12.8957 30.0066 8.41396 26.5751 6.56821 21.8341C6.45074 21.5193 6.24085 21.2473 5.96608 21.0539C5.69131 20.8605 5.3645 20.7546 5.02849 20.7502Z" fill="#11FFBD"/>
    </svg>
    
    return (
        <>
            <Container fluid>
                {/* <Row className="justify-content-center">
                    <Col lg="6">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Product Orders</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <ul className="iq-timeline">
                                    <li>
                                        <div className="timeline-dots"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-success"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-danger"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans <Link to="#">gummi bears</Link>gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-primary"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-info"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-info"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-warning"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-info"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Product Orders</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <ul className="iq-timeline">
                                    <li>
                                        <div className="timeline-dots"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-success"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-danger"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans <Link to="#">gummi bears</Link>gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-primary"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-info"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-info"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-warning"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-info"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row> */}
                 <Customheader Headercls="Headertitle"   title="Providers" SVG={SVG} wid="14%" Img={Img1} />
        <Customsearchbar hg="5%" wd="390%" />

                <UltraFairCard Respo="Respp" disp="none" mr="4%" nmm="dfsd"  wdd="150px"
                      htt="70px" Images={Images}/>
            </Container>
        </>
    )
}

export default Timeline2;