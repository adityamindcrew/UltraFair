import React from 'react'
import {Container,Row,Col,Form} from 'react-bootstrap'
import  Card from '../../../../components/Card'


import Img1 from "../../../../assets/images/Customheader/Headerimg5.png"
const Checkbox = () => {
  
    return (
        <>
              <Container>
               {/* <Row>
                  <Col sm="12" lg="6">
                  <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Basic Checkbox</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="checkbox d-inline-block mr-2">
                              <input type="checkbox" className="checkbox-input" id="checkbox1" />
                              <label htmlFor="checkbox1">Primary / Inactive</label>
                           </div>
                           <div className="checkbox d-inline-block mr-2">
                              <input type="checkbox" className="checkbox-input" id="checkbox2" defaultChecked />
                              <label htmlFor="checkbox2">Primary / Active</label>
                           </div>
                           <div className="checkbox d-inline-block mr-2">
                              <input type="checkbox" className="checkbox-input" id="checkbox3" disabled/>
                              <label htmlFor="checkbox3">Disable / Inactive</label>
                           </div>
                           <div className="checkbox d-inline-block mr-2">
                              <input type="checkbox" className="checkbox-input" id="checkbox4" defaultChecked disabled/>
                              <label htmlFor="checkbox4">Active / Disable</label>
                           </div>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Custom Color</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-primary" id="customCheck-11"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-11">Primary </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-success" id="customCheck-22"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-22">Success</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-danger" id="customCheck-33"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-33">Danger</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-warning" id="customCheck-44"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-44">Warning</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-dark" id="customCheck-55"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-55">Dark</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-info" id="customCheck-66"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-66"> Info</Form.Check.Label>
                           </div>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Boolean Checkbox</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="custom-control custom-checkbox custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-t" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-t">True</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-f"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-f">False</Form.Check.Label>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col sm="12" lg="6">
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Custom Checkbox</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="custom-control custom-checkbox custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck5"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck5">Primary / Inactive</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck6" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck6">Primary - active</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck7"  disabled/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck7">Primary - inactive - disabled</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck8"  defaultChecked disabled/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck8">Primary - active - disabled</Form.Check.Label>
                           </div>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Color</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-primary" id="customCheck-1" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-1"> Primary</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-success" id="customCheck-2" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-2">Success</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-danger" id="customCheck-3" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-3">Danger</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-warning" id="customCheck-4" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-4">Warning</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-dark" id="customCheck-5" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-5">Dark</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-info" id="customCheck-6" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-6">Info</Form.Check.Label>
                           </div>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Change Icon</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-10" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-10"><i className="fa fa-music"></i>Music</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-20" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-20"><i className="fa fa-commenting-o"></i>SMS</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-30" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-30"><i className="fa fa-times"></i>Cancel</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-40" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-40"><i className="fa fa-file"></i>File</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-50" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-50"><i className="fa fa-bold"></i>Bold</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-60" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-60"><i className="fa fa-map-marker"></i>Location</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-70" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-70"><i className="fa fa-camera"></i>Camera</Form.Check.Label>
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
                 <div style={{display:"flex",flexDirection:"row",justifyContent:'space-between',alignItems:"center",width:"15%"}}>
                    {/* <img src={UltrafairOrignalsSVG} height="20px" width="20px"/>
                     */}
      <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.30009 0.0585938C4.81964 0.0585938 3.6002 1.27803 3.6002 2.75848C3.6002 3.07513 3.66675 3.37505 3.76894 3.65844H1.91277C0.953411 3.65844 0.0812212 4.35847 0.00562431 5.31423C-0.0510733 6.0396 0.326138 6.67391 0.900314 7.00869V15.358C0.900314 16.3479 1.71028 17.1579 2.70024 17.1579H8.10001V8.15826C8.10001 7.66148 8.5032 7.25829 8.99998 7.25829C9.49676 7.25829 9.89994 7.66148 9.89994 8.15826V17.1579H15.2997C16.2897 17.1579 17.0996 16.3479 17.0996 15.358V7.00869C17.6738 6.67391 18.051 6.0396 17.9943 5.31423C17.9187 4.35847 17.0465 3.65844 16.0872 3.65844H14.231C14.3332 3.37505 14.3998 3.07513 14.3998 2.75848C14.3998 1.27803 13.1803 0.0585938 11.6999 0.0585938C11.0081 0.0585938 10.3799 0.332299 9.89994 0.766963V0.747628L9.79447 0.853092L8.99998 1.64759L8.20548 0.853092L8.10001 0.747628V0.766963C7.62002 0.332299 6.9918 0.0585938 6.30009 0.0585938ZM6.30009 1.85852C6.80778 1.85852 7.20005 2.25079 7.20005 2.75848C7.20005 3.26618 6.80778 3.65844 6.30009 3.65844C5.79239 3.65844 5.40013 3.26618 5.40013 2.75848C5.40013 2.25079 5.79239 1.85852 6.30009 1.85852ZM11.6999 1.85852C12.2076 1.85852 12.5998 2.25079 12.5998 2.75848C12.5998 3.26618 12.2076 3.65844 11.6999 3.65844C11.1922 3.65844 10.7999 3.26618 10.7999 2.75848C10.7999 2.25079 11.1922 1.85852 11.6999 1.85852Z" fill="#B4E1FF" />
    </svg>

                    <h3>Game Shows</h3>
                 </div>


                 </div>
                 </div>

                 
      </Row>
            </Container>
        </>
    )
}
export default Checkbox;