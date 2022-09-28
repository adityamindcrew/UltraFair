import React from 'react'
import { Container ,Row, Col,Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  Card from '../../../../components/Card'

import Img1 from "../../../../assets/images/Customheader/Headerimg.2.png"
const UserPrivacySetting = () => {
    return (
    <>
      <Container fluid>
         {/* <Row>
            <Col lg="12">
               <Card>
                  <Card.Header className="d-flex justify-content-between">
                     <div className="iq-header-title">
                        <h4 className="card-title">Privacy Setting</h4>
                     </div>
                  </Card.Header>
                  <Card.Body>
                     <div className="acc-privacy">
                        <div className="data-privacy">
                           <h4 className="mb-2">Account Privacy</h4>
                           <div className="custom-control custom-checkbox custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="acc-private"/>
                              <Form.Check.Label className="custom-control-label privacy-status mb-2" htmlFor="acc-private">Private Account</Form.Check.Label>
                           </div>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        </div>
                        <hr/>
                        <div className="data-privacy">
                           <h4 className="mb-2">Activity Status</h4>
                           <div className="custom-control custom-checkbox custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="activety" defaultChecked/>
                              <Form.Check.Label className="custom-control-label privacy-status mb-2" htmlFor="activety">Show Activity Status</Form.Check.Label>
                           </div>
                           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                        <hr/>
                        <div className="data-privacy">
                           <h4 className="mb-2"> Story Sharing </h4>
                           <div className="custom-control custom-checkbox custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="story" defaultChecked/>
                              <Form.Check.Label className="custom-control-label privacy-status mb-2" htmlFor="story">Allow Sharing</Form.Check.Label>
                           </div>
                           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                        <hr/>
                        <div className="data-privacy">
                           <h4 className="mb-2"> Photo Of You </h4>
                           <div className="custom-control custom-radio">
                              <Form.Check.Input type="radio" id="automatically" name="customRadio0" className="custom-control-input" defaultChecked />
                              <Form.Check.Label className="custom-control-label" htmlFor="automatically"> Add Automatically</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio mb-2">
                              <Form.Check.Input type="radio" id="manualy" name="customRadio0" className="custom-control-input"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="manualy"> Add Manualy</Form.Check.Label>
                           </div>
                           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                        <hr/>
                        <div className="data-privacy">
                           <h4 className="mb-2"> Your Profile </h4>
                           <div className="custom-control custom-radio">
                              <Form.Check.Input type="radio" id="public" name="customRadio1" className="custom-control-input" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="public"> Public </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio">
                              <Form.Check.Input type="radio" id="friend" name="customRadio1" className="custom-control-input"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="friend"> Friend </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio">
                              <Form.Check.Input type="radio" id="spfriend" name="customRadio1" className="custom-control-input"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="spfriend"> Specific Friend </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio mb-2">
                              <Form.Check.Input type="radio" id="onlyme" name="customRadio1" className="custom-control-input"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="onlyme"> Only Me </Form.Check.Label>
                           </div>
                           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                        <hr/>
                        <div className="data-privacy">
                           <h4 className="mb-2"> Login Notification </h4>
                           <div className="custom-control custom-radio">
                              <Form.Check.Input type="radio" id="enable" name="customRadio2" className="custom-control-input"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="enable"> Enable </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio mb-2">
                              <Form.Check.Input type="radio" id="disable" name="customRadio2" className="custom-control-input" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="disable"> Disable </Form.Check.Label>
                           </div>
                           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                        <hr/>
                        <div className="data-privacy">
                           <h4 className="mb-2">Privacy Help</h4>
                           <Link to="#"><i className="ri-customer-service-2-line mr-2"></i>Support</Link>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row> */}
                 <Row>
      <div className="iq-top-navbar headertop" style={{height:"10%",marginTop:"4%",background:"#1E2C37"}}>
                 <div className="iq-navbar-custom" style={{display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",marginTop:"7.5px"}}>
                 <div>
 <img src={Img1} className="LOGOO" style={{height:"9vh",width:"19vw"}}/>
                 </div>
                 <div style={{display:"flex",flexDirection:"row",justifyContent:'space-between',alignItems:"center",width:"14%"}}>
                    {/* <img src={UltrafairOrignalsSVG} height="20px" width="20px"/>
                     */}
            <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.99995 14.3782L13.15 16.8882C13.91 17.3482 14.8399 16.6682 14.6399 15.8082L13.54 11.0882L17.2099 7.90816C17.8799 7.32816 17.5199 6.22816 16.6399 6.15816L11.81 5.74816L9.91995 1.28816C9.57995 0.478164 8.41995 0.478164 8.07995 1.28816L6.18995 5.73816L1.35995 6.14816C0.479951 6.21816 0.119951 7.31816 0.789951 7.89816L4.45995 11.0782L3.35995 15.7982C3.15995 16.6582 4.08995 17.3382 4.84995 16.8782L8.99995 14.3782Z" fill="#F7B32B" />
    </svg>
                    <h4>Ultrafair Exclusive</h4>
                 </div>


                 </div>
                 </div>

                 
      </Row>
      </Container>
    </>
    )
}

export default UserPrivacySetting