import React, { useState } from 'react'
import { Col, Row, Container, ProgressBar, Button } from 'react-bootstrap'
import Card from '../../../../components/Card'

import Customprofilebar from '../../../../components/Customprofilebar'
import WalletSlider from '../walletslider/walletSlider'

import { SuccessIconSVG } from './userprofileIcon'

//css

import '../../../../assets/css/Ultrafair/profilebar.css'

const UserProfileName = () => {
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
                                <Card className="iq-card-block iq-card-stretch iq-card-height card-box">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between">
                                            <h4 className="m-2  profile-card-title">Verification Status</h4>
                                            <div><Button variant="outline-success"><span className='m-1'>Level 0</span></Button>{' '}</div>
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
                                                <div className='profile-step'>
                                                    <div className='m-1'>1</div>
                                                </div>
                                                <div className='profile-heading-text'>Level 1 - <span style={{ color: '#EF5B5B' }}>Incomplete</span></div>

                                            </div>
                                            <div className='profile-heading-sub-text' style={{ color: '#FFFFFF' }}>Trade up to a total amount of R15 000</div>
                                            <button type="button" class="btn-sm authentication-button" style={{ marginLeft: '3.5rem' }}>Complete Level 1</button>
                                        </div>

                                        <div className='m-2 mb-2'>
                                            <div className='d-flex mt-4'>
                                                <div className='profile-step-number'>
                                                    <div className=''>2</div>
                                                </div>
                                                <div className='profile-heading-text-blur'>Level 2 - <span style={{ color: '#B3BAD1', fontWeight: '600' }}>Complete Level 1 first</span></div>

                                            </div>
                                            <div className='profile-heading-sub-text'>Deposit or withdraw up to R50 000 per month.</div>
                                            <button type="button" class="btn-sm authentication-button" style={{ marginLeft: '3.5rem' }}>Complete Level 2</button>
                                        </div>

                                        <div className='m-2 mb-2'>
                                            <div className='d-flex mt-4'>
                                                <div className='profile-step-number'>
                                                    <div className=''>3</div>
                                                </div>
                                                <div className='profile-heading-text-blur'>Level 3 - <span style={{ color: '#B3BAD1', fontWeight: '600' }}>Complete Level 2 first</span></div>

                                            </div>
                                            <div className='profile-heading-sub-text'>Trade, deposit, withdraw without any limits.</div>
                                            <button type="button" class="btn-sm authentication-button" style={{ marginLeft: '3.5rem' }}>Complete Level 3</button>
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
                                                    <span style={{ position: "relative", bottom: 4, fontFamily: 'Montserrat' }}>Keep me signed in</span>
                                                    <input type="checkbox" className="checkbox-input" />
                                                    <span class="checkmark new-checkmark"></span>
                                                </label>
                                                <div><Button variant="outline-success"><span className='m-1'>Change Password</span></Button>{' '}</div>
                                                <hr className='line-style' />
                                                <div className='card-text mb-2'>Two-Factor Authentication</div>
                                                <button type="button" class="btn-sm authentication-button">Enable 2FA</button>
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

export default UserProfileName;