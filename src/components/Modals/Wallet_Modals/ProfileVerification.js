import React, { useState, useRef, useEffect } from "react";
import { Container, Col, Row, Button, Form, Card, Dropdown, InputGroup } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { BitCoinSVG, QRSVG, DownArrow, BitcoinsSVG2, EtheremcoinsSVG2, UsdcoinSVG2, TetherSVG2, DailogoSVG2, CurvedaotokenSVG2, BackArrow, Success } from "../../../views/backend/main/dashboardIcons";

import OTPInput, { ResendOTP } from "otp-input-react";

import QRCode from "../../../assets/images/QR.jpg"
import Timer from "./Timer"



const ProfileVerification = ({ close }) => {


    const [formModal, setFormModal] = useState()
    console.log("dkldslk", formModal)




    const userBtn = (color) => {
        setFormModal(color)
        console.log("form", formModal)
    }
    return (
        <>
            {formModal === 'btnform2' ?
                <Form2 setFormModal={setFormModal} close={close} />

                :
                <div className="container">


                    <div className="container">
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
                                    fontWeight: 'bold'

                                }}
                                onClick={() => userBtn('btnform2')}
                            >
                                Verify
                            </Button>

                        </div>


                    </div>

                </div>}



        </>
    );
};

export default ProfileVerification;



export const Form2 = ({ setFormModal, close, prop }) => {
    const [formModal2, setFormModal2] = useState()
    const backmodal = () => {

        console.log("bjsbjsdbjs")
    }
    const [OTP, setOTP] = useState("");



    const userBtn2 = () => {
        // clearTimer(getDeadTime());
        setFormModal2('btnform3')

    }



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
                        <p>We have sent a verification to<br /> +124376598.</p>
                    </div>

                    <div className="text-center">
                        <p style={{ letterSpacing: 1 }}>Please enter the code below to continue</p>
                    </div>


                    <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} style={{ display: 'flex', justifyContent: 'center' }}
                        inputStyles={{
                            width: 56,
                            height: 56, textAlign: 'center',
                            margin: 5,
                            fontSize: 29,
                            backgroundColor: '#0D1D29',
                            border: 'none',
                            borderRadius: 5,
                            color: 'white'
                        }} />

                    <Timer setFormModal2={userBtn2} />


                </div>}
        </>
    )
}

export const Form3 = ({ setFormModal2, close, prop }) => {
    const [formModal3, setFormModal3] = useState()

    const Ref = useRef(null);


    const [timer, setTimer] = useState('00:00');


    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }


    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                // (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }


    const clearTimer = (e) => {


        setTimer('00:00');


        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 147);
        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    const userBtn3 = () => {
        clearTimer(getDeadTime());
        setFormModal3('btnform4')

        // setFormModal2(color)

    }
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
                   

                    <div className="App mt-3 container text-center timer-layout">
                     
                        <div>
                            <button type="button"
                                className='timer-button-2 '
                                style={{
                                    color: "black",
                                    fontWeight: 'bold',
                                    // fontSize:'77%',


                                }}
                                onClick={userBtn3}>Resend</button>
                        </div>
                        <div className="ml-3">
                            <span className="timer-2">{timer}</span>
                        </div>
                    </div>
                </div>}
        </>
    )
}


