import React, { useState } from 'react'
import { Col, Row, Container, ProgressBar, Button, Dropdown } from 'react-bootstrap'
import Card from '../../../../components/Card'

import Customprofilebar from '../../../../components/Customprofilebar'
import WalletSlider from '../walletslider/walletSlider'

import { SuccessIconSVG } from './userprofileIcon'

//css

import '../../../../assets/css/Ultrafair/profilebar.css'

const EditUserProfileName = () => {
    const [walletHealthPercentage, setWalletHealthPercentage] = useState(0);

    const sliderValue = (value) => {
        console.log("vvvv==>", value);
        return setWalletHealthPercentage(value);
    };
    return (
        <>

            <Customprofilebar />
            <Container fluid>

                <Row className="profile-content">

                    <Col className="">
                        <Row>
                            <Col md="8" >
                                <Card className="iq-card-block iq-card-stretch  card-box">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between">
                                            <h4 className="m-2  profile-card-title">Verification Status</h4>
                                            <div><Button variant="outline-success"><span className='m-1'>Level 3</span></Button>{' '}</div>
                                        </div>
                                        <div className='m-2 mb-2'>
                                            <div className='d-flex mt-4'>
                                                <div>
                                                    <SuccessIconSVG />
                                                </div>
                                                <div className='profile-heading-text'>Register a Profile - <span style={{ color: '#11FFBD' }}>Complete</span></div>

                                            </div>
                                            <div className='profile-heading-sub-text'>Create a profile using your personal details.</div>
                                        </div>

                                        <div className='m-2 mb-2'>
                                            <div className='d-flex mt-4'>
                                                <div>
                                                    <SuccessIconSVG />
                                                </div>
                                                <div className='profile-heading-text'>Level 1 - <span style={{ color: '#11FFBD' }}>Complete</span></div>

                                            </div>
                                            <div className='profile-heading-sub-text'>Trade up to a total amount of R15 000</div>
                                        </div>


                                        <div className='m-2 mb-2'>
                                            <div className='d-flex mt-4'>
                                                <div>
                                                    <SuccessIconSVG />
                                                </div>
                                                <div className='profile-heading-text'>Level 2 - <span style={{ color: '#11FFBD' }}>Complete</span></div>

                                            </div>
                                            <div className='profile-heading-sub-text'>Deposit or withdraw up to R50 000 per month.</div>
                                        </div>

                                        <div className='m-2 mb-4'>
                                            <div className='d-flex mt-4'>
                                                <div>
                                                    <SuccessIconSVG />
                                                </div>
                                                <div className='profile-heading-text'>Level 3 - <span style={{ color: '#11FFBD' }}>Complete</span></div>
                                            </div>
                                            <div className='profile-heading-sub-text'>Trade, deposit, withdraw without any limits.</div>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md="4">
                                <div>
                                    <Card className="iq-card-block iq-card-stretch iq-card-height card-box">
                                        <Card.Header className="d-flex justify-content-between align-items-center mb-0">
                                            <div className="iq-header-title">
                                                <h4 className="card-title mb-0 profile-card-title">
                                                    Wallet Health
                                                </h4>
                                            </div>
                                        </Card.Header>
                                        <Card.Body>
                                            <ul className="list-inline p-0 mb-0">
                                                <li>
                                                    <div className="iq-details mb-2">
                                                        <div>
                                                            <WalletSlider percentageValue={sliderValue} />
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <Row
                                                className="p-2"
                                                style={{ justifyContent: "space-around" }}
                                            >
                                                <Col
                                                    className="col-3 wallet-health-text"
                                                    style={{ paddingLeft: "0px" }}
                                                >
                                                    <b>{`${walletHealthPercentage}%`}</b>
                                                </Col>
                                                <Col
                                                    className="col-8 wallet-health-subtext"
                                                    style={{
                                                        marginLeft: "0px",
                                                        fontSize: "12px",
                                                        fontFamily: "Montserrat",
                                                        fontWeight: "400",
                                                    }}
                                                >
                                                    To improve your wallet health, click{" "}
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        here
                                                    </a>{" "}
                                                    to find out more.
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </div>

                                <div>
                                    <Card className="iq-card-block iq-card-stretch iq-card-height card-box">
                                        <Card.Header className="d-flex justify-content-between align-items-center mb-0">
                                            <div className="iq-header-title">
                                                <h4 className="card-title mb-0 profile-card-title">Security Settings</h4>
                                            </div>

                                        </Card.Header>
                                        <Card.Body>
                                            <div className='p-2 mb-4'>
                                                <label class="container-checkbox">
                                                    <span style={{ position: "relative", bottom: 4, fontFamily: 'Montserrat', fontSize: "16px", fontWeight: "400", marginLeft: "10px" }}>Keep me signed in</span>
                                                    <input type="checkbox" className="checkbox-input" />
                                                    <span class="checkmark new-checkmark" style={{ border: "2px solid #B3BAD1 !important" }}></span>
                                                </label>

                                                {/* <div className='d-flex mb-2'>
                                                    <input class="chone" type="checkbox" id="value1" name="value1" value="value1" />
                                                    <div style={{ marginTop: "-2px" }}><label style={{ marginLeft: "20px" }} for="value1">Keep me signed in</label></div> */}
                                                {/* </div> */}
                                                <div><Button variant="outline-success"><span className='m-1'>Change Password</span></Button>{' '}</div>
                                                <hr className='line-style' />
                                                <div className='card-text mb-4'>Two-Factor Authentication</div>
                                                <Button variant="outline-success"><span className='m-1'>Disable 2FA</span></Button>{' '}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default EditUserProfileName;