//img
import logo from "../../../../../src/assets/images/sidebar/UltrafairLogo.png";
import smallLogo from "../../../../assets/images/sidebar/UltrafairSmallLogo.png";
import React, { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Navbar, Button, Form, Nav, Dropdown } from "react-bootstrap";
import { BitcoinsSVG, EtheremcoinsSVG, TetherSVG, UsdcoinSVG, PlusSVG, WalletSVG, ProfileMenuSVG, Transactions, Logout } from "../headerstyle/headerIcons";
import { DownArrow } from "../../../../views/backend/main/dashboardIcons";
//Modal
import Modal from "react-bootstrap/Modal";
import Signup from "../../../../views/backend/auth/signup";
import Signin from "../../../../views/backend/auth/signin";

//  Img

import { CopySVG, NotificationSVG, ProfileSVG } from './headerIcons';

const HeaderStyle1 = (props) => {
  const [signUpModalShow, setSignUpModalShow] = React.useState(false);
  const [loginModalShow, setLoginModalShow] = React.useState(false);
  const [navShow, setNavShow] = React.useState(false);
  const [profileMenu, setProfileMenu] = React.useState(false);
  // var profileMenu = false;
  const location = useLocation();

  useEffect(() => {
    document.addEventListener("click", setClicked, true);
    return () => {
      document.removeEventListener("click", setClicked, true);
    };
  }, []);

  useEffect(() => {
    const pathName = location.pathname;
    console.log("location.pathname", pathName);
    if (pathName == '/edit-user-profile-section' || pathName == '/user-profile-section' || pathName == '/lockup' || pathName == '/roulette') {
      setNavShow(false)
    } else {
      setNavShow(true)
    }
  }, [location.pathname]);
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
        style={{ justifyContent: "center" }}
      >
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body style={{ padding: "0px" }}>
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
        style={{ justifyContent: "center", }}
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

  const setClicked = () => {
    setProfileMenu(false);
  };

  const profileClickHandler = () => {
    // alert("called");
    setProfileMenu(!profileMenu);
  };

  return (
    <>
      <div className="iq-top-navbar p-2" >
        <div className="iq-navbar-custom" >
          {navShow ? <Navbar className="" expand="sm">
            <div className="iq-menu-bt d-flex align-items-center">
              <div className="wrapper-menu" onClick={minisidbar}>
                <div className="main-circle meunview">
                  <i className="las la-bars"></i>
                </div>
              </div>
              <div className="iq-navbar-logo d-flex justify-content-between">
                <Link to="/" className="header-logo">
                  <img
                    src={logo}
                    className="logoImg fullLogo img-fluid1 rounded-normal"
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
                  style={{ backgroundColor: '#11ffbd', color: 'black', textAlign: 'center', paddingTop: 5, paddingRight: 20, paddingLeft: 20, borderRadius: 7, marginTop: 1, fontWeight: 'bold', fontSize: 15 }}
                >
                  Register
                </span>
              </Nav>
            </div>



          </Navbar>
            :
            <Navbar className="" expand="sm">
              <div className="iq-menu-bt d-flex align-items-center">
                <div className="wrapper-menu" onClick={minisidbar}>
                  <div className="main-circle meunview">
                    <i className="las la-bars"></i>
                  </div>
                </div>
               
                <img src={smallLogo} className="img-view" />
              </div>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="dropdown-navbar">
                  &nbsp;  0.0000000&nbsp; <span ><BitcoinsSVG /></span>  &nbsp;&nbsp; <DownArrow />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">1.44500000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span ><BitcoinsSVG /></span>&nbsp;&nbsp;  BTC</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">23.6670000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span ><EtheremcoinsSVG /></span>&nbsp;&nbsp;  ETH</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">50.6654000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span ><UsdcoinSVG /></span>&nbsp;&nbsp;  USDC</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">23.66500000&nbsp;&nbsp;&nbsp;&nbsp; <span><TetherSVG /></span>&nbsp;&nbsp;  USDT</Dropdown.Item>
                  <hr className='dropdown-line-style' />
                  <div className="addcurrenies"><PlusSVG /> <span>Add Currencies</span></div>

                </Dropdown.Menu>
              </Dropdown>
              <div className="dropdown-wallet-1 img-view"><WalletSVG /></div>
              <div className="dropdown-wallet-1 text-view">Wallet</div>
              <div className="iq-search-bar ml-auto">

              </div>
              <div className=" mt-2">
                <Nav as="ul" className=" navbar-list iq-header">

                  <div className="d-flex">
                    <div className="d-flex">
                      <div class="vl hide-data"></div>
                    </div>

                    <div className="mr-4 d-flex">
                      <div className="mr-4 d-flex dropdown">
                        <button
                          style={{
                            backgroundColor: "transparent",
                            border: profileMenu ? "2px solid #11FFBD" : "none",
                            borderRadius: profileMenu ? "6px" : "none",
                          }}
                          onClick={profileClickHandler}
                          id="dropdown-basic"
                        // className="dropdown-navbar"
                        >
                          <ProfileSVG />
                        </button>
                      </div>
                      {profileMenu && (
                        // <div className="dropdown">
                        <div className="dropdown-content">
                          <Link to="/user-profile-section">
                            <div className="profileMenu-item ">
                              <ProfileMenuSVG width={"18px"} height={"18px"} />{" "}
                              <div className="profileMenu-list">My Profile</div>
                            </div>
                          </Link>
                          <Link to="#">
                            <div className="profileMenu-item ">
                              <Transactions
                                width={"18px"}
                                height={"18px"}
                                style={{ marginRight: "10px" }}
                              />
                              <div className="profileMenu-list">Transactions</div>
                            </div>
                          </Link>
                          <Link to="#">
                            <div className="profileMenu-item ">
                              <Logout
                                width={"18px"}
                                height={"18px"}
                                style={{ marginRight: "10px" }}
                              />
                              <div className="profileMenu-list">Logout</div>
                            </div>
                          </Link>
                        </div>
                        // </div>
                      )}
                    </div>
                    <div className="mr-4 mt-2 hide-data">
                      <NotificationSVG />
                    </div>
                  </div>
                </Nav>
              </div>
            </Navbar>}
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
