import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Card from "../../../../components/Card";
import Customheader from "../../../../components/Customheader";
import Img1 from "../../../../assets/images/Customheader/Headerimg8.png";
import Custombtn from "../../../../components/Custombtn";
import Customsearchbar from "../../../../components/Customsearchbar";
import UltraFairCard from "../../../../Common/UltraFairCard";
import CardSwiper from "../../../../Common/CardSwiper";
const Switch = () => {
  const SVG = (
    <svg
      width="25"
      height="25"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 9.10815C18 14.0827 13.9745 18.1082 9 18.1082C4.02545 18.1082 0 14.0827 0 9.10815C0 4.13361 4.02545 0.108154 9 0.108154C13.9745 0.108154 18 4.13361 18 9.10815ZM9.81818 2.61179C11.5609 2.8327 13.1482 3.74906 14.2118 5.14815L15.6355 4.32997C14.2773 2.41543 12.1582 1.17179 9.81818 0.926336V2.61179ZM2.36455 4.32997L3.78818 5.14815C4.85182 3.74906 6.43909 2.8327 8.18182 2.61179V0.926336C5.84182 1.17179 3.72273 2.41543 2.36455 4.32997ZM1.54636 12.4627L2.96182 11.6445C2.28273 10.0245 2.28273 8.19179 2.96182 6.57179L1.54636 5.75361C0.572727 7.88088 0.572727 10.3354 1.54636 12.4627ZM8.18182 15.6045C6.43909 15.3836 4.85182 14.4672 3.78818 13.0682L2.36455 13.8863C3.72273 15.8009 5.84182 17.0445 8.18182 17.29V15.6045ZM15.6355 13.8863L14.2118 13.0682C13.1482 14.4672 11.5609 15.3836 9.81818 15.6045V17.2409C12.15 17.0036 14.2691 15.7845 15.6355 13.8863ZM16.4536 12.4627C17.4273 10.3354 17.4273 7.88088 16.4536 5.75361L15.0382 6.57179C15.7173 8.19179 15.7173 10.0245 15.0382 11.6445L16.4536 12.4627ZM11.4545 9.10815L9 5.01725L6.54545 9.10815L9 13.1991L11.4545 9.10815Z"
        fill="#11FFBD"
      />
    </svg>
  );
  return (
    <>
      <Container fluid>
        {/* <Row>
            <Col sm="12" lg="12">
                <Card>
                  <Card.Header className="d-flex justify-content-between">
                     <div className="iq-header-title">
                        <h4 className="card-title">State</h4>
                     </div>
                  </Card.Header>
                  <Card.Body>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                     <div className="custom-control custom-switch custom-control-inline">
                        <Form.Check.Input type="checkbox" className="custom-control-input" id="customSwitch1"/>
                        <Form.Check.Label className="custom-control-label" htmlFor="customSwitch1">false / Inactive</Form.Check.Label>
                     </div>
                     <div className="custom-control custom-switch custom-control-inline">
                        <Form.Check.Input type="checkbox" className="custom-control-input" id="customSwitch2" defaultChecked/>
                        <Form.Check.Label className="custom-control-label" htmlFor="customSwitch2">true / active</Form.Check.Label>
                     </div>
                     <div className="custom-control custom-switch custom-control-inline">
                        <Form.Check.Input type="checkbox" className="custom-control-input" disabled defaultChecked id="customSwitch3"/>
                        <Form.Check.Label className="custom-control-label" htmlFor="customSwitch3">disable / active</Form.Check.Label>
                     </div>
                     <div className="custom-control custom-switch custom-control-inline">
                        <Form.Check.Input type="checkbox" className="custom-control-input" disabled id="customSwitch4" />
                        <Form.Check.Label className="custom-control-label" htmlFor="customSwitch4">disable / Inactive</Form.Check.Label>
                     </div>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Header className="d-flex justify-content-between">
                     <div className="iq-header-title">
                        <h4 className="card-title">Text</h4>
                     </div>
                  </Card.Header>
                  <Card.Body>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                     <div className="custom-control custom-switch custom-switch-text custom-control-inline">
                        <div className="custom-switch-inner">
                           <p className="mb-0"> Primary </p>
                           <Form.Check.Input type="checkbox" className="custom-control-input" id="customSwitch-11" defaultChecked/>
                           <Form.Check.Label  className="custom-control-label" htmlFor="customSwitch-11" data-on-label="On" data-off-label="Off">
                           </Form.Check.Label>
                        </div>
                     </div>
                     <div className="custom-control custom-switch custom-switch-text custom-switch-color custom-control-inline">
                        <div className="custom-switch-inner">
                           <p className="mb-0"> Success </p>
                           <Form.Check.Input type="checkbox" className="custom-control-input bg-success" id="customSwitch-22" defaultChecked />
                           <Form.Check.Label  className="custom-control-label" htmlFor="customSwitch-22" data-on-label="Tr" data-off-label="Fal">
                           </Form.Check.Label>
                        </div>
                     </div>
                     <div className="custom-control custom-switch custom-switch-text custom-switch-color custom-control-inline">
                        <div className="custom-switch-inner">
                           <p className="mb-0"> Danger </p>
                           <Form.Check.Input type="checkbox" className="custom-control-input bg-danger" id="customSwitch-33" defaultChecked/>
                           <Form.Check.Label  className="custom-control-label" htmlFor="customSwitch-33" data-on-label="Yes" data-off-label="No" >
                           </Form.Check.Label>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col sm="12" lg="12">
               <Card> 
                  <Card.Header className="d-flex justify-content-between">
                     <div className="iq-header-title">
                        <h4 className="card-title">Color</h4>
                     </div>
                  </Card.Header>
                  <Card.Body>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                     <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                        <Form.Check.Input type="checkbox" className="custom-control-input bg-primary" id="customSwitch01" defaultChecked/>
                        <Form.Check.Label  className="custom-control-label" htmlFor="customSwitch01">Primary</Form.Check.Label>
                     </div>
                     <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                        <Form.Check.Input type="checkbox" className="custom-control-input bg-success" id="customSwitch02" defaultChecked/>
                        <Form.Check.Label  className="custom-control-label" htmlFor="customSwitch02">Success</Form.Check.Label>
                     </div>
                     <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                        <Form.Check.Input type="checkbox" className="custom-control-input bg-danger" id="customSwitch03" defaultChecked/>
                        <Form.Check.Label  className="custom-control-label" htmlFor="customSwitch03">Danger</Form.Check.Label>
                     </div>
                     <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                        <Form.Check.Input type="checkbox" className="custom-control-input bg-waring" id="customSwitch04" defaultChecked/>
                        <Form.Check.Label  className="custom-control-label" htmlFor="customSwitch04">Waring</Form.Check.Label>
                     </div>
                     <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                        <Form.Check.Input type="checkbox" className="custom-control-input bg-dark" id="customSwitch05" defaultChecked/>
                        <Form.Check.Label  className="custom-control-label" htmlFor="customSwitch05">Dark</Form.Check.Label>
                     </div>
                     <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                        <Form.Check.Input type="checkbox" className="custom-control-input bg-info" id="customSwitch06" defaultChecked/>
                        <Form.Check.Label  className="custom-control-label" htmlFor="customSwitch06">Info</Form.Check.Label>
                     </div>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Header className="d-flex justify-content-between">
                     <div className="iq-header-title">
                        <h4 className="card-title">Icon</h4>
                     </div>
                  </Card.Header>
                  <Card.Body>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                     <div className="custom-control custom-switch custom-switch-icon custom-control-inline">
                        <div className="custom-switch-inner">
                           <p className="mb-0"> Primary </p>
                           <Form.Check.Input type="checkbox" className="custom-control-input" id="customSwitch-1" defaultChecked/>
                           <Form.Check.Label  className="custom-control-label" htmlFor="customSwitch-1">
                              <span className="switch-icon-left"><i className="fa fa-check"></i></span>
                              <span className="switch-icon-right"><i className="fa fa-check"></i></span>
                           </Form.Check.Label>
                        </div>
                     </div>
                     <div className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                        <div className="custom-switch-inner">
                           <p className="mb-0"> Success </p>
                           <Form.Check.Input type="checkbox" className="custom-control-input bg-success" id="customSwitch-2" defaultChecked/>
                           <Form.Check.Label  className="custom-control-label" htmlFor="customSwitch-2">
                              <span className="switch-icon-left"><i className="fa fa-check"></i></span>
                              <span className="switch-icon-right"><i className="fa fa-check"></i></span>
                           </Form.Check.Label>
                        </div>
                     </div>
                     <div className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                        <div className="custom-switch-inner">
                           <p className="mb-0"> Danger </p>
                           <Form.Check.Input type="checkbox" className="custom-control-input bg-danger" id="customSwitch-3" defaultChecked/>
                           <Form.Check.Label  className="custom-control-label" htmlFor="customSwitch-3">
                              <span className="switch-icon-left"><i className="fa fa-times"></i></span>
                              <span className="switch-icon-right"><i className="fa fa-times"></i></span>
                           </Form.Check.Label>
                        </div>
                     </div>
                     <div className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                        <div className="custom-switch-inner">
                           <p className="mb-0"> Warning </p>
                           <Form.Check.Input type="checkbox" className="custom-control-input bg-warning" id="customSwitch-4" defaultChecked/>
                           <Form.Check.Label  className="custom-control-label" htmlFor="customSwitch-4">
                              <span className="switch-icon-left"><i className="fa fa-exclamation-triangle"></i></span>
                              <span className="switch-icon-right"><i className="fa fa-exclamation-triangle"></i></span>
                           </Form.Check.Label>
                        </div>
                     </div>
                     <div className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                        <div className="custom-switch-inner">
                           <p className="mb-0"> Dark </p>
                           <Form.Check.Input type="checkbox" className="custom-control-input bg-dark" id="customSwitch-5" defaultChecked/>
                           <Form.Check.Label  className="custom-control-label" htmlFor="customSwitch-5">
                              <span className="switch-icon-left"><i className="fa fa-thumb-tack"></i></span>
                              <span className="switch-icon-right"><i className="fa fa-thumb-tack"></i></span>
                           </Form.Check.Label>
                        </div>
                     </div>
                     <div className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                        <div className="custom-switch-inner">
                           <p className="mb-0"> Info </p>
                           <Form.Check.Input type="checkbox" className="custom-control-input bg-info" id="customSwitch-6" defaultChecked/>
                           <Form.Check.Label  className="custom-control-label" htmlFor="customSwitch-6">
                              <span className="switch-icon-left"><i className="fa fa-info"></i></span>
                              <span className="switch-icon-right"><i className="fa fa-info"></i></span>
                           </Form.Check.Label>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row> */}

        <Customheader title="Table Games" SVG={SVG} wid="15%" Img={Img1} />
        <Customsearchbar hg="5%" wd="390%" />
        <Custombtn mr="2%" flx="flex-start" />
        <UltraFairCard />
        <CardSwiper classnm="ABdcC" classnm1="AccBCD" />
      </Container>
    </>
  );
};
export default Switch;
