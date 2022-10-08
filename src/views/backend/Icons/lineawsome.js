import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  Card from '../../../components/Card'
import Customheader from '../../../components/Customheader'

const LineAwsome = () => {
  const SVG=<svg width="35" height="21" viewBox="0 0 35 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.66134 0.838613C3.82854 1.19855 -0.64507 6.58191 0.517993 12.7169C1.26008 16.6335 4.41892 19.7937 8.3369 20.5358C13.6639 21.5457 18.4152 18.3034 19.8126 13.6138H25.9211V15.0354C25.9211 16.6063 27.1935 17.8786 28.7644 17.8786C30.3353 17.8786 31.6076 16.6063 31.6076 15.0354V13.6138C33.1785 13.6138 34.4508 12.3414 34.4508 10.7705C34.4508 9.19963 33.1785 7.92728 31.6076 7.92728H19.807C18.7838 4.43472 15.8411 1.68923 12.2297 1.00521C11.3534 0.839057 10.4946 0.787193 9.66134 0.838613ZM10.2833 6.50566C12.6389 6.50566 14.5482 8.41489 14.5482 10.7705C14.5482 13.1261 12.6389 15.0354 10.2833 15.0354C7.92768 15.0354 6.01844 13.1261 6.01844 10.7705C6.01844 8.41489 7.92768 6.50566 10.2833 6.50566Z" fill="#B4E1FF"/>
  </svg>
  
   
   return (
      <>
         <Container fluid>
            {/* <Row>
               <Col sm="12">
                  <Card>
                     <Card.Header className="d-flex justify-content-between">
                        <div className="iq-header-title">
                           <h4 className="card-title">lineawesome Icon</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <p>Use Class <code>&lt;i className="las la-bell"&gt;&lt;/i&gt;</code></p>
                        <Row className="mt-3">
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-bell"></i>bell</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-phone-volume"></i>phone</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-radiation"></i>radiation</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-dog"></i>dog</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-fish"></i>fish</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-spider"></i>la-spider</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-angle-down"></i>angle-down</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-angle-left"></i>angle-left</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-angle-right"></i>angle-right</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-angle-up"></i>angle-up</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-caret-left"></i>caret-left</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-caret-right"></i>caret-right</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-download"></i>download</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-location-arrow"></i>location-arrow</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-share"></i>share</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-backward"></i>backward</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-play"></i>play</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-pause"></i>pause</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-sync"></i>sync</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-volume-down"></i>volume-down</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-volume-mute"></i>volume-mute</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-volume-off"></i>volume-off</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-volume-up"></i>volume-up</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="lab la-youtube"></i>youtube</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-car"></i>car</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-truck"></i>truck</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-tree"></i>tree</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="lab la-pinterest-p"></i>pinterest</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="lab la-java"></i>java</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-city"></i>city</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-edit"></i>edit</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-copy"></i>copy</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-cut"></i>cut</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-pen"></i>pen</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-tag"></i>tag</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-save"></i>save</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-tasks"></i>tasks</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-comment"></i>comment</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-video"></i>video</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-smile"></i>smile</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-smile"></i>smile</Link>
                           </Col>
                           <Col sm="6" md="4" lg="3">
                              <Link className="iq-icons-list" to="#"><i className="las la-smile"></i>smile</Link>
                           </Col>
                           <Col sm="12" className="text-center mt-3">
                              <Button href="https://icons8.com/line-awesome" target="_blank" variant="btn btn-primary">View All Icon</Button>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row> */}

           <Customheader title="Lockup" SVG={SVG} wid="15%" mt="8px" />
         </Container>
      </>
   )
}

export default LineAwsome;