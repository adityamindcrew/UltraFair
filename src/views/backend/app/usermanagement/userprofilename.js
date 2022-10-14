import React from 'react'
import { Col, Row, Container, ProgressBar, Button } from 'react-bootstrap'
import Card from '../../../../components/Card'

import Customprofilebar from '../../../../components/Customprofilebar'


import { SuccessIconSVG } from './userprofileIcon'

//css

import '../../../../assets/css/Ultrafair/profilebar.css'

const UserProfileName = () => {
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
                                            <div><Button variant="outline-success"><span className='m-1'>Lavel 0</span></Button>{' '}</div>
                                        </div>
                                        <div className='m-2 mb-2'>
                                            <div className='d-flex mt-4'>
                                                <div>
                                                    <SuccessIconSVG />
                                                </div>
                                                <div className='profile-heading-text'>Register a Profile - <span style={{color: '#11FFBD'}}>Complete</span></div>

                                            </div>
                                            <div className='profile-heading-sub-text'>Create a profile using your personal details.</div>
                                        </div>

                                        <div className='m-2 mb-2'>
                                            <div className='d-flex mt-4'>
                                            <div className='profile-step'>
                                                <div className='m-1'>1</div>
                                                </div>
                                                <div className='profile-heading-text'>Level 1 - <span style={{color: '#ff0000'}}>Incomplete</span></div>

                                            </div>
                                            <div className='profile-heading-sub-text'>Trade up to a total amount of Rs 15000</div>
                                            <button type="button" class="btn-sm authentication-button ml-5">Complete Level 1</button>
                                        </div>

                                        <div className='m-2 mb-2'>
                                            <div className='d-flex mt-4'>
                                                <div className='profile-step-number'>
                                                <div className='m-1'>2</div>
                                                </div>
                                                <div className='profile-heading-text'>Level 2 - <span style={{color: '#B3BAD1' ,fontWeight: '600'}}>Complete Level 1 first</span></div>

                                            </div>
                                            <div className='profile-heading-sub-text' style={{color: '#FFFFFF'}}>Deposit or withdraw up to R50 000 per month.</div>
                                            <button type="button" class="btn-sm authentication-button ml-5">Complete Level 2</button>
                                        </div>

                                        <div className='m-2 mb-2'>
                                            <div className='d-flex mt-4'>
                                            <div className='profile-step-number'>
                                                <div className='m-1'>3</div>
                                                </div>
                                                <div className='profile-heading-text'>Level 3 - <span style={{color: '#B3BAD1' ,fontWeight: '600'}}>Complete Level 2 first</span></div>

                                            </div>
                                            <div className='profile-heading-sub-text'>Trade, deposit, withdraw without any limits.</div>
                                            <button type="button" class="btn-sm authentication-button ml-5">Complete Level 3</button>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md="4">
                             <div>
                                    <Card className="iq-card-block iq-card-stretch iq-card-height card-box">
                                        <Card.Header className="d-flex justify-content-between align-items-center mb-0">
                                            <div className="iq-header-title">
                                                <h4 className="card-title mb-0 profile-card-title">Wallet Health</h4>
                                            </div>
                                        </Card.Header>
                                        <Card.Body>
                                            <ul className="list-inline p-0 mb-0">
                                                <li>
                                                    <div className="iq-details mb-2">
                                                        <div className="percentage float-right text-primary">95 <span>%</span></div>
                                                        <div className="iq-progress-bar-linear d-inline-block w-100">
                                                            <ProgressBar>
                                                                <ProgressBar now={20} animated striped variant="success" label={`Ok`} key={1} />
                                                                <ProgressBar now={20} animated striped variant="info" label={`Bit High`} key={2} />
                                                                <ProgressBar now={20} animated striped variant="warning" label={`Going High`} key={3} />
                                                                <ProgressBar now={18} animated striped variant="danger" label={`Alert!!!`} key={4} />
                                                            </ProgressBar>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <Row className='p-2'>
                                                <Col className='col-3 wallet-health-text'>
                                                    76%
                                                </Col>
                                                <Col className='col-8 wallet-health-subtext'>
                                                    To improve your wallet health, click <a href='' style={{textDecoration :"underline"}}>here</a> to find out more.
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
                                                <div className='d-flex mb-2'>
                                                    <input class="chone" type="checkbox" id="value1" name="value1" value="value1" />
                                                    <div style={{ marginTop: "-2px" }}><label style={{ marginLeft: "20px" }} for="value1">Keep me signed in</label></div>
                                                </div>
                                                <div><Button variant="outline-success"><span className='m-1'>Change Password</span></Button>{' '}</div>
                                                <hr className='line-style' />
                                                <div className='card-text'>Two-Factor Authentication</div>
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