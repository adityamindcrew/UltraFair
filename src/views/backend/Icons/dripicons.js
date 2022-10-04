import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  Card from '../../../components/Card'
import Customheader from '../../../components/Customheader'
import Img1 from "../../../assets/images/Customheader/Headerimg11.png"
import Custombtn from "../../../components/Custombtn";
import Customsearchbar from "../../../components/Customsearchbar";
import UltraFairCard from "../../../Common/UltraFairCard";
import CardSwiper from "../../../Common/CardSwiper";

const Dripicons = () => {

   const SVG =
 <svg width="25" height="25" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.49712 7.87466C10.465 9.01082 12.9813 8.33657 14.1175 6.3687C15.2536 4.40082 14.5794 1.88451 12.6115 0.748351C10.6436 -0.387803 8.1273 0.286441 6.99115 2.25432C5.855 4.22219 6.52924 6.73851 8.49712 7.87466ZM12.3171 9.48703C6.3457 11.0867 5.19075 5.37265 5.19075 5.37265L0.890417 13.6697C0.73213 13.9751 1.12868 14.2634 1.3703 14.0185L4.27227 11.0779L3.2254 16.5549C3.17628 16.8118 3.45667 17.0042 3.67872 16.8658L6.80683 14.9167L6.41224 17.6554C6.36621 17.9749 6.788 18.1317 6.9619 17.8598L12.3171 9.48703Z" fill="#F7B32B"/>
      </svg>
 return (
     <>
     <Container fluid>
         {/* <Row>
            <Col sm="12">
               <Card>
                  <Card.Header className="d-flex justify-content-between">
                     <div className="iq-header-title">
                        <h4 className="card-title">Dripicons Icon</h4>
                     </div>
                  </Card.Header>
                  <Card.Body>
                     <p>Use className <code>&lt;div data-icon="a" className="icon"&gt;&lt;/div&gt;</code></p>
                     <Row className="mt-3">
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="a" className="icon"></div>
                              <span>4k Fill</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="o" className="icon"></div>
                              <span>Up Arrow</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="h" className="icon"></div>
                              <span>Down Arrow</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="j" className="icon"></div>
                              <span>Left Arrow</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="i" className="icon"></div>
                              <span>Right Arrow</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="l" className="icon"></div>
                              <span>left</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="k" className="icon"></div>
                              <span>Down</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="n" className="icon"></div>
                              <span>Up</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="m" className="icon"></div>
                              <span>Right</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="f" className="icon"></div>
                              <span>Anchor</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="g" className="icon"></div>
                              <span>File</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="p" className="icon"></div>
                              <span>Note</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="s" className="icon"></div>
                              <span>Dribbble</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="K" className="icon"></div>
                              <span>Download</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="G" className="icon"></div>
                              <span>Sun</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="H" className="icon"></div>
                              <span>Haf light</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="F" className="icon"></div>
                              <span>Light</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="I" className="icon"></div>
                              <span>Voice</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="x" className="icon"></div>
                              <span>Notification</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="J" className="icon"></div>
                              <span></span>Page
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="t" className="icon"></div>
                              <span>Battery Empty</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="u" className="icon"></div>
                              <span>Battery Full</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="v" className="icon"></div>
                              <span>Battery One</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="w" className="icon"></div>
                              <span>Battery Two</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="Q" className="icon"></div>
                              <span>Cart</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="P" className="icon"></div>
                              <span>Card</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="O" className="icon"></div>
                              <span>Camera</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="N" className="icon"></div>
                              <span>Video</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="S" className="icon"></div>
                              <span>Check</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="T" className="icon"></div>
                              <span>Angle Down</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="U" className="icon"></div>
                              <span>Angle Left</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="V" className="icon"></div>
                              <span>Angle Right</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="W" className="icon"></div>
                              <span>Angle Up</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="X" className="icon"></div>
                              <span>Up Arrow</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="Y" className="icon"></div>
                              <span>Clock</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="Z" className="icon"></div>
                              <span>Reload</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="0" className="icon"></div>
                              <span>Cloud</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="1" className="icon"></div>
                              <span>Cloud Download</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="2" className="icon"></div>
                              <span>Cloud Upload</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="5" className="icon"></div>
                              <span>Arrow</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="5" className="icon"></div>
                              <span>Arrow</span>
                           </Link>
                        </Col>
                        <Col sm="6" md="4" lg="3" xl="3">
                           <Link className="iq-icons-list" to="#" >
                              <div data-icon="5" className="icon"></div>
                              <span>Arrow</span>
                           </Link>
                        </Col>
                        <Col sm="12" className="col-sm-12 text-center mt-3">
                           <Button variant="btn btn-primary" href="http://demo.amitjakhu.com/dripicons/" target="blank">View All Icon</Button>
                        </Col>
                     </Row>
                  </Card.Body>
               </Card>
            </Col>
         </Row> */}

     <Customheader Headercls="Headertitle" title="Roulette" SVG={SVG} wid="12%" Img={Img1}/>         
     <Customsearchbar hg="5%" wd="390%" />
        <Custombtn mr="2%" flx="flex-start" />
        <UltraFairCard />
        <CardSwiper classnm="ABdoC" classnm1="Ac0BCD" />
      </Container>
     </>
 )
}

export default Dripicons;