import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button, Form, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
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

const SignIn = (props) => {
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

  const [btncolor, setBtncolor] = useState("loginButton");

  const registerHandler = (color) => {
    props.showModal(true);
    setBtncolor(color);
  };
  const loginHandler = (color) => {
    props.showModal(false);
    setBtncolor(color);
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
              <Col lg="5" md="12" className="align-self-center"> */}
        <div className="sign-user_card">
          <button
            type="button"
            class="close"
            aria-label="Close"
            style={{ color: "white", position: "relative", top: -15, left: 3 }}
            onClick={() => {
              console.log("Hellow!");
              props.close(false);
            }}
          >
            <span aria-hidden="true" style={{ fontSize: 33, fontWeight: 1 }}>
              &times;
            </span>
          </button>
          <div className="sign-in-page-data">
            <div className="sign-in-from w-100 m-auto">
              <Form className="mt-2" action="">
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
                      class="btn btn-secondary registerToggle"
                      onClick={() => {
                        registerHandler("registerButton");
                      }}
                      //style={{borderColor: btncolor=='registerButton'?'#344452':'rgba 0.07, 0.13, 0.18, 1.0' }}
                    >
                      Register
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary registerToggle selected text-center"
                      onClick={() => {
                        loginHandler("loginButton");
                      }}
                      // style={{backgroundColor: btncolor=='loginButton'?'#344452':'rgba 0.07, 0.13, 0.18, 1.0'}}
                    >
                      Sign In
                    </button>
                  </div>
                </div>
                <Form.Group>
                  <Form.Label></Form.Label>
                
                  <Form.Control
                    type="email"
                    className="mb-0"
                    id="exampleInputEmail1"
                    placeholder=""
                    autoComplete="off"
                    required
                    style={{ width: "100%" }}
                  />
                </Form.Group>
                <Form.Group>
             
                  <div className="password">
                    <Form.Control
                      type={show ? "text" : "password"}
                      className="mb-0"
                      id="exampleInputPassword2"
                      placeholder=""
                      required
                      style={{ width: "100%" }}
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

                <div className="reCaptcha container">
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={onChange}
                    style={{ display: "flex", justifyContent: "center" }}
                  />
                </div>

                <br />
                <div className="sign-info">
                  <Button
                    type="button"
                    onClick={() => props.close(false)}
                    variant="btn btn-primary"
                    style={{
                      color: "black",
                    }}
                    className="btn1"
                  >
                    Sign In
                  </Button>
                  {/* <div className="custom-control custom-checkbox d-inline-block">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck"
                          >
                            Remember Me
                          </label>
                        </div> */}
                </div>
              </Form>
            </div>
            {/* <div className="mt-3">
                  <div className="d-flex justify-content-center links">
                    Don't have an account?{" "}
                    <Link to="/auth/sign-up" className="text-primary ml-2">
                      Sign Up
                    </Link>
                  </div>
                  <div className="d-flex justify-content-center links">
                    <Link to="/auth/pages-recoverpw" className="f-link">
                      Forgot your password?
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
            <br />
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Forgot Password
            </p>
            <p className="privacyPolicy" style={{ color: "#B3BAD1" }}>
              This site is protected by reCaptcha and the reCaptcha Privacy
              Policy and Terms of Service apply.
            </p>
          </div>
        </div>
        {/* </Col>
            </Row>
          </Container>
        </section> */}
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
