//img
import logo from "../../../../../src/assets/images/sidebar/UltrafairLogo.png";
import smallLogo from "../../../../assets/images/sidebar/UltrafairSmallLogo.png";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Button, Form, Nav, Dropdown } from "react-bootstrap";

//Modal
import Modal from "react-bootstrap/Modal";
import Signup from "../../../../views/backend/auth/signup";
import Signin from "../../../../views/backend/auth/signin";


const HeaderStyle1 = (props) => {
  const [signUpModalShow, setSignUpModalShow] = React.useState(false);
  const [loginModalShow, setLoginModalShow] = React.useState(false);
  const minisidbar = () => {
    document.body.classList.toggle("sidebar-main");
  };
  function SignUpModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="registerModal "
        style={{ justifyContent: "center"}}
      >
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body style={{ padding: "0px"  }}>
          <Signup showModal={loginCallback} close={CloseButton} />
        </Modal.Body>
      </Modal>
    );
  }
  function LoginModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ justifyContent: "center",}}
        className="signinModal"
      >
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body style={{ padding: "0px" }}>
          <Signin showModal={signUpCallback} close={CloseButton} />
        </Modal.Body>
      </Modal>
    );
  }

  let history = useHistory();

  const CloseButton = () => {
    setLoginModalShow(false);
    setSignUpModalShow(false);
  };

  const loginCallback = (d) => {
    console.log("fun called", d);
    setLoginModalShow(d);
    setSignUpModalShow(!d);
  };
  const signUpCallback = (l) => {
    console.log("func signup", l);
    setSignUpModalShow(l);
    setLoginModalShow(!l);
  };
  const registerHandler2 = () => {
    setSignUpModalShow(true);
  };
 
  const loginHandler = () => {
    setLoginModalShow(true);
  };
  return (
    <>
      <div className="iq-top-navbar p-2" >
        <div className="iq-navbar-custom" >
          <Navbar className="" expand="sm">
            <div className="iq-menu-bt d-flex align-items-center">
              <div className="wrapper-menu" onClick={minisidbar}>
                <div className="main-circle meunview">
                  <i className="las la-bars"></i>
                </div>
              </div>
              <div className="iq-navbar-logo d-flex justify-content-between">
                <Link to="#" className="header-logo">
                  <img
                    src={logo}
                    className="logoImg fullLogo img-fluid rounded-normal"
                    alt=""
                  />
                  {/* <div className="logo-title">
                                        <span className="text-primary text-uppercase">Ultrafair</span>
                                    </div> */}
                  <img
                    src={logo}
                    className="logoImg collapsedLogo img-fluid rounded-normal"
                    alt=""
                  />
                  {/* <div className="logo-title">
                                        <span className="text-primary text-uppercase">Ultrafair</span>
                                    </div> */}
                </Link>
              </div>
            </div>
            <div className="iq-search-bar ml-auto">
              {/* <Form action="#" className="searchbox">
                        <input type="text" className="text search-input" placeholder="Search Here..."/>
                        <Link className="search-link" to="#"><i className="ri-search-line"></i></Link>
                    </Form> */}
            </div>
            <div className="navbar-list-hide mt-2">
              <Nav as="ul" className=" navbar-list iq-header">
                {/* {/ <div className='navItem'> </div> /} */}
                <Link className="navItem-hide" to="#" onClick={loginHandler}>
                  Sign In
                </Link>
                <span
                  className="navItem btnNavbar"
                  type="button"
                  variant=" btn-primary"
                  onClick={registerHandler2}
                  style={{backgroundColor:'#11ffbd', color: 'black', textAlign:'center', paddingTop:5,paddingRight: 20,paddingLeft: 20, borderRadius:7, marginTop:1, fontWeight:'bold', fontSize:15}}
                >
                  Register
                </span>
              </Nav>
            </div>

           
          
          </Navbar>
        </div>
      </div>
      <SignUpModal
        show={signUpModalShow}
        onHide={() => setSignUpModalShow(false)}
      />
      <LoginModal
        show={loginModalShow}
        onHide={() => setLoginModalShow(false)}
      />
    </>
  );
};
export default HeaderStyle1;
