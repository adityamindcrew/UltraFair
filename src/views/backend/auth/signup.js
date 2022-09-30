import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  Button,
  InputGroup,
  Card,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { rtlModeAction, getRtlMode } from "../../../store/mode/rtlmode";
import Google from "../../../assets/images/social/google.png";
import FB from "../../../assets/images/social/facebook.png";
import Line from "../../../assets/images/social/line.png";
import Chat from "../../../assets/images/social/chat.png";
import ReCAPTCHA from "react-google-recaptcha";

const mapStateToProps = (state) => {
  return {
    rtlMode: getRtlMode(state),
  };
};
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      rtlModeAction,
    },
    dispatch
  ),
});

const SignUp = (props) => {
  console.log("props==>", props);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const rtlMode = sessionStorage.getItem("rtl-mode");
    if (rtlMode === null) {
      props.rtlModeAction(props.rtlMode);
    } else {
      props.rtlModeAction(rtlMode);
    }
  });

  let history = useHistory();

  const[btncolor, setBtncolor] = useState('registerButton')

  const registerHandler = (color) => {
    props.showModal(false);
    setBtncolor(color)
  };
  const loginHandler = (color) => {
    props.showModal(true);
    setBtncolor(color)
  };
  const toggleButton = () => {
    setShow((prevState) => !prevState);
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <>
      {/* <div className={`rtl-box ${show === true ? "" : ""}`}>
         <button type="button" className="btn btn-light rtl-btn">
          <svg
            onClick={() => setShow(!show)}
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </button> 
        <div className="rtl-panel">
          <ul className="modes">
            <li
              className="dir-btn"
              data-mode="rtl"
              data-active="false"
              onClick={() => {
                props.rtlModeAction("ltl");
              }}
              data-value="ltr"
            >
              <Link to="#">LTR</Link>
            </li>
            <li
              className="dir-btn"
              data-mode="rtl"
              data-active="true"
              onClick={() => {
                props.rtlModeAction("rtl");
              }}
              data-value="rtl"
            >
              <Link to="#">RTL</Link>
            </li>
          </ul>
        </div>
      </div> */}
      <div className="sign-in-page">
        {/* <section className="sign-in-page">
          <Container>
            <Row className="justify-content-center align-items-center height-self-center">
              <Col lg="7" md="12" className="align-self-center"> */}
        <div className="sign-user_card ">
          <div className="sign-in-page-data">
            <button
              type="button"
              class="close"
              aria-label="Close"
              style={{ color: "white", position:'relative', top:-15, left:3, fontSize:33}}
              onClick={() => {
                console.log("Hellow!");
                props.close(false);
              }}
            >
              <span aria-hidden="true" style={{fontWeight:1}}>&times;</span>
            </button>
            <div className="sign-in-from w-100 m-auto">
              <Form className="" action="/">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "1em",
                  }}
                >
                  <div class="btn-group registerToggleOuter">
                    <button
                      type="button"
                      class="btn btn-secondary registerToggle selected"
                      
                      onClick={()=>{registerHandler('registerButton')}}
                     // style={{backgroundColor: btncolor=='registerButton'?'#344452':'rgba 0.07, 0.13, 0.18, 1.0'}}
                    >
                      Register
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary registerToggle"
                     
                      onClick={()=>{loginHandler('loginButton')}}
                      //style={{backgroundColor: btncolor=='loginButton'?'#344452':'rgba 0.07, 0.13, 0.18, 1.0'}}
                    >
                      Sign In
                    </button>
                  </div>
                </div>
                {/* <Row> */}
                <Col md="12">
                  <Form.Group>
                    <Form.Label>E - mail </Form.Label>
                    <Form.Label style={{ color: "red", marginLeft: "7px" }}>
                      {" "}
                      *
                    </Form.Label>
                    <Form.Control
                      type="email"
                      className="mb-0"
                      id="exampleInputEmail3"
                      placeholder=""
                      autoComplete="off"
                      required
                      style={{width:'100%'}}
                    />
                  </Form.Group>
                </Col>
                <Col md="12">
                  <Form.Group>
                    <Form.Label>Username </Form.Label>
                    <Form.Label style={{ color: "red", marginLeft: "7px" }}>
                      {" "}
                      *
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="mb-0"
                      id="exampleInputEmail2"
                      placeholder=""
                      autoComplete="off"
                      required
                      style={{width:'100%'}}
                    />
                  </Form.Group>
                </Col>

                {/* <Col md="6">
                        <Form.Group>
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type="text"
                            className="mb-0"
                            id="exampleInputEmail4"
                            placeholder="First Name"
                            autoComplete="off"
                            required
                          />
                        </Form.Group>
                      </Col> */}
                {/* <Col md="6">
                        <Form.Group>
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            type="email"
                            className="mb-0"
                            id="exampleInputEmail5"
                            placeholder="Last Name"
                            autoComplete="off"
                            required
                          />
                        </Form.Group>
                      </Col> */}
                <Col md="12">
                  <Form.Group>
                    <Form.Label>Password </Form.Label>
                    <Form.Label style={{ color: "red", marginLeft: "7px" }}>
                      {" "}
                      *
                    </Form.Label>
                    <div className="password">
                      <Form.Control
                        type={show ? "text" : "password"}
                        className="mb-0"
                        id="exampleInputPassword6"
                        placeholder=""
                        required
                        style={{width:'100%'}}
                      />
                      <button
                        type="button"
                        className={"passwordBtn"}
                        onClick={toggleButton}
                      >
                        {show ? <AiFillEye /> : <AiFillEyeInvisible />}
                      </button>
                    </div>
                  </Form.Group>
                </Col>
                <Col md="12">
                  <Form.Group>
                    <Form.Label>Confirm Password </Form.Label>
                    <Form.Label style={{ color: "red", marginLeft: "7px" }}>
                      {" "}
                      *
                    </Form.Label>
                    <div className="password">
                      <Form.Control
                        type={show ? "text" : "password"}
                        className="mb-0"
                        id="exampleInputPassword6"
                        placeholder=""
                        required
                        style={{width:'100%'}}
                      />
                      <button
                        type="button"
                        className={"passwordBtn"}
                        onClick={toggleButton}
                      >
                        {show ? <AiFillEye /> : <AiFillEyeInvisible />}
                      </button>
                    </div>
                  </Form.Group>
                </Col>
                <Col md="12">
                  <Form.Group>
                    <Form.Label>Date of Birth </Form.Label>
                    <Form.Label style={{ color: "red", marginLeft: "7px" }}>
                      {" "}
                      *
                    </Form.Label>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Form.Control
                        type="text"
                        className="mb-0"
                        id="exampleInputPassword7"
                        placeholder="Day"
                        required
                        style={{ marginRight: "10px" }}
                      />
                      <Form.Control
                        type="text"
                        className="mb-0"
                        id="exampleInputPassword7"
                        placeholder="Month"
                        required
                        style={{ marginRight: "10px" }}
                      />
                      <Form.Control
                        type="text"
                        className="mb-0"
                        id="exampleInputPassword7"
                        placeholder="Year"
                        required
                      />
                    </div>
                  </Form.Group>
                </Col>
                {/* <Col md="12">
                  <Form.Group>
                    <Form.Label>{"Code (Optional)"}</Form.Label>
                    <Form.Control
                      type="text"
                      className="mb-0"
                      id="exampleInputEmail8"
                      placeholder=""
                      autoComplete="off"
                      required
                    />
                  </Form.Group>
                </Col> */}
                <InputGroup
                  className="mb-3"
                  style={{
                    flexWrap: "nowrap",
                    width: "fit-content",
                    height: "30px",
                    color: "#B3BAD1",
                    fontSize: "11px",
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "18px",
                    marginTop:20
                  }}
                >
                  <InputGroup.Checkbox aria-label="Checkbox for following text input"/>
                  By clicking the checkbox, you are indicating that you have
                  read and acknowledge the Terms & Conditions
                </InputGroup>

                <div className="reCaptcha-signup container text-center">
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={onChange}
                    style={{ display:'flex', justifyContent:'center'}}
                   
                  />
                </div>
                {/* </Row> */}
                {/* <div className="custom-control custom-radio mt-2">
                                    <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
                                    <label className="custom-control-label" htmlFor="customRadio1">Premium-$39 / 3 Months
                                       with a 5 day free trial</label>
                                 </div>
                                 <div className="custom-control custom-radio mt-2">
                                    <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
                                    <label className="custom-control-label" htmlFor="customRadio2"> Basic- $19 / 1 Month</label>
                                 </div>
                                 <div className="custom-control custom-radio mt-2">
                                    <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input"/>
                                    <label className="custom-control-label" htmlFor="customRadio3">Free-Free</label>
                                 </div> */}
                <br />
                <Button
                  type="button"
                  onClick={() => props.close(false)}
                  variant="btn btn-primary my-2"
                  className="btn1"
                  style={{
                    color: "black",
                    
                  }}
                >
                  Play Now
                </Button>
              </Form>
            </div>
          </div>
          {/* <div className="mt-3">
                  <div className="d-flex justify-content-center links">
                    Already have an account?{" "}
                    <Link to="/auth/sign-in" className="text-primary ml-2">
                      Sign In
                    </Link>
                  </div>
                </div> */}
          <br />
          <h6>
            <span> OR </span>
          </h6>
          <div className="cardSocialOut">
            <Card className="cardSocialIn">
              {" "}
              <img src={FB} className="socialImage-f" />
            </Card>
            <Card className="cardSocialIn">
              <img src={Google} className="socialImage" />
            </Card>
            <Card className="cardSocialIn">
              {" "}
              <img src={Line} className="socialImage" />
            </Card>
            <Card className="cardSocialIn">
              {" "}
              <img src={Chat} className="socialImage" />
            </Card>
          </div>
          <p className="privacyPolicy">
            This site is protected by hCaptcha and the hCaptcha Privacy Policy
            and Terms of Service apply.
          </p>
        </div>
        {/* </Col>
            </Row>
          </Container>
        </section> */}
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
