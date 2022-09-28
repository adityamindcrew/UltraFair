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
                    <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.48 11.4581C13.91 7.37805 8.32 7.15805 9.67 1.22805C9.77 0.78805 9.3 0.448051 8.92 0.678051C5.29 2.81805 2.68 7.10805 4.87 12.7281C5.05 13.1881 4.51 13.6181 4.12 13.3181C2.31 11.9481 2.12 9.97805 2.28 8.56805C2.34 8.04805 1.66 7.79805 1.37 8.22805C0.69 9.26805 0 10.9481 0 13.4781C0.38 19.0781 5.11 20.7981 6.81 21.0181C9.24 21.3281 11.87 20.8781 13.76 19.1481C15.84 17.2181 16.6 14.1381 15.48 11.4581ZM6.2 16.488C7.64 16.138 8.38 15.0981 8.58 14.1781C8.91 12.748 7.62 11.3481 8.49 9.08805C8.82 10.958 11.76 12.1281 11.76 14.1681C11.84 16.6981 9.1 18.868 6.2 16.488Z" fill="#B4E1FF" />
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