import React from 'react'
import { Container ,Row, Col,Form,Button } from 'react-bootstrap'
import  Card from '../../../../components/Card'

import Img1 from "../../../../assets/images/Customheader/Headerimg1.png"

const UserAccountSetting = () => {
    return (
    <>
       <Container fluid>
         {/* <Row>
            <Col lg="6">
               <Card>
                  <Card.Header className="d-flex justify-content-between">
                     <div className="iq-header-title">
                        <h4 className="card-title">Account Setting</h4>
                     </div>
                  </Card.Header>
                  <Card.Body>
                     <div className="acc-edit">
                        <Form>
                           <Form.Group>
                              <Form.Label htmlFor="uname">User Name:</Form.Label>
                              <Form.Control type="text"  id="uname" defaultValue="Barry@01"/>
                           </Form.Group>
                           <Form.Group>
                              <Form.Label htmlFor="email">Email Id:</Form.Label>
                              <Form.Control  type="email"  id="email" defaultValue="Barryjohn@gmail.com"/>
                           </Form.Group>
                           <Form.Group>
                              <Form.Label htmlFor="altemail">Alternate Email:</Form.Label>
                              <Form.Control  type="email"  id="altemail" defaultValue="designtheme@gmail.com"/>
                           </Form.Group>
                           <Form.Group>
                              <Form.Label className="d-block">Language Known:</Form.Label>
                              <div className="custom-control custom-checkbox custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="english" defaultChecked/>
                                 <Form.Check.Label className="custom-control-label" htmlFor="english">English</Form.Check.Label>
                              </div>
                              <div className="custom-control custom-checkbox custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="french" defaultChecked/>
                                 <Form.Check.Label className="custom-control-label" htmlFor="french">French</Form.Check.Label>
                              </div>
                              <div className="custom-control custom-checkbox custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="hindi"/>
                                 <Form.Check.Label className="custom-control-label" htmlFor="hindi">Hindi</Form.Check.Label>
                              </div>
                              <div className="custom-control custom-checkbox custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="spanish" defaultChecked/>
                                 <Form.Check.Label className="custom-control-label" htmlFor="spanish">Spanish</Form.Check.Label>
                              </div>
                              <div className="custom-control custom-checkbox custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="arabic"/>
                                 <Form.Check.Label className="custom-control-label" htmlFor="arabic">Arabic</Form.Check.Label>
                              </div>
                              <div className="custom-control custom-checkbox custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="italian"/>
                                 <Form.Check.Label className="custom-control-label" htmlFor="italian">Italian</Form.Check.Label>
                              </div>
                           </Form.Group>
                           <Button type="button" variant="btn btn-primary">Submit</Button>{' '}
                           <Button type="reset" variant="btn iq-bg-danger">Cancel</Button>
                        </Form>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="6">
               <Card>
                  <Card.Header className="d-flex justify-content-between">
                     <div className="iq-header-title">
                        <h4 className="card-title">Social Media</h4>
                     </div>
                  </Card.Header>
                  <Card.Body>
                     <div className="acc-edit">
                        <Form>
                           <Form.Group>
                              <Form.Label htmlFor="facebook">Facebook:</Form.Label>
                              <Form.Control type="text"  id="facebook" defaultValue="www.facebook.com"/>
                           </Form.Group>
                           <Form.Group>
                              <Form.Label htmlFor="twitter">Twitter:</Form.Label>
                              <Form.Control type="text"  id="twitter" defaultValue="www.twitter.com"/>
                           </Form.Group>
                           <Form.Group>
                              <Form.Label htmlFor="google">Google +:</Form.Label>
                              <Form.Control type="text"  id="google" defaultValue="www.google.com"/>
                           </Form.Group>
                           <Form.Group>
                              <Form.Label htmlFor="instagram">Instagram:</Form.Label>
                              <Form.Control type="text"  id="instagram" defaultValue="www.instagram.com"/>
                           </Form.Group>
                           <Form.Group>
                              <Form.Label htmlFor="youtube">You Tube:</Form.Label>
                              <Form.Control type="text"  id="youtube" defaultValue="www.youtube.com"/>
                           </Form.Group>
                           <Button type="button" variant="btn btn-primary">Submit</Button>{' '}
                           <Button type="reset" variant="btn iq-bg-danger">Cancel</Button>
                        </Form>
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
                 <div style={{display:"flex",flexDirection:"row",justifyContent:'space-between',alignItems:"center",width:"8%"}}>
                    {/* <img src={UltrafairOrignalsSVG} height="20px" width="20px"/>
                     */}
             <svg width="24" height="24" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.69998 9.10815L5.49998 5.50815V4.60815H2.79998V5.50815H4.59998L2.79998 9.10815M7.29998 9.10815L9.09998 5.50815V4.60815H6.39998V5.50815H8.19998L6.39998 9.10815M10.9 9.10815L12.7 5.50815V4.60815H9.99998V5.50815H11.8L9.99998 9.10815M18.1 0.108154C17.11 0.108154 16.3 0.918154 16.3 1.90815C16.3 2.53815 16.66 3.16815 17.2 3.43815V13.6082H14.5V11.8082C15.04 11.8082 15.4 11.4482 15.4 10.9082V2.80815C15.4 2.26815 15.04 1.90815 14.5 1.90815H11.08C10.36 0.828154 9.09998 0.108154 7.74998 0.108154C6.39998 0.108154 5.13998 0.828154 4.41998 1.90815H0.999976C0.459976 1.90815 0.0999756 2.26815 0.0999756 2.80815V10.9082C0.0999756 11.4482 0.459976 11.8082 0.999976 11.8082V17.2082C0.999976 17.7052 1.40292 18.1082 1.89998 18.1082H13.6C14.097 18.1082 14.5 17.7052 14.5 17.2082V15.4082H17.2C18.19 15.4082 19 14.5982 19 13.6082V3.43815C19.54 3.16815 19.9 2.53815 19.9 1.90815C19.9 0.918154 19.09 0.108154 18.1 0.108154ZM10.9 15.4082H4.59998V13.6082H10.9V15.4082ZM13.6 10.0082H1.89998V3.70815H13.6V10.0082Z" fill="#D68FD6" />
    </svg>
                    <h3>Slots</h3>
                 </div>


                 </div>
                 </div>

                 
      </Row>
      </Container>
    </>
    )
}

export default UserAccountSetting