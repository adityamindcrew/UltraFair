import React, { useState } from "react";
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

import { BitCoinSVG, QRSVG, DownArrow, BitcoinsSVG2, EtheremcoinsSVG2, UsdcoinSVG2, TetherSVG2, DailogoSVG2, CurvedaotokenSVG2, BackArrow } from "../../../views/backend/main/dashboardIcons";

import OTPInput, { ResendOTP } from "otp-input-react";

import QRCode from "../../../assets/images/QR.jpg"



const ProfileVerification = ({ close }) => {


    const [formModal, setFormModal] = useState()
    console.log("dkldslk", formModal)




    const userBtn = (color) => {
        setFormModal(color)
        console.log("form", formModal)
    }
    return (

        <div className="container">

            {formModal === 'btnform2' ?
                <Form2 setFormModal={setFormModal} close={close} />

                : <div>
                    <div>
                        <div className="text-center user-verification ">
                            <h3>Enter Mobile Number</h3>
                            <p>Please enter your mobile so that we can verify your account. </p>
                        </div>

                        <div className="mobileForm">
                            <Form.Group>
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Label style={{ color: "red", marginLeft: "3px" }}>
                                    {" "}
                                    *
                                </Form.Label>
                                <Form.Control
                                    type="email"
                                    className="mb-0"
                                    id="exampleInputEmail1"
                                    placeholder=""
                                    autoComplete="off"
                                    required
                                    style={{ width: '100%' }}
                                />
                            </Form.Group>
                        </div>

                        <div className="wallet-info text-center mt-4 mb-4">
                            <Button
                                type="button"
                                variant="btn btn-primary"
                                style={{
                                    color: "black",
                                    width: '100%',
                                    fontWeight:'bold'

                                }}
                                onClick={() => userBtn('btnform2')}
                            >
                                Verify
                            </Button>

                        </div>

                    </div>
                </div>}

        </div>




    );
};

export default ProfileVerification;



export const Form2 = ({ setFormModal, close }) => {
    const [formModal2, setFormModal2] = useState()
    const backmodal = () => {

        console.log("bjsbjsdbjs")
    }
    const [OTP, setOTP] = useState("");
    return (
        <>
            {formModal2 === 'btnform3' ?
                <Form3 setFormModal2={setFormModal2} close={close} />

                : <div className="form2-body">
                    <div className="re-back" >
                        <span onClick={() => setFormModal('btnform')}><BackArrow /></span>
                    </div>
                    <div className="text-center user-verification ">

                        <h3>Verify Mobile Number</h3>
                        <p>We have sent a verification to<br/> +124376598.</p>
                    </div>

                    <div className="text-center">
                        <p style={{letterSpacing:1}}>Please enter the code below to continue</p>
                    </div>

                   
                    <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} style={{ display: 'flex', justifyContent: 'center' }}
                        inputStyles={{
                            width: '9%',
                            height: '4vw',
                            textAlign: 'center',
                            margin:5,
                            fontSize:'15%',
                            backgroundColor:'#0D1D29',
                            border:'none',
                            borderRadius:5,
                            color:'white'}} />


                    <div className="mt-3">
                        <Row className="">
                            <Col xs={6} md={6} className="">
                                <Button
                                    type="button"
                                    variant="btn btn-primary"
                                    style={{
                                        color: "black",
                                        width: '100%',

                                    }}
                                    onClick={() => setFormModal2('btnform3')}

                                >
                                    Resend
                                </Button>
                            </Col>
                            <Col xs={6} md={6} className="col-box">
                                <span className="timer">02:35</span>
                            </Col>
                        </Row>
                    </div>



                </div>}
        </>
    )
}

export const Form3 = ({ setFormModal2, close }) => {
    const [formModal3, setFormModal3] = useState()

    return (
        <>
            {formModal3 === 'btnform4' ?
                <Form4 setFormModal3={setFormModal3} close={close} /> :
                <div className="form3-body">
                    <div className="re-back" >
                        <span onClick={() => setFormModal2('btnform2')}><BackArrow /></span>
                    </div>
                    <div className="text-center user-verification ">

                        <h3>Check Your Inbox</h3>
                        <p>A verification email has been sent to </p> <span className="email-text">example@email.com</span>

                    </div>

                    <div className="text-center">
                        <p>Please follow the link to verify your email address.</p>
                    </div>
                    <div className="mt-3">
                        <Row className="">
                            <Col xs={6} md={6} className="">
                                <Button
                                    type="button"
                                    variant="btn btn-primary"
                                    style={{
                                        color: "black",
                                        width: '100%',
                                        float: 'right'

                                    }}
                                    onClick={() => setFormModal3('btnform4')}

                                >
                                    Resend
                                </Button>
                            </Col>
                            <Col xs={6} md={6} className="col-box">
                                <span className="timer">02:35</span>
                            </Col>
                        </Row>
                    </div>



                </div>}
        </>
    )
}


