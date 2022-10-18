import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button, Form, Card, Dropdown, InputGroup } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { rtlModeAction, getRtlMode } from "../../../store/mode/rtlmode";
import Google from "../../../assets/images/social/google.png";
import FB from "../../../assets/images/social/facebook.png";
import Line from "../../../assets/images/social/line.png";
import Chat from "../../../assets/images/social/chat.png";
import ReCAPTCHA from "react-google-recaptcha";

import { BitCoinSVG, QRSVG, DownArrow, BitcoinsSVG2, EtheremcoinsSVG2, UsdcoinSVG2, TetherSVG2, DailogoSVG2, CurvedaotokenSVG2 } from "../../../views/backend/main/dashboardIcons";


const CurrentSelection = (props) => {
    const [show, setShow] = useState(false);



    let history = useHistory();

    const [btncolor, setBtncolor] = useState('loginButton')

    const registerHandler = (color) => {
        props.showModal(true);
        setBtncolor(color)
    };
    const loginHandler = (color) => {
        props.showModal(false);
        setBtncolor(color)
    };
    const toggleButton = () => {
        setShow((prevState) => !prevState);
    };

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return (

        <div className="container">

            <div className="">
                <span className="checkbox-text">Please select the preferred currencies that you would like to use.</span>

                {/* <Form className="text-left mt-4 " >
                      

                    </Form> */}

                {/* <div className="form-checkbox text-center">

                        <label class="container-checkbox" style={{ marginRight: '8%' }}>
                            <span style={{ position: "relative", bottom: 4 }}>BTC <BitcoinsSVG2 /></span>
                            <input type="checkbox" className="checkbox-input" />
                            <span class="checkmark"></span>
                        </label>

                        <label class="container-checkbox" style={{ marginRight: '8%' }}>
                            <span style={{ position: "relative", bottom: 4 }}>ETC</span>
                            <input type="checkbox" className="checkbox-input" />
                            <span class="checkmark"></span>
                        </label>

                        <label class="container-checkbox" style={{ marginRight: '8%' }}>
                            <span style={{ position: "relative", bottom: 4 }}>USDC</span>
                            <input type="checkbox" className="checkbox-input" />
                            <span class="checkmark"></span>
                        </label>

                        <label class="container-checkbox">
                            <span style={{ position: "relative", bottom: 4 }}>USDT</span>
                            <input type="checkbox" className="checkbox-input" />
                            <span class="checkmark"></span>
                        </label>

                    </div> */}



                <div className="form-checkbox mt-3">
                    <Row className="checkbox-row">
                        <Col xs={6} md={3} className="col-box">
                            <label class="container-checkbox">
                                <span style={{ position: "relative", bottom: 4 }}>BTC <BitcoinsSVG2 /></span>
                                <input type="checkbox" className="checkbox-input" />
                                <span class="checkmark"></span>
                            </label>
                        </Col>
                        <Col xs={6} md={3} className="col-box">
                            <label class="container-checkbox">
                                <span style={{ position: "relative", bottom: 4 }}>ETH <EtheremcoinsSVG2 /></span>
                                <input type="checkbox" className="checkbox-input" />
                                <span class="checkmark"></span>
                            </label>

                        </Col>
                        <Col xs={6} md={3} className="col-box">
                            <label class="container-checkbox">
                                <span style={{ position: "relative", bottom: 4 }}>USDC <UsdcoinSVG2 /></span>
                                <input type="checkbox" className="checkbox-input" />
                                <span class="checkmark"></span>
                            </label>

                        </Col>
                        <Col xs={6} md={3} className="col-box">
                            <label class="container-checkbox">
                                <span style={{ position: "relative", bottom: 4 }}>USDT <TetherSVG2 /></span>
                                <input type="checkbox" className="checkbox-input" />
                                <span class="checkmark"></span>
                            </label>
                        </Col>
                        <Col xs={6} md={3} className="col-box">
                            <label class="container-checkbox">
                                <span style={{ position: "relative", bottom: 4 }}>DAI <DailogoSVG2 /></span>
                                <input type="checkbox" className="checkbox-input" />
                                <span class="checkmark"></span>
                            </label>

                        </Col>
                        <Col xs={6} md={3} className="col-box">
                            <label class="container-checkbox">
                                <span style={{ position: "relative", bottom: 4 }}>MATIC </span>
                                <input type="checkbox" className="checkbox-input" />
                                <span class="checkmark"></span>
                            </label>

                        </Col>
                        <Col xs={6} md={3} className="col-box">
                            <label class="container-checkbox">
                                <span style={{ position: "relative", bottom: 4 }}>CRO <BitcoinsSVG2 /></span>
                                <input type="checkbox" className="checkbox-input" />
                                <span class="checkmark"></span>
                            </label>

                        </Col>
                        <Col xs={6} md={3} className="col-box">
                            <label class="container-checkbox">
                                <span style={{ position: "relative", bottom: 4 }}>LINK <DailogoSVG2 /></span>
                                <input type="checkbox" className="checkbox-input" />
                                <span class="checkmark"></span>
                            </label>

                        </Col>

                    </Row>

                </div>


            </div>

            <div className="wallet-info text-center mt-4">
                <Button
                    type="button"
                    variant="btn btn-primary"
                    className="wallet-Button"
                    style={{
                        color: "black",
                        width: '100%',
                        paddingTop:12,
                        paddingBottom:12,
                        fontFamily:'Montserrat',
                    }} >
                    Save
                </Button>

            </div>
            <div className="" style={{marginTop:10}}>
            <span className="checkbox-text">This selection can be updated at anytime.</span>
            </div>
        </div>





    );
};

export default CurrentSelection;
