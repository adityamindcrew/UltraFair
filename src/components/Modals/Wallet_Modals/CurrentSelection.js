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

import { BitcoinsSVG4, QRSVG, DownArrow, BitcoinsSVG2, EtheremcoinsSVG2,
    EtheremcoinsSVG4, UsdcoinSVG2,UsdcoinSVG3, TetherSVG2,TetherSVG4, DailogoSVG2, CurvedaotokenSVG2, Group199, Group202, Group203, DailogoSVG4 } from "../../../views/backend/main/dashboardIcons";

import Manicback from "../../../assets/images/Manic-back.png"
import Manic from "../../../assets/images/Manic.png"


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

        <div className="mb-4">

            <div className="container">
                <span className="currency-text">Please select the preferred currencies that you would like to use.</span>

            
                <div className="form-checkbox mt-3">
                    <Row className="checkbox-row">
                        <Col xs={6} md={3} className="col-box">
                            <label class="container-checkbox">
                                <span style={{ position: "relative", bottom:3, }}>BTC <BitcoinsSVG4 /></span>
                                <input type="checkbox" className="checkbox-input" />
                                <span class="checkmark"></span>
                            </label>
                        </Col>
                        <Col xs={6} md={3} className="col-box">
                            <label class="container-checkbox">
                                <span style={{ position: "relative", bottom: 3 }}>ETH <EtheremcoinsSVG4 /></span>
                                <input type="checkbox" className="checkbox-input" />
                                <span class="checkmark"></span>
                            </label>

                        </Col>
                        <Col xs={6} md={3} className="col-box">
                            <label class="container-checkbox">
                                <span style={{ position: "relative", bottom: 3 }}>USDC <UsdcoinSVG3 /></span>
                                <input type="checkbox" className="checkbox-input" />
                                <span class="checkmark"></span>
                            </label>

                        </Col>
                        <Col xs={6} md={3} className="col-box">
                            <label class="container-checkbox">
                                <span style={{ position: "relative", bottom: 3 }}>USDT <TetherSVG4 /></span>
                                <input type="checkbox" className="checkbox-input" />
                                <span class="checkmark"></span>
                            </label>
                        </Col>
                        <Col xs={6} md={3} className="col-box">
                            <label class="container-checkbox">
                                <span style={{ position: "relative", bottom: 3 }}>DAI <DailogoSVG4 /></span>
                                <input type="checkbox" className="checkbox-input" />
                                <span class="checkmark"></span>
                            </label>

                        </Col>
                        <Col xs={6} md={3} className="col-box">
                            <label class="container-checkbox">
                                <span style={{ position: "relative", bottom: 3 }}>MATIC <Group203 />
                                   
                                </span>
                                <input type="checkbox" className="checkbox-input" />
                                <span class="checkmark"></span>
                            </label>

                        </Col>
                        <Col xs={6} md={3} className="col-box">
                            <label class="container-checkbox">
                                <span style={{ position: "relative", bottom: 3 }}>CRO  <Group202 /></span>
                                <input type="checkbox" className="checkbox-input" />
                                <span class="checkmark"></span>
                            </label>

                        </Col>
                        <Col xs={6} md={3} className="col-box">
                            <label class="container-checkbox">
                                <span style={{ position: "relative", bottom: 3 }}>LINK  <Group199 /></span>
                                <input type="checkbox" className="checkbox-input" />
                                <span class="checkmark"></span>
                            </label>

                        </Col>

                    </Row>

                </div>


            </div>

            <div className="wallet-info text-center mt-4 container">
                <Button
                    type="button"
                    variant="btn btn-primary"
                    className="wallet-Button"
                    style={{
                        color: "black",
                        width: '100%',
                        paddingTop: 12,
                        paddingBottom: 12,
                        fontFamily: 'Montserrat',
                        fontWeight:'bold',
                    }} >
                    Save
                </Button>

            </div>
            <div className=" container" style={{ marginTop: 20 }}>
                <span className="checkbox-text">This selection can be updated at any time.</span>
            </div> 
        </div>





    );
};

export default CurrentSelection;