export const Form4 = ({ setFormModal3, close }) => {
    const [formModal4, setFormModal4] = useState()

    return (
        <>
            {formModal4 === 'btnform5' ?
                <Form5 setFormModal4={setFormModal4} close={close} /> :
                <div className="form3-body container">
                    <div className="re-back" >
                        <span onClick={() => setFormModal3('btnform3')}><BackArrow /></span>
                    </div>
                    <div className="text-center user-verification ">

                        <h3>Level 1 Verification</h3>
                    </div>

                    <div className="">
                        <p>Upload Selfie</p>
                    </div>

                    <div>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Multiple files input example</Form.Label>
                            <Form.Control type="file" multiple className="fileupload-user" />

                        </Form.Group>
                    </div>
                    <Button
                        type="button"
                        variant="btn btn-primary"
                        style={{
                            color: "black",
                            width: '100%',
                            float: 'right'

                        }}
                        onClick={() => setFormModal4('btnform5')}

                    >
                        continue
                    </Button>

                    {/* <div>
                <InputGroup className="mb-3">
                    <Button variant="outline-secondary">
                    <Form.Control type="file" multiple />
                       + </Button>
                    <Button variant="outline-secondary">- remove file</Button>
                    <Form.Control aria-label="Example text with two button addons" />
                </InputGroup>

            </div> */}




                </div>}
        </>
    )
}


export const Form5 = ({ setFormModal4, close }) => {
    const [formModal5, setFormModal5] = useState()

    return (
        <>
            {formModal5 == 'btnform6' ?
                <Form6 setFormModal5={setFormModal5} close={close} /> :
                <div className="form3-body container">
                    <div className="re-back" >
                        <span onClick={() => setFormModal4('btnform4')}><BackArrow /></span>
                    </div>

                    <div className="text-center user-verification-5- ">
                        <h3>Scan This Code with Your<br />Authenticatior App</h3>

                    </div>

                    <div className=" text-center user-sub-5' mt-4">
                        <p>Link your Authenticator app to your Yield Guru account by scanning the code<br /> below. When you’re done, press the next button to continue.</p>
                    </div>

                    <div className="img-responsive text-center mt-2" style={{ justifyContent: 'center', alignItems: 'center', justifyItems: 'center' }}>

                        <img variant="top" className="img-responsive mb-3" src={QRCode} style={{ width: '11rem', backgroundColor: 'white', padding: 5, borderRadius: 8 }} />


                    </div>

                    <div className=" mt-1 text-center">
                        <span> Or enter this code manually.</span>
                    </div>

                    <div className=" mt-2 text-center manual-code">
                        <span className="manual-code-text">XBE-7B9-10A7</span>
                    </div>

                    <div>
                        <Button
                            type="button"
                            variant="btn btn-primary"
                            style={{
                                color: "black",
                                width: '20%',
                                float: 'right',
                                marginTop: 20,
                            }}
                            onClick={() => setFormModal5('btnform6')}


                        >
                            Next
                        </Button>
                    </div>





                </div>}
        </>
    )
}


export const Form6 = ({ setFormModal5, close }) => {

    const [formModal6, setFormModal6] = useState()
    return (
        <>
            {formModal6 == 'btnform7' ?
                <Form7 close={close} /> :
                <div className="form3-body container">
                    <div className="re-back" >
                        <span onClick={() => setFormModal5('btnform5')}><BackArrow /></span>
                    </div>

                    <div className="text-center user-verification-5- ">
                        <h3>Enter Verification Code</h3>

                    </div>

                    <div className=" text-center user-sub-5' mt-4">
                        <p>Enter the verification code from your Authenticator app.</p>
                    </div>
                    <div className="mobileForm">
                        <Form.Group>


                            <Form.Control
                                type="email"
                                className="mb-0"
                                id="exampleInputEmail1"
                                placeholder=""
                                autoComplete="off"
                                required
                                style={{ width: '100%' }}
                            />
                        </Form.Group>
                    </div>
                    <div>
                        <Button
                            type="button"
                            variant="btn btn-primary"
                            style={{
                                color: "black",
                                width: '20%',
                                float: 'right',
                                marginTop: 20,


                            }}
                            onClick={() => setFormModal6('btnform7')} >
                            Next
                        </Button>
                    </div>





                </div>}
        </>
    )
}


export const Form7 = ({ close }) => {


    return (
        <>
            <div className="form3-body container">
                <div className="re-back" >

                </div>

                <div className="text-center user-verification-5- ">
                    <h3>Success</h3>

                </div>

                <div className=" text-center user-sub-5' mt-4">
                    <p>Your Two-factor authentication is now enabled.</p>
                </div>

                <div>
                    <Button
                        type="button"
                        variant="btn btn-primary"
                        style={{
                            color: "black",
                            width: '20%',
                            float: 'right',
                            marginTop: 20,
                        }}
                        onClick={() => close()}
                    >

                        Done
                    </Button>
                </div>
            </div>
        </>
    )
}



