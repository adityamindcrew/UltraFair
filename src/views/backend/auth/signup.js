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
      
      <div className="sign-in-page">
       
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
                    
                    >
                      Register
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary registerToggle"
                     
                      onClick={()=>{loginHandler('loginButton')}}
                   
                    >
                      Sign In
                    </button>
                  </div>
                </div>
                
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
            This site is protected by reCaptcha and the reCaptcha Privacy Policy
            and Terms of Service apply.
          </p>
        </div>

      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