export const Form4 = ({ setFormModal3, close }) => {
    const [formModal4, setFormModal4] = useState()
    const [fileUpload, setFileUpload] = useState("No file Selected ")

    const handleChange = (e) => {
        const fileValue = e.target.value.split("\\", 3)
        setFileUpload(fileValue[2])
        console.log("event", fileUpload)

    }
    return (
        <>
            {formModal4 === 'btnform5' ?
                <Form5 setFormModal4={setFormModal4} close={close} /> :
                <div>
                    <div className="form4-body container">
                        <div className="re-back" >
                            <span onClick={() => setFormModal3('btnform3')}><BackArrow /></span>
                        </div>
                        <div className="text-center user-verification ">

                            <h3>Level 1 Verification</h3>
                        </div>

                        <div className="">
                            <p style={{ fontWeight: 'bold', color: 'white' }} className="upload-selfie">Upload Selfie</p>
                        </div>

                        {/* <div>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Multiple files input example</Form.Label>
                            <Form.Control type="file" multiple className="fileupload-user" />

                        </Form.Group>
                    </div> */}

                        <div className="upload-file-row">
                            <div className="form-upload">

                                <Button

                                    variant="btn btn-primary"
                                    style={{
                                        color: "black",
                                        width: '100%',
                                        fontWeight: 'bold',
                                    }}  >
                                    <label className="custom-file-upload">
                                        <input type="file" onChange={(e) => handleChange(e)} />
                                        + Upload File
                                    </label>
                                </Button>

                                {/* <Button>
                                <label className="custom-file-upload">
                                    <input type="file" />
                                    + Upload File
                                </label>
                                </Button> */}


                            </div>
                            <div className="form-upload">
                                <Button
                                    type="button"
                                    variant="outline-primary"

                                    style={{

                                        width: '100%',
                                        fontWeight: 'bold'
                                    }}
                                    onClick={()=>setFileUpload("No File Selected")}


                                >
                                    - Remove File
                                </Button>

                            </div>
                            <div className="form-upload">
                                {fileUpload === " " ?
                                    <span className="form-upload-status"> no file selected</span> :
                                    <span className="form-upload-status"> {fileUpload}</span>}


                            </div>
                        </div>

                        <div className="upload-file-row-mobile">
                            <Row>
                                <Col xs={8} md={4}>
                                    <div className="form-upload">
                                        <Button
                                            type="file"
                                            variant="btn btn-primary"
                                            style={{
                                                color: "black",
                                                width: '100%',
                                                fontWeight: 'bold',
                                            }} 
                                          >
                                            <label className="custom-file-upload">
                                        <input type="file" onChange={(e) => handleChange(e)} />
                                        + Upload File
                                    </label>
                                         
                                        </Button>

                                    </div>
                                </Col>
                                <Col xs={8} md={4}>
                                    <div className="form-upload">
                                        <Button
                                            type="button"
                                            variant="outline-primary"

                                            style={{

                                                width: '100%',
                                                fontWeight: 'bold'
                                            }}

                                            onClick={()=>setFileUpload("No File Selected")}
                                        >
                                            - Remove File
                                        </Button>

                                    </div>
                                </Col>
                                <Col xs={4} md={6}>
                                    <div className="form-upload">
                                        {fileUpload === " "?
                                        <span className="form-upload-status-2">No file selected</span>:
                                        <span className="form-upload-status-2">{fileUpload}</span>}

                                    </div>
                                </Col>

                            </Row>
                        </div>

                        <div className="no-older">
                            <span> No older than 24 hours</span>
                        </div>
                        <Button
                            type="button"
                            variant="btn btn-primary"
                            style={{
                                color: "black",
                                // float: 'right',
                                fontWeight: 'bold',
                                width: '100%',


                            }}
                            className="mobile-4-button"
                            onClick={() => setFormModal4('btnform5')}
                        >
                            Continue
                        </Button>
                    </div>

                    <div>
                        <Button
                            type="button"
                            variant="btn btn-primary"
                            style={{
                                color: "black",
                                float: 'right',
                                fontWeight: 'bold',
                            }}
                            className="form-4-button"
                            onClick={() => setFormModal4('btnform5')}
                        >
                            Continue
                        </Button>
                    </div>
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
                <div className="">
                    <div className="form5-body container mb-3">
                        <div className="re-back ml-2" >
                            <span onClick={() => setFormModal4('btnform4')}><BackArrow /></span>
                        </div>

                        <div className="text-center user-verification-5- ">
                            <h3>Scan This Code With Your<br />Authenticatior App</h3>

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
                                className="form-5-button"
                                style={{
                                    color: "black",
                                    fontWeight: 'bold',
                                    float: 'right',
                                    marginTop: 20,

                                }}
                                onClick={() => setFormModal5('btnform6')}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                    <div>
                        <Button
                            type="button"
                            variant="btn btn-primary"
                            style={{
                                color: "black",
                                width: '100%',
                                fontWeight: 'bold'

                            }}
                            className="mobile-button-5"
                            onClick={() => setFormModal5('btnform6')}

                        >
                            Next

                        </Button>

                    </div>
                </div>


            }
        </>
    )
}
export const Form6 = ({ setFormModal5, close }) => {

    const [formModal6, setFormModal6] = useState()
    const [OTP, setOTP] = useState("");
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
                    <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={5} otpType="number" disabled={false} style={{ display: 'flex', justifyContent: 'center' }}
                        inputStyles={{
                            width: 56,
                            height: 56, textAlign: 'center',
                            margin: 5,
                            fontSize: 29,
                            backgroundColor: '#0D1D29',
                            border: 'none',
                            borderRadius: 5,
                            color: 'white'
                        }} />
                    <div>
                        <Button
                            type="button"
                            variant="btn btn-primary"
                            style={{
                                color: "black",

                                float: 'right',
                                fontWeight: 'bold',
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
        <div className="">
            <div className=" form7-body container">
                <div className="Success-icon text-center mb-2" >
                    <Success />
                </div>

                <div className="text-center">
                    <h2 className="success-text">Success</h2>

                </div>

                <div className=" text-center user-sub-5' mt-4">
                    <p>Your Two-factor authentication is now enabled.</p>
                </div>



                <Button
                    type="button"
                    variant="btn btn-primary"
                    style={{
                        color: "black",
                        width: '100%',
                        fontWeight: 'bold'

                    }}
                    className="mobile-button-7"
                    onClick={() => { close() }}
                >
                    Done

                </Button>

            </div>
            <div className=" form7-fotter">
                <Button
                    type="button"
                    variant="btn btn-primary"
                    className="form7-button"
                    style={{
                        color: "black",

                        fontWeight: 'bold',
                    }}
                    onClick={() => { close() }}
                >
                    Done
                </Button>
            </div>
        </div>
    )
}



