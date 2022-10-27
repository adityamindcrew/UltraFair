import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import Customheader from "../../../components/Customheader";
import Select from "react-select";
const LineAwsome = () => {
  const [btn, setbtn] = useState("btn1");
  const [selectedCategory, setSelectedCategory] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container
        fluid
        style={{
          display: show ? "flex" : "",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Customheader title="Lockup" SVG={SVG} wid="15%" mt="8px" />
        <div
          className="MainContainer"
          style={{
            opacity: show ? 0.2 : 1,
          }}
        >
          <div className="Contin MINWIDTH">
            <div>
              <CutomBtn name="btn1" title="Lockup" setbtn={setbtn} btn={btn} />
              <CutomBtn name="btn2" title="Boost" setbtn={setbtn} btn={btn} />
              <CutomBtn name="btn3" title="Claim" setbtn={setbtn} btn={btn} />
            </div>

            {btn == "btn1" ? (
              <div className="Colmn">
                <div className="CARDTITLE BGR">
                  <div className="CENTERIT">
                    <span className="MR10 SAF"> {ICON}</span>
                    {ICON1}{" "}
                  </div>
                  <div className="questionmark">
                    <i
                      class="ri-question-line"
                      style={{ color: "black", fontSize: "22px" }}
                    ></i>{" "}
                  </div>
                </div>
                <div className="CARDTITLE Bckg FLEXWRAP">
                  <div className="DoCol">
                    <span className="smallfont">Your Loked Assets</span>
                    <span className="largefont">6.22</span>
                  </div>
                  <div className="DoCol">
                    <span className="smallfont">%Of Total Locked</span>
                    <span className="largefont">0%</span>
                  </div>
                  <div className="DoCol FLX1">
                    <span className="smallfont">Boost Levels</span>
                    <span className="largefont">0%</span>
                  </div>
                  <div className="DoCol FLX1">
                    <span className="smallfont">Loked APR</span>
                    <span className="largefont">0%</span>
                  </div>
                </div>
                <div className="JUSTFLY SLIDER">
                  <span className="prog_font whit">
                    LOCK FOR PERIOD OF (WEEKS)
                  </span>
                  <span className="prog_font GRN ALIG">1 WEEK = 1% BOOST</span>
                </div>
                <div className="Green">
                  <input
                    type="range"
                    class="form-range Fire Green"
                    id="customRange1"
                  ></input>{" "}
                </div>
                <div className="JUSTFLY">
                 
                <div className="Flex1">  <span className="GREY">1</span>
                  <span className="GREY smallline">|</span>
                  <span className="GREY smallline">|</span>
                  {/* <span className="GREY smallline">|</span> */}
                  <span className="GREY smallline">|</span>
                  <span className="GREY">16</span>
                  <span className="GREY smallline">|</span>
                  {/* <span className="GREY smallline">|</span> */}
                  <span className="GREY smallline">|</span>
                  <span className="GREY smallline">|</span>
                  <span className="GREY">32</span>

                  {/* <span className="GREY smallline">|</span> */}
                  <span className="GREY smallline">|</span>
                  <span className="GREY smallline">|</span>
                  <span className="GREY smallline">|</span>
                  <span className="GREY">48</span>

                  <span className="GREY smallline">|</span>
                  {/* </div>
                 <div className="Flex1">  */}
                 {/* <span className="GREY smallline">|</span> */}
                  <span className="GREY smallline">|</span>
                  <span className="GREY smallline">|</span>
                  <span className="GREY">64</span>

                  <span className="GREY smallline">|</span>
                  <span className="GREY smallline">|</span>
                  <span className="GREY smallline">|</span>

                  <span className="GREY">84</span>
                  {/* <span className="GREY smallline">|</span> */}

                 <span className="GREY smallline">|</span>
                  <span className="GREY smallline">|</span>
                  <span className="GREY smallline">|</span>
                  <span className="GREY">100</span> </div>
                </div>
                <div>
                  <span className="GRN">
                    *You will have to stake first before you can lockup.
                  </span>
                </div>

                <div>
                  <div className="JUSTFLY MR0a10">
                    <span className="prog_font whit">LOCK</span>
                    <span>
                      {" "}
                      <span className="GRN w100">BALANCE </span>{" "}
                      <span className="prog_font GRN wbold">6.22</span>
                    </span>
                  </div>
                  <input type="text" className="INPUt" placeholder="$ 0.00" />
                  <button className="CARDBTN" onClick={() => setShow(true)}>
                    Lock
                  </button>
                </div>
                <div>
                  <div className="JUSTFLY MR0a10">
                    <span className="prog_font whit">UNLOCK</span>
                    <span>
                      {" "}
                      <span className="GRN w100">BALANCE </span>{" "}
                      <span className="prog_font GRN wbold">6.22</span>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="INPUt "
                    placeholderTextColor="#fff"
                    placeholder="$ 0.00"
                  />
                  <button className="CARDBTN" onClick={() => setShow(true)}>
                    Unlock
                  </button>
                </div>
              </div>
            ) : btn == "btn2" ? (
              <div>
                <div className="Colmn">
                  <div className="CARDTITLE BGR1">
                    <div className="CENTERIT">
                      <span className="MR10"> {ICON}</span>
                      {SearchiconBoost}{" "}
                    </div>
                    <div className="questionmark">
                      <i
                        class="ri-question-line"
                        style={{ color: "black", fontSize: "22px" }}
                      ></i>{" "}
                    </div>
                  </div>
                  <div className="CARDTITLE Bckg Flexstart">
                    <div className="DoCol">
                      <span className="smallfont">XBE Balance</span>
                      <span className="largefont">6.22</span>
                    </div>
                    <div className="DoCol">
                      <span className="smallfont">My XBE Locked</span>
                      <span className="largefont">0%</span>
                    </div>
                  </div>
                  <span className="prog_font whit EXPD">
                    Your Current Boost
                  </span>
                  <div className="CARDTITLE Bckg  ">
                    <div className="Blue fullwidth">
                      <input
                        type="range"
                        class="form-range fullwidth Fire"
                        id="customRange1"
                        background="orange"
                      ></input>{" "}
                    </div>
                  </div>

                  <div className="CARDTITLE BGR1">
                    <div className="CENTERIT">
                      {ICONCARD}
                      {ICON3}{" "}
                    </div>
                    <div className="questionmark">
                      <i
                        class="ri-question-line"
                        style={{ color: "black", fontSize: "22px" }}
                      ></i>{" "}
                    </div>
                  </div>
                  <div className="JUSTFLY SLIDER">
                    <span className="prog_font whit">
                      LOCK FOR PERIOD OF (WEEKS)
                    </span>
                    <span className="prog_font BLU ALIG">
                      1 WEEK = 1% BOOST
                    </span>
                  </div>
                  <div className="Blue">
                    {" "}
                    <input
                      type="range"
                      class="form-range Fire Blue"
                      id="customRange1"
                    ></input>{" "}
                  </div>
                  <div className="JUSTFLY">
                 <div className="Flex1">  <span className="GREY">1</span>
                  <span className="GREY smallline">|</span>
                  <span className="GREY smallline">|</span>
                  {/* <span className="GREY smallline">|</span> */}
                  <span className="GREY smallline">|</span>
                  <span className="GREY">16</span>
                  <span className="GREY smallline">|</span>
                  {/* <span className="GREY smallline">|</span> */}
                  <span className="GREY smallline">|</span>
                  <span className="GREY smallline">|</span>
                  <span className="GREY">32</span>

                  {/* <span className="GREY smallline">|</span> */}
                  <span className="GREY smallline">|</span>
                  <span className="GREY smallline">|</span>
                  <span className="GREY smallline">|</span>
                  <span className="GREY">48</span>

                  <span className="GREY smallline">|</span>
                  {/* </div>
                 <div className="Flex1">  */}
                 {/* <span className="GREY smallline">|</span> */}
                  <span className="GREY smallline">|</span>
                  <span className="GREY smallline">|</span>
                  <span className="GREY">64</span>

                  <span className="GREY smallline">|</span>
                  <span className="GREY smallline">|</span>
                  <span className="GREY smallline">|</span>

                  <span className="GREY">84</span>
                  {/* <span className="GREY smallline">|</span> */}

                 <span className="GREY smallline">|</span>
                  <span className="GREY smallline">|</span>
                  <span className="GREY smallline">|</span>
                  <span className="GREY">100</span> </div>
                  </div>
                  <div className="Colmn">
                    <span className="BLU">
                      The boost levels shown are for lockup only. Please note
                      that staking while
                    </span>
                    <span className="BLU">
                      having XBE locked will reduce your boost.
                    </span>
                  </div>

                  <div>
                    <button
                      className="CARDBTN BGBLU"
                      onClick={() => setShow(true)}
                    >
                      Add to Boost
                    </button>
                  </div>
                  <div>
                    <div className="JUSTFLY MR0a10">
                      <span className="prog_font whit">LOCKUP</span>
                      <span>
                        {" "}
                        <span className="BLU w100">BALANCE </span>{" "}
                        <span className="prog_font BLU wbold">6.22</span>
                      </span>
                    </div>
                    <input type="text" className="INPUt" placeholder="$ 0.00" />
                    <button
                      className="CARDBTN BGBLU"
                      onClick={() => setShow(true)}
                    >
                      Add to Lockup
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="Colmn">
                  <div className="CARDTITLE BGCOLPINK">
                    <div className="CENTERIT">
                      <span className="MR10"> {ICON}</span>
                      {ICON4}{" "}
                    </div>
                    <div className="questionmark">
                      <i
                        class="ri-question-line"
                        style={{ color: "black", fontSize: "22px" }}
                      ></i>{" "}
                    </div>
                  </div>
                  <div className="CARDTITLE BGGrey Flexstart Colmn">
                    <div className="Alignstart JUSTFLY">
                      <span className="MR10">{ICONWhite}</span>
                      <h4>Protocol Profits</h4>
                    </div>

                    <div className="JUSTFLY Alignstart">
                      <div className="DoCol">
                        <span className="smallfont">Total Weekly Profits</span>
                        <span className="largefont">6.22</span>
                      </div>
                      <div className="DoCol">
                        <span className="smallfont">My Individual Profits</span>
                        <span className="largefont">0%</span>
                      </div>{" "}
                    </div>

                    <div className="Colmn fullwidth">
                      <div className="JUSTFLY EXMR">
                        <span className="smolltext">ASSET</span>
                        <span className="smolltext">AMOUNT</span>
                        <span className="smolltext">VALUE</span>
                      </div>
                      <div className="JUSTFLY ">
                        <span
                          className="notsmollfont Tableresp"
                          style={{
                            display: "flex",
                            flex: 1,
                            alignItems: "center",
                          }}
                        >
                          <span style={{ padding: 8 }} className="CARDTEXTS">
                            {CARDICON1}
                          </span>
                          <span>USDC Earned</span>
                        </span>
                        <span
                          className="notsmollfont"
                          style={{ display: "flex", flex: 1 }}
                        >
                          0.00
                        </span>
                        <span className="notsmollfont">$0.00</span>
                      </div>
                      <div className="JUSTFLY ">
                        <span
                          className="notsmollfont Tableresp"
                          style={{
                            display: "flex",
                            flex: 1,
                            alignItems: "center",
                          }}
                        >
                          <span style={{ padding: 8 }} className="CARDTEXTS">
                            {CARDICON2}
                          </span>
                          <span>USDT Earned</span>
                        </span>
                        <span
                          className="notsmollfont"
                          style={{ display: "flex", flex: 1 }}
                        >
                          0.00
                        </span>
                        <span className="notsmollfont">$0.00</span>
                      </div>
                      <div className="JUSTFLY ">
                        <span
                          className="notsmollfont Tableresp"
                          style={{
                            display: "flex",
                            flex: 1,
                            alignItems: "center",
                          }}
                        >
                          <span style={{ padding: 8 }} className="CARDTEXTS">
                            {CARDICON3}
                          </span>
                          <span>ETH Earned</span>
                        </span>
                        <span
                          className="notsmollfont"
                          style={{ display: "flex", flex: 1 }}
                        >
                          0.00
                        </span>
                        <span className="notsmollfont">$0.00</span>
                      </div>
                    </div>

                    <button
                      className="CARDBTN BGPINK BTNRESP"
                      onClick={() => setShow(true)}
                    >
                      Claim Rewards
                    </button>
                    {/* <span className='Grey'>levels s shown are for lockup only. Please note that staking while</span> */}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="FooterCont MINWIDTH REPOS">
            <div className="Selected ENDD">
              <Select
                defaultValue={selectedCategory}
                styles={customStyles}
                // onChange={(e) => {
                //   changeCategoryHandler(e);
                // }}
                options={categoryGroup}
                closeMenuOnSelect={true}
                menuPortalTarget={document.body}
                placeholder={"EXPAND"}
                onClick={(e) => {
                  e.preventDefault();
                }}
                theme={
                  {
                    //   borderRadius: "20px !important",
                  }
                }
              />
            </div>
            <div className="JUSTFLY EVENLY Extrawidth">
              <span className="progfont">{Searchicon}</span>
              <span
                className="GRN Footerfont "
                style={{ fontSize: "21px", color: "white" }}
              >
                ADDITIONAL INFORMATION
              </span>
            </div>
          </div>
        </div>

        {show ? (
          <div className="CENTERTHAT Colmn">
            <span className="Fontpopup">
              Register an account or Log <br /> In to use this feature.
            </span>
            <button className="POPUPBTN" onClick={() => setShow(false)}>
              Register
            </button>
            <button className="SingBTN" onClick={() => setShow(false)}>
              Sign in
            </button>
          </div>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default LineAwsome;

const CutomBtn = ({ title, name, setbtn, btn }) => {
  return (
    <button
      style={{
        background: "#263642",
        border: "1px solid #263642",
        color: "white",
        fontSize: "16px",
        fontWeight: btn == name ? 700 : 300,
      }}
      onClick={() => setbtn(name)}
    >
      {title}
    </button>
  );
};
const SVG = (
  <svg
    className="HEDerLOGO"
    width="35"
    height="21"
    viewBox="0 0 35 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.66134 0.838613C3.82854 1.19855 -0.64507 6.58191 0.517993 12.7169C1.26008 16.6335 4.41892 19.7937 8.3369 20.5358C13.6639 21.5457 18.4152 18.3034 19.8126 13.6138H25.9211V15.0354C25.9211 16.6063 27.1935 17.8786 28.7644 17.8786C30.3353 17.8786 31.6076 16.6063 31.6076 15.0354V13.6138C33.1785 13.6138 34.4508 12.3414 34.4508 10.7705C34.4508 9.19963 33.1785 7.92728 31.6076 7.92728H19.807C18.7838 4.43472 15.8411 1.68923 12.2297 1.00521C11.3534 0.839057 10.4946 0.787193 9.66134 0.838613ZM10.2833 6.50566C12.6389 6.50566 14.5482 8.41489 14.5482 10.7705C14.5482 13.1261 12.6389 15.0354 10.2833 15.0354C7.92768 15.0354 6.01844 13.1261 6.01844 10.7705C6.01844 8.41489 7.92768 6.50566 10.2833 6.50566Z"
      fill="#B4E1FF"
    />
  </svg>
);
const customStyles = {
  container: (provided, state) => ({
    ...provided,
    borderRadius: "10px !important",
    //   backgroundColor: "#344452",
  }),
  control: (provided, state, base) => ({
    ...provided,
    ...base,
    backgroundColor: "#344452",
    border: 0,
    boxShadow: "none",
    minHeight: "100%",
    height: "100%",
    borderRadius: "10px !important",
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#ffff",
    };
  },
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  dropdownIndicator: (base) => ({
    ...base,
    backgroundColor: "transparent",
  }),
};

const categoryGroup = [
  {
    // label: "Please select the category",
    options: [
      // { label: "Select", value: undefined },
      { label: "Option1", value: "ABC" },
      { label: "Option2", value: "XYZ" },
    ],
  },
];
const CARDICON1 = (
  <svg
    // className="UltrafairTextIcon"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 40C31.0834 40 40 31.0834 40 20C40 8.9166 31.0834 0 20 0C8.9166 0 0 8.9166 0 20C0 31.0834 8.9166 40 20 40Z"
      fill="#396FF1"
    />
    <path
      d="M25.4999 23.1665C25.4999 20.2499 23.7499 19.2499 20.2499 18.8333C17.7499 18.4999 17.2499 17.8333 17.2499 16.6665C17.2499 15.4997 18.0833 14.7499 19.7499 14.7499C21.2499 14.7499 22.0833 15.2499 22.4999 16.4999C22.5833 16.7499 22.8333 16.9165 23.0833 16.9165H24.4165C24.7499 16.9165 24.9999 16.6665 24.9999 16.3333V16.2499C24.6665 14.4165 23.1665 12.9999 21.2499 12.8333V10.8333C21.2499 10.4999 20.9999 10.2499 20.5833 10.1665H19.3333C18.9999 10.1665 18.7499 10.4165 18.6665 10.8333V12.7499C16.1665 13.0833 14.5833 14.7499 14.5833 16.8333C14.5833 19.5833 16.2499 20.6665 19.7499 21.0833C22.0833 21.4999 22.8333 21.9999 22.8333 23.3333C22.8333 24.6667 21.6665 25.5833 20.0833 25.5833C17.9165 25.5833 17.1665 24.6665 16.9165 23.4165C16.8333 23.0833 16.5833 22.9165 16.3333 22.9165H14.9165C14.5833 22.9165 14.3333 23.1665 14.3333 23.4999V23.5833C14.6665 25.6665 15.9999 27.1665 18.7499 27.5833V29.5833C18.7499 29.9165 18.9999 30.1665 19.4165 30.2499H20.6665C20.9999 30.2499 21.2499 29.9999 21.3333 29.5833V27.5833C23.8333 27.1665 25.4999 25.4165 25.4999 23.1665V23.1665Z"
      fill="white"
    />
    <path
      d="M15.7499 31.9167C9.24991 29.5835 5.91652 22.3335 8.33332 15.9167C9.58331 12.4167 12.3333 9.7501 15.7499 8.5001C16.0833 8.3335 16.2499 8.0835 16.2499 7.6667V6.5001C16.2499 6.1667 16.0833 5.9167 15.7499 5.8335C15.6665 5.8335 15.4999 5.8335 15.4165 5.9167C7.49992 8.4167 3.16652 16.8335 5.66652 24.7501C7.16651 29.4167 10.7499 33.0001 15.4165 34.5001C15.7499 34.6667 16.0833 34.5001 16.1665 34.1667C16.2499 34.0835 16.2499 34.0001 16.2499 33.8335V32.6667C16.2499 32.4167 15.9999 32.0835 15.7499 31.9167ZM24.5833 5.9167C24.2499 5.7501 23.9165 5.9167 23.8333 6.2501C23.7499 6.3335 23.7499 6.4167 23.7499 6.5835V7.7501C23.7499 8.0835 23.9999 8.4167 24.2499 8.5835C30.7499 10.9167 34.0833 18.1667 31.6665 24.5835C30.4165 28.0835 27.6665 30.7501 24.2499 32.0001C23.9165 32.1667 23.7499 32.4167 23.7499 32.8335V34.0001C23.7499 34.3335 23.9165 34.5835 24.2499 34.6667C24.3333 34.6667 24.4999 34.6667 24.5833 34.5835C32.4999 32.0835 36.8333 23.6667 34.3333 15.7501C32.8333 11.0001 29.1665 7.4167 24.5833 5.9167V5.9167Z"
      fill="white"
    />
  </svg>
);

const CARDICON2 = (
  <svg
    // className="UltrafairTextIcon"
    width="40"
    height="36"
    viewBox="0 0 40 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.32437 0.772948L0.0309614 16.0928C0.00320788 16.1497 -0.00558703 16.2141 0.00586283 16.2764C0.0173127 16.3388 0.0484066 16.3958 0.0945975 16.4392L19.7923 35.3144C19.8483 35.3681 19.9228 35.398 20.0003 35.398C20.0778 35.398 20.1524 35.3681 20.2083 35.3144L39.9061 16.4404C39.9522 16.397 39.9833 16.34 39.9948 16.2776C40.0062 16.2153 39.9974 16.1509 39.9697 16.0939L32.6763 0.774127C32.6527 0.722676 32.6149 0.679091 32.5672 0.648581C32.5196 0.61807 32.4642 0.601925 32.4076 0.602074H7.59541C7.53856 0.601366 7.48272 0.617123 7.43463 0.647443C7.38653 0.677763 7.34824 0.721351 7.32437 0.772948V0.772948V0.772948Z"
      fill="#50AF95"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22.5304 17.6658C22.389 17.6764 21.6583 17.72 20.0285 17.72C18.7323 17.72 17.8119 17.6811 17.489 17.6658C12.4794 17.4454 8.7402 16.5734 8.7402 15.5293C8.7402 14.4852 12.4794 13.6143 17.489 13.3904V16.7973C17.8166 16.8208 18.7546 16.8762 20.0509 16.8762C21.6065 16.8762 22.3854 16.8114 22.5257 16.7985V13.3927C27.5246 13.6155 31.2556 14.4875 31.2556 15.5293C31.2556 16.571 27.5258 17.4431 22.5257 17.6646L22.5304 17.6658ZM22.5304 13.0404V9.99175H29.5068V5.34277H10.5126V9.99175H17.4878V13.0392C11.8183 13.2996 7.55469 14.4227 7.55469 15.7685C7.55469 17.1143 11.8183 18.2362 17.4878 18.4978V28.2671H22.5292V18.4942C28.1857 18.2338 32.4423 17.1119 32.4423 15.7673C32.4423 14.4227 28.1893 13.3008 22.5292 13.0392L22.5304 13.0404Z"
      fill="white"
    />
  </svg>
);

const CARDICON3 = (
  <svg
    //  className="UltrafairTextIcon"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
      fill="#627EEA"
    />
    <path
      d="M20.6221 5V16.0875L29.9933 20.275L20.6221 5Z"
      fill="white"
      fill-opacity="0.602"
    />
    <path d="M20.6225 5L11.25 20.275L20.6225 16.0875V5Z" fill="white" />
    <path
      d="M20.6221 27.46V34.9938L29.9996 22.02L20.6221 27.46Z"
      fill="white"
      fill-opacity="0.602"
    />
    <path
      d="M20.6225 34.9938V27.4588L11.25 22.02L20.6225 34.9938Z"
      fill="white"
    />
    <path
      d="M20.6221 25.7161L29.9933 20.2748L20.6221 16.0898V25.7161Z"
      fill="white"
      fill-opacity="0.2"
    />
    <path
      d="M11.25 20.2748L20.6225 25.7161V16.0898L11.25 20.2748Z"
      fill="white"
      fill-opacity="0.602"
    />
  </svg>
);

const ICONWhite = (
  <svg
    width="17"
    height="36"
    viewBox="0 0 17 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.02302 0H7.89323L4.31238 7.5217L8.62472 16.5753H16.92L9.02302 0Z"
      fill="white"
    />
    <path
      d="M0 16.5753H6.01277L3.00638 10.2638L0 16.5753Z"
      fill="url(#paint0_linear_465_1134)"
    />
    <path
      d="M7.89319 35.7472H9.02298L12.6077 28.2255L8.29532 19.1681H0L7.89319 35.7472Z"
      fill="white"
    />
    <path
      d="M16.92 19.1681H10.9072L13.9136 25.4834L16.92 19.1681Z"
      fill="url(#paint1_linear_465_1134)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_465_1134"
        x1="-2.49212"
        y1="18.5385"
        x2="7.32811"
        y2="11.3596"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#00ABE7" />
        <stop offset="0.3324" stop-color="#0FB599" />
        <stop offset="0.7179" stop-color="#81C14B" />
        <stop offset="1" stop-color="#8AC33D" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_465_1134"
        x1="16.3398"
        y1="20.2555"
        x2="11.3281"
        y2="22.8968"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#9A0000" />
        <stop offset="1" stop-color="#FF0000" />
      </linearGradient>
    </defs>
  </svg>
);
const ICON = (
  <svg
    className="UltrafairLogo"
    width="28"
    height="60"
    viewBox="0 0 28 60"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.9321 0H13.0625L7.13672 12.4473L14.273 27.4296H28.0005L14.9321 0Z"
      fill="#13212D"
    />
    <path
      d="M0 27.4299H9.9502L4.9751 16.9854L0 27.4299Z"
      fill="url(#paint0_linear_466_1031)"
    />
    <path
      d="M13.062 59.1562H14.9316L20.8637 46.7089L13.7275 31.7202H0L13.062 59.1562Z"
      fill="#13212D"
    />
    <path
      d="M28 31.7202H18.0498L23.0249 42.1711L28 31.7202Z"
      fill="url(#paint1_linear_466_1031)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_466_1031"
        x1="-4.12407"
        y1="30.6787"
        x2="12.1269"
        y2="18.7988"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#00ABE7" />
        <stop offset="0.3324" stop-color="#0FB599" />
        <stop offset="0.7179" stop-color="#81C14B" />
        <stop offset="1" stop-color="#8AC33D" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_466_1031"
        x1="27.0398"
        y1="33.5197"
        x2="18.7463"
        y2="37.8906"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#9A0000" />
        <stop offset="1" stop-color="#FF0000" />
      </linearGradient>
    </defs>
  </svg>
);

const ICONCARD = (
  <svg
    className="ICONCARD"
    width="28"
    height="60"
    viewBox="0 0 28 60"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.9321 0H13.0625L7.13672 12.4473L14.273 27.4296H28.0005L14.9321 0Z"
      fill="#13212D"
    />
    <path
      d="M0 27.4299H9.9502L4.9751 16.9854L0 27.4299Z"
      fill="url(#paint0_linear_466_1031)"
    />
    <path
      d="M13.062 59.1562H14.9316L20.8637 46.7089L13.7275 31.7202H0L13.062 59.1562Z"
      fill="#13212D"
    />
    <path
      d="M28 31.7202H18.0498L23.0249 42.1711L28 31.7202Z"
      fill="url(#paint1_linear_466_1031)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_466_1031"
        x1="-4.12407"
        y1="30.6787"
        x2="12.1269"
        y2="18.7988"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#00ABE7" />
        <stop offset="0.3324" stop-color="#0FB599" />
        <stop offset="0.7179" stop-color="#81C14B" />
        <stop offset="1" stop-color="#8AC33D" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_466_1031"
        x1="27.0398"
        y1="33.5197"
        x2="18.7463"
        y2="37.8906"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#9A0000" />
        <stop offset="1" stop-color="#FF0000" />
      </linearGradient>
    </defs>
  </svg>
);

const ICON1 = (
  <svg
    className="UltrafairText"
    width="268"
    height="16"
    viewBox="0 0 268 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.274 15.252C5.174 15.252 3.536 14.671 2.36 13.509C1.198 12.347 0.617 10.688 0.617 8.532V0.299999H4.019V8.406C4.019 11.038 5.111 12.354 7.295 12.354C8.359 12.354 9.171 12.039 9.731 11.409C10.291 10.765 10.571 9.764 10.571 8.406V0.299999H13.931V8.532C13.931 10.688 13.343 12.347 12.167 13.509C11.005 14.671 9.374 15.252 7.274 15.252ZM20.4428 0.299999H23.8448V12.228H31.2158V15H20.4428V0.299999ZM37.9376 3.072H33.2336V0.299999H46.0436V3.072H41.3396V15H37.9376V3.072ZM60.3901 15L57.5551 10.905H57.3871H54.4261V15H51.0241V0.299999H57.3871C58.6891 0.299999 59.8161 0.516999 60.7681 0.950999C61.7341 1.385 62.4761 2.001 62.9941 2.799C63.5121 3.597 63.7711 4.542 63.7711 5.634C63.7711 6.726 63.5051 7.671 62.9731 8.469C62.4551 9.253 61.7131 9.855 60.7471 10.275L64.0441 15H60.3901ZM60.3271 5.634C60.3271 4.808 60.0611 4.178 59.5291 3.744C58.9971 3.296 58.2201 3.072 57.1981 3.072H54.4261V8.196H57.1981C58.2201 8.196 58.9971 7.972 59.5291 7.524C60.0611 7.076 60.3271 6.446 60.3271 5.634ZM79.2974 11.85H72.4724L71.1704 15H67.6844L74.2364 0.299999H77.5964L84.1694 15H80.5994L79.2974 11.85ZM78.2264 9.267L75.8954 3.639L73.5644 9.267H78.2264ZM92.2466 3.03V6.915H99.0506V9.645H92.2466V15H88.8446V0.299999H99.9536V3.03H92.2466ZM114.472 11.85H107.647L106.345 15H102.859L109.411 0.299999H112.771L119.344 15H115.774L114.472 11.85ZM113.401 9.267L111.07 3.639L108.739 9.267H113.401ZM124.02 0.299999H127.422V15H124.02V0.299999ZM143.426 15L140.591 10.905H140.423H137.462V15H134.06V0.299999H140.423C141.725 0.299999 142.852 0.516999 143.804 0.950999C144.77 1.385 145.512 2.001 146.03 2.799C146.548 3.597 146.807 4.542 146.807 5.634C146.807 6.726 146.541 7.671 146.009 8.469C145.491 9.253 144.749 9.855 143.783 10.275L147.08 15H143.426ZM143.363 5.634C143.363 4.808 143.097 4.178 142.565 3.744C142.033 3.296 141.256 3.072 140.234 3.072H137.462V8.196H140.234C141.256 8.196 142.033 7.972 142.565 7.524C143.097 7.076 143.363 6.446 143.363 5.634ZM161.75 0.299999H165.152V12.228H172.523V15H161.75V0.299999ZM184.447 15.252C182.921 15.252 181.542 14.923 180.31 14.265C179.092 13.607 178.133 12.704 177.433 11.556C176.747 10.394 176.404 9.092 176.404 7.65C176.404 6.208 176.747 4.913 177.433 3.765C178.133 2.603 179.092 1.693 180.31 1.035C181.542 0.377 182.921 0.0479997 184.447 0.0479997C185.973 0.0479997 187.345 0.377 188.563 1.035C189.781 1.693 190.74 2.603 191.44 3.765C192.14 4.913 192.49 6.208 192.49 7.65C192.49 9.092 192.14 10.394 191.44 11.556C190.74 12.704 189.781 13.607 188.563 14.265C187.345 14.923 185.973 15.252 184.447 15.252ZM184.447 12.354C185.315 12.354 186.099 12.158 186.799 11.766C187.499 11.36 188.045 10.8 188.437 10.086C188.843 9.372 189.046 8.56 189.046 7.65C189.046 6.74 188.843 5.928 188.437 5.214C188.045 4.5 187.499 3.947 186.799 3.555C186.099 3.149 185.315 2.946 184.447 2.946C183.579 2.946 182.795 3.149 182.095 3.555C181.395 3.947 180.842 4.5 180.436 5.214C180.044 5.928 179.848 6.74 179.848 7.65C179.848 8.56 180.044 9.372 180.436 10.086C180.842 10.8 181.395 11.36 182.095 11.766C182.795 12.158 183.579 12.354 184.447 12.354ZM205.231 15.252C203.733 15.252 202.375 14.93 201.157 14.286C199.953 13.628 199.001 12.725 198.301 11.577C197.615 10.415 197.272 9.106 197.272 7.65C197.272 6.194 197.615 4.892 198.301 3.744C199.001 2.582 199.953 1.679 201.157 1.035C202.375 0.377 203.74 0.0479997 205.252 0.0479997C206.526 0.0479997 207.674 0.272 208.696 0.72C209.732 1.168 210.6 1.812 211.3 2.652L209.116 4.668C208.122 3.52 206.89 2.946 205.42 2.946C204.51 2.946 203.698 3.149 202.984 3.555C202.27 3.947 201.71 4.5 201.304 5.214C200.912 5.928 200.716 6.74 200.716 7.65C200.716 8.56 200.912 9.372 201.304 10.086C201.71 10.8 202.27 11.36 202.984 11.766C203.698 12.158 204.51 12.354 205.42 12.354C206.89 12.354 208.122 11.773 209.116 10.611L211.3 12.627C210.6 13.481 209.732 14.132 208.696 14.58C207.66 15.028 206.505 15.252 205.231 15.252ZM222.103 9.225L220.129 11.283V15H216.748V0.299999H220.129V7.167L226.639 0.299999H230.419L224.329 6.852L230.776 15H226.807L222.103 9.225ZM241.769 15.252C239.669 15.252 238.031 14.671 236.855 13.509C235.693 12.347 235.112 10.688 235.112 8.532V0.299999H238.514V8.406C238.514 11.038 239.606 12.354 241.79 12.354C242.854 12.354 243.666 12.039 244.226 11.409C244.786 10.765 245.066 9.764 245.066 8.406V0.299999H248.426V8.532C248.426 10.688 247.838 12.347 246.662 13.509C245.5 14.671 243.869 15.252 241.769 15.252ZM261.3 0.299999C262.602 0.299999 263.729 0.516999 264.681 0.950999C265.647 1.385 266.389 2.001 266.907 2.799C267.425 3.597 267.684 4.542 267.684 5.634C267.684 6.712 267.425 7.657 266.907 8.469C266.389 9.267 265.647 9.883 264.681 10.317C263.729 10.737 262.602 10.947 261.3 10.947H258.339V15H254.937V0.299999H261.3ZM261.111 8.175C262.133 8.175 262.91 7.958 263.442 7.524C263.974 7.076 264.24 6.446 264.24 5.634C264.24 4.808 263.974 4.178 263.442 3.744C262.91 3.296 262.133 3.072 261.111 3.072H258.339V8.175H261.111Z"
      fill="#13212D"
    />
  </svg>
);
const Searchicon = (
  <svg
    className="SEARCHICON"
    width="66"
    height="66"
    viewBox="0 0 66 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M31.9655 7.28533C37.4773 8.00428 39.1099 15.2897 43.2252 19.0261C46.6807 22.1636 52.2937 23.0246 54.059 27.3452C55.8539 31.7381 53.1112 36.4481 52.2503 41.1148C51.2196 46.7026 53.0095 53.8272 48.5294 57.3221C44.0656 60.8042 37.6267 56.964 31.9655 56.9387C26.3418 56.9135 19.9095 60.676 15.5088 57.1745C11.0874 53.6564 12.4123 46.6555 11.9629 41.0231C11.6191 36.7131 12.1555 32.6233 13.2158 28.4317C14.3598 23.9094 15.2533 19.2716 18.3481 15.7812C21.9866 11.6777 26.5272 6.57598 31.9655 7.28533Z"
      fill="#B3BAD1"
    />
    <path
      d="M44.8594 40.4766V14.9531H17.0156V53.1094H41.25"
      stroke="#11FFBD"
      stroke-width="1.80469"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <line
      x1="22.043"
      y1="25.9102"
      x2="39.832"
      y2="25.9102"
      stroke="#11FFBD"
      stroke-width="1.80469"
      stroke-linecap="round"
    />
    <line
      x1="22.043"
      y1="32.6133"
      x2="31.582"
      y2="32.6133"
      stroke="#11FFBD"
      stroke-width="1.80469"
      stroke-linecap="round"
    />
    <line
      x1="22.043"
      y1="39.3164"
      x2="31.582"
      y2="39.3164"
      stroke="#11FFBD"
      stroke-width="1.80469"
      stroke-linecap="round"
    />
    <line
      x1="22.043"
      y1="46.0195"
      x2="31.582"
      y2="46.0195"
      stroke="#11FFBD"
      stroke-width="1.80469"
      stroke-linecap="round"
    />
    <line
      x1="29.7773"
      y1="19.7227"
      x2="32.2781"
      y2="19.7227"
      stroke="#11FFBD"
      stroke-width="1.80469"
      stroke-linecap="round"
    />
    <line
      x1="31.0664"
      y1="19.7227"
      x2="31.0664"
      y2="15.8555"
      stroke="#11FFBD"
      stroke-width="1.80469"
      stroke-linecap="round"
    />
    <line
      x1="37.5117"
      y1="19.7227"
      x2="40.0125"
      y2="19.7227"
      stroke="#11FFBD"
      stroke-width="1.80469"
      stroke-linecap="round"
    />
    <line
      x1="22.043"
      y1="19.7227"
      x2="24.5438"
      y2="19.7227"
      stroke="#11FFBD"
      stroke-width="1.80469"
      stroke-linecap="round"
    />
    <line
      x1="38.8008"
      y1="19.7227"
      x2="38.8008"
      y2="15.8555"
      stroke="#11FFBD"
      stroke-width="1.80469"
      stroke-linecap="round"
    />
    <line
      x1="23.332"
      y1="19.7227"
      x2="23.332"
      y2="15.8555"
      stroke="#11FFBD"
      stroke-width="1.80469"
      stroke-linecap="round"
    />
    <path
      d="M50.1145 52.1768L56.203 58.2658"
      stroke="#11FFBD"
      stroke-width="1.80469"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M45.375 54.1406C49.077 54.1406 52.0781 51.1395 52.0781 47.4375C52.0781 43.7355 49.077 40.7344 45.375 40.7344C41.673 40.7344 38.6719 43.7355 38.6719 47.4375C38.6719 51.1395 41.673 54.1406 45.375 54.1406Z"
      stroke="#11FFBD"
      stroke-width="1.80469"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const SearchiconBoost = (
  <svg
    className="UltrafairText"
    width="236"
    height="16"
    viewBox="0 0 236 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.537 7.356C12.377 7.622 13.035 8.07 13.511 8.7C13.987 9.316 14.225 10.079 14.225 10.989C14.225 12.277 13.721 13.271 12.713 13.971C11.719 14.657 10.263 15 8.345 15H0.743V0.299999H7.925C9.717 0.299999 11.089 0.642999 12.041 1.329C13.007 2.015 13.49 2.946 13.49 4.122C13.49 4.836 13.315 5.473 12.965 6.033C12.629 6.593 12.153 7.034 11.537 7.356ZM4.124 2.862V6.327H7.505C8.345 6.327 8.982 6.18 9.416 5.886C9.85 5.592 10.067 5.158 10.067 4.584C10.067 4.01 9.85 3.583 9.416 3.303C8.982 3.009 8.345 2.862 7.505 2.862H4.124ZM8.093 12.438C8.989 12.438 9.661 12.291 10.109 11.997C10.571 11.703 10.802 11.248 10.802 10.632C10.802 9.414 9.899 8.805 8.093 8.805H4.124V12.438H8.093ZM27.0696 15.252C25.5436 15.252 24.1646 14.923 22.9326 14.265C21.7146 13.607 20.7556 12.704 20.0556 11.556C19.3696 10.394 19.0266 9.092 19.0266 7.65C19.0266 6.208 19.3696 4.913 20.0556 3.765C20.7556 2.603 21.7146 1.693 22.9326 1.035C24.1646 0.377 25.5436 0.0479997 27.0696 0.0479997C28.5956 0.0479997 29.9676 0.377 31.1856 1.035C32.4036 1.693 33.3626 2.603 34.0626 3.765C34.7626 4.913 35.1126 6.208 35.1126 7.65C35.1126 9.092 34.7626 10.394 34.0626 11.556C33.3626 12.704 32.4036 13.607 31.1856 14.265C29.9676 14.923 28.5956 15.252 27.0696 15.252ZM27.0696 12.354C27.9376 12.354 28.7216 12.158 29.4216 11.766C30.1216 11.36 30.6676 10.8 31.0596 10.086C31.4656 9.372 31.6686 8.56 31.6686 7.65C31.6686 6.74 31.4656 5.928 31.0596 5.214C30.6676 4.5 30.1216 3.947 29.4216 3.555C28.7216 3.149 27.9376 2.946 27.0696 2.946C26.2016 2.946 25.4176 3.149 24.7176 3.555C24.0176 3.947 23.4646 4.5 23.0586 5.214C22.6666 5.928 22.4706 6.74 22.4706 7.65C22.4706 8.56 22.6666 9.372 23.0586 10.086C23.4646 10.8 24.0176 11.36 24.7176 11.766C25.4176 12.158 26.2016 12.354 27.0696 12.354ZM47.9384 15.252C46.4124 15.252 45.0334 14.923 43.8014 14.265C42.5834 13.607 41.6244 12.704 40.9244 11.556C40.2384 10.394 39.8954 9.092 39.8954 7.65C39.8954 6.208 40.2384 4.913 40.9244 3.765C41.6244 2.603 42.5834 1.693 43.8014 1.035C45.0334 0.377 46.4124 0.0479997 47.9384 0.0479997C49.4644 0.0479997 50.8364 0.377 52.0544 1.035C53.2724 1.693 54.2314 2.603 54.9314 3.765C55.6314 4.913 55.9814 6.208 55.9814 7.65C55.9814 9.092 55.6314 10.394 54.9314 11.556C54.2314 12.704 53.2724 13.607 52.0544 14.265C50.8364 14.923 49.4644 15.252 47.9384 15.252ZM47.9384 12.354C48.8064 12.354 49.5904 12.158 50.2904 11.766C50.9904 11.36 51.5364 10.8 51.9284 10.086C52.3344 9.372 52.5374 8.56 52.5374 7.65C52.5374 6.74 52.3344 5.928 51.9284 5.214C51.5364 4.5 50.9904 3.947 50.2904 3.555C49.5904 3.149 48.8064 2.946 47.9384 2.946C47.0704 2.946 46.2864 3.149 45.5864 3.555C44.8864 3.947 44.3334 4.5 43.9274 5.214C43.5354 5.928 43.3394 6.74 43.3394 7.65C43.3394 8.56 43.5354 9.372 43.9274 10.086C44.3334 10.8 44.8864 11.36 45.5864 11.766C46.2864 12.158 47.0704 12.354 47.9384 12.354ZM66.5181 15.252C65.3561 15.252 64.2291 15.098 63.1371 14.79C62.0591 14.468 61.1911 14.055 60.5331 13.551L61.6881 10.989C62.3181 11.451 63.0671 11.822 63.9351 12.102C64.8031 12.382 65.6711 12.522 66.5391 12.522C67.5051 12.522 68.2191 12.382 68.6811 12.102C69.1431 11.808 69.3741 11.423 69.3741 10.947C69.3741 10.597 69.2341 10.31 68.9541 10.086C68.6881 9.848 68.3381 9.659 67.9041 9.519C67.4841 9.379 66.9101 9.225 66.1821 9.057C65.0621 8.791 64.1451 8.525 63.4311 8.259C62.7171 7.993 62.1011 7.566 61.5831 6.978C61.0791 6.39 60.8271 5.606 60.8271 4.626C60.8271 3.772 61.0581 3.002 61.5201 2.316C61.9821 1.616 62.6751 1.063 63.5991 0.656999C64.5371 0.251 65.6781 0.0479997 67.0221 0.0479997C67.9601 0.0479997 68.8771 0.16 69.7731 0.383999C70.6691 0.608 71.4531 0.93 72.1251 1.35L71.0751 3.933C69.7171 3.163 68.3591 2.778 67.0011 2.778C66.0491 2.778 65.3421 2.932 64.8801 3.24C64.4321 3.548 64.2081 3.954 64.2081 4.458C64.2081 4.962 64.4671 5.34 64.9851 5.592C65.5171 5.83 66.3221 6.068 67.4001 6.306C68.5201 6.572 69.4371 6.838 70.1511 7.104C70.8651 7.37 71.4741 7.79 71.9781 8.364C72.4961 8.938 72.7551 9.715 72.7551 10.695C72.7551 11.535 72.5171 12.305 72.0411 13.005C71.5791 13.691 70.8791 14.237 69.9411 14.643C69.0031 15.049 67.8621 15.252 66.5181 15.252ZM81.0696 3.072H76.3656V0.299999H89.1756V3.072H84.4716V15H81.0696V3.072ZM112.619 15L109.784 10.905H109.616H106.655V15H103.253V0.299999H109.616C110.918 0.299999 112.045 0.516999 112.997 0.950999C113.963 1.385 114.705 2.001 115.223 2.799C115.741 3.597 116 4.542 116 5.634C116 6.726 115.734 7.671 115.202 8.469C114.684 9.253 113.942 9.855 112.976 10.275L116.273 15H112.619ZM112.556 5.634C112.556 4.808 112.29 4.178 111.758 3.744C111.226 3.296 110.449 3.072 109.427 3.072H106.655V8.196H109.427C110.449 8.196 111.226 7.972 111.758 7.524C112.29 7.076 112.556 6.446 112.556 5.634ZM133.228 12.27V15H121.846V0.299999H132.955V3.03H125.227V6.222H132.052V8.868H125.227V12.27H133.228ZM161.098 0.299999L156.289 15H152.635L149.401 5.046L146.062 15H142.429L137.599 0.299999H141.127L144.445 10.632L147.91 0.299999H151.06L154.42 10.716L157.843 0.299999H161.098ZM175.336 11.85H168.511L167.209 15H163.723L170.275 0.299999H173.635L180.208 15H176.638L175.336 11.85ZM174.265 9.267L171.934 3.639L169.603 9.267H174.265ZM194.249 15L191.414 10.905H191.246H188.285V15H184.883V0.299999H191.246C192.548 0.299999 193.675 0.516999 194.627 0.950999C195.593 1.385 196.335 2.001 196.853 2.799C197.371 3.597 197.63 4.542 197.63 5.634C197.63 6.726 197.364 7.671 196.832 8.469C196.314 9.253 195.572 9.855 194.606 10.275L197.903 15H194.249ZM194.186 5.634C194.186 4.808 193.92 4.178 193.388 3.744C192.856 3.296 192.079 3.072 191.057 3.072H188.285V8.196H191.057C192.079 8.196 192.856 7.972 193.388 7.524C193.92 7.076 194.186 6.446 194.186 5.634ZM203.475 0.299999H210.153C211.749 0.299999 213.156 0.607999 214.374 1.224C215.606 1.826 216.558 2.68 217.23 3.786C217.916 4.892 218.259 6.18 218.259 7.65C218.259 9.12 217.916 10.408 217.23 11.514C216.558 12.62 215.606 13.481 214.374 14.097C213.156 14.699 211.749 15 210.153 15H203.475V0.299999ZM209.985 12.207C211.455 12.207 212.624 11.801 213.492 10.989C214.374 10.163 214.815 9.05 214.815 7.65C214.815 6.25 214.374 5.144 213.492 4.332C212.624 3.506 211.455 3.093 209.985 3.093H206.877V12.207H209.985ZM228.805 15.252C227.643 15.252 226.516 15.098 225.424 14.79C224.346 14.468 223.478 14.055 222.82 13.551L223.975 10.989C224.605 11.451 225.354 11.822 226.222 12.102C227.09 12.382 227.958 12.522 228.826 12.522C229.792 12.522 230.506 12.382 230.968 12.102C231.43 11.808 231.661 11.423 231.661 10.947C231.661 10.597 231.521 10.31 231.241 10.086C230.975 9.848 230.625 9.659 230.191 9.519C229.771 9.379 229.197 9.225 228.469 9.057C227.349 8.791 226.432 8.525 225.718 8.259C225.004 7.993 224.388 7.566 223.87 6.978C223.366 6.39 223.114 5.606 223.114 4.626C223.114 3.772 223.345 3.002 223.807 2.316C224.269 1.616 224.962 1.063 225.886 0.656999C226.824 0.251 227.965 0.0479997 229.309 0.0479997C230.247 0.0479997 231.164 0.16 232.06 0.383999C232.956 0.608 233.74 0.93 234.412 1.35L233.362 3.933C232.004 3.163 230.646 2.778 229.288 2.778C228.336 2.778 227.629 2.932 227.167 3.24C226.719 3.548 226.495 3.954 226.495 4.458C226.495 4.962 226.754 5.34 227.272 5.592C227.804 5.83 228.609 6.068 229.687 6.306C230.807 6.572 231.724 6.838 232.438 7.104C233.152 7.37 233.761 7.79 234.265 8.364C234.783 8.938 235.042 9.715 235.042 10.695C235.042 11.535 234.804 12.305 234.328 13.005C233.866 13.691 233.166 14.237 232.228 14.643C231.29 15.049 230.149 15.252 228.805 15.252Z"
      fill="#13212D"
    />
  </svg>
);
const ICON3 = (
  <svg
    className="UltrafairText"
    width="305"
    height="40"
    viewBox="0 0 305 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.336 11.15H5.161L3.983 14H0.829L6.757 0.699999H9.797L15.744 14H12.514L11.336 11.15ZM10.367 8.813L8.258 3.721L6.149 8.813H10.367ZM19.9739 0.699999H26.0159C27.4599 0.699999 28.7329 0.978666 29.8349 1.536C30.9495 2.08067 31.8109 2.85333 32.4189 3.854C33.0395 4.85467 33.3499 6.02 33.3499 7.35C33.3499 8.68 33.0395 9.84533 32.4189 10.846C31.8109 11.8467 30.9495 12.6257 29.8349 13.183C28.7329 13.7277 27.4599 14 26.0159 14H19.9739V0.699999ZM25.8639 11.473C27.1939 11.473 28.2515 11.1057 29.0369 10.371C29.8349 9.62367 30.2339 8.61667 30.2339 7.35C30.2339 6.08333 29.8349 5.08267 29.0369 4.348C28.2515 3.60067 27.1939 3.227 25.8639 3.227H23.0519V11.473H25.8639ZM38.5211 0.699999H44.5631C46.0071 0.699999 47.2801 0.978666 48.3821 1.536C49.4968 2.08067 50.3581 2.85333 50.9661 3.854C51.5868 4.85467 51.8971 6.02 51.8971 7.35C51.8971 8.68 51.5868 9.84533 50.9661 10.846C50.3581 11.8467 49.4968 12.6257 48.3821 13.183C47.2801 13.7277 46.0071 14 44.5631 14H38.5211V0.699999ZM44.4111 11.473C45.7411 11.473 46.7988 11.1057 47.5841 10.371C48.3821 9.62367 48.7811 8.61667 48.7811 7.35C48.7811 6.08333 48.3821 5.08267 47.5841 4.348C46.7988 3.60067 45.7411 3.227 44.4111 3.227H41.5991V11.473H44.4111ZM68.0543 3.208H63.7983V0.699999H75.3883V3.208H71.1323V14H68.0543V3.208ZM86.1498 14.228C84.7692 14.228 83.5215 13.9303 82.4068 13.335C81.3048 12.7397 80.4372 11.9227 79.8038 10.884C79.1832 9.83267 78.8728 8.65467 78.8728 7.35C78.8728 6.04533 79.1832 4.87367 79.8038 3.835C80.4372 2.78367 81.3048 1.96033 82.4068 1.365C83.5215 0.769666 84.7692 0.472 86.1498 0.472C87.5305 0.472 88.7718 0.769666 89.8738 1.365C90.9758 1.96033 91.8435 2.78367 92.4768 3.835C93.1102 4.87367 93.4268 6.04533 93.4268 7.35C93.4268 8.65467 93.1102 9.83267 92.4768 10.884C91.8435 11.9227 90.9758 12.7397 89.8738 13.335C88.7718 13.9303 87.5305 14.228 86.1498 14.228ZM86.1498 11.606C86.9352 11.606 87.6445 11.4287 88.2778 11.074C88.9112 10.7067 89.4052 10.2 89.7598 9.554C90.1272 8.908 90.3108 8.17333 90.3108 7.35C90.3108 6.52667 90.1272 5.792 89.7598 5.146C89.4052 4.5 88.9112 3.99967 88.2778 3.645C87.6445 3.27767 86.9352 3.094 86.1498 3.094C85.3645 3.094 84.6552 3.27767 84.0218 3.645C83.3885 3.99967 82.8882 4.5 82.5208 5.146C82.1662 5.792 81.9888 6.52667 81.9888 7.35C81.9888 8.17333 82.1662 8.908 82.5208 9.554C82.8882 10.2 83.3885 10.7067 84.0218 11.074C84.6552 11.4287 85.3645 11.606 86.1498 11.606ZM113.205 9.288V14H110.127V9.25L104.978 0.699999H108.246L111.799 6.609L115.352 0.699999H118.373L113.205 9.288ZM128.377 14.228C126.996 14.228 125.748 13.9303 124.634 13.335C123.532 12.7397 122.664 11.9227 122.031 10.884C121.41 9.83267 121.1 8.65467 121.1 7.35C121.1 6.04533 121.41 4.87367 122.031 3.835C122.664 2.78367 123.532 1.96033 124.634 1.365C125.748 0.769666 126.996 0.472 128.377 0.472C129.757 0.472 130.999 0.769666 132.101 1.365C133.203 1.96033 134.07 2.78367 134.704 3.835C135.337 4.87367 135.654 6.04533 135.654 7.35C135.654 8.65467 135.337 9.83267 134.704 10.884C134.07 11.9227 133.203 12.7397 132.101 13.335C130.999 13.9303 129.757 14.228 128.377 14.228ZM128.377 11.606C129.162 11.606 129.871 11.4287 130.505 11.074C131.138 10.7067 131.632 10.2 131.987 9.554C132.354 8.908 132.538 8.17333 132.538 7.35C132.538 6.52667 132.354 5.792 131.987 5.146C131.632 4.5 131.138 3.99967 130.505 3.645C129.871 3.27767 129.162 3.094 128.377 3.094C127.591 3.094 126.882 3.27767 126.249 3.645C125.615 3.99967 125.115 4.5 124.748 5.146C124.393 5.792 124.216 6.52667 124.216 7.35C124.216 8.17333 124.393 8.908 124.748 9.554C125.115 10.2 125.615 10.7067 126.249 11.074C126.882 11.4287 127.591 11.606 128.377 11.606ZM146.726 14.228C144.826 14.228 143.344 13.7023 142.28 12.651C141.229 11.5997 140.703 10.0987 140.703 8.148V0.699999H143.781V8.034C143.781 10.4153 144.769 11.606 146.745 11.606C147.708 11.606 148.442 11.321 148.949 10.751C149.456 10.1683 149.709 9.26267 149.709 8.034V0.699999H152.749V8.148C152.749 10.0987 152.217 11.5997 151.153 12.651C150.102 13.7023 148.626 14.228 146.726 14.228ZM167.114 14L164.549 10.295H164.397H161.718V14H158.64V0.699999H164.397C165.575 0.699999 166.595 0.896333 167.456 1.289C168.33 1.68167 169.002 2.239 169.47 2.961C169.939 3.683 170.173 4.538 170.173 5.526C170.173 6.514 169.933 7.369 169.451 8.091C168.983 8.80033 168.311 9.345 167.437 9.725L170.42 14H167.114ZM167.057 5.526C167.057 4.77867 166.817 4.20867 166.335 3.816C165.854 3.41067 165.151 3.208 164.226 3.208H161.718V7.844H164.226C165.151 7.844 165.854 7.64133 166.335 7.236C166.817 6.83067 167.057 6.26067 167.057 5.526ZM183.693 0.699999H186.771V11.492H193.44V14H183.693V0.699999ZM204.228 14.228C202.847 14.228 201.6 13.9303 200.485 13.335C199.383 12.7397 198.515 11.9227 197.882 10.884C197.261 9.83267 196.951 8.65467 196.951 7.35C196.951 6.04533 197.261 4.87367 197.882 3.835C198.515 2.78367 199.383 1.96033 200.485 1.365C201.6 0.769666 202.847 0.472 204.228 0.472C205.609 0.472 206.85 0.769666 207.952 1.365C209.054 1.96033 209.922 2.78367 210.555 3.835C211.188 4.87367 211.505 6.04533 211.505 7.35C211.505 8.65467 211.188 9.83267 210.555 10.884C209.922 11.9227 209.054 12.7397 207.952 13.335C206.85 13.9303 205.609 14.228 204.228 14.228ZM204.228 11.606C205.013 11.606 205.723 11.4287 206.356 11.074C206.989 10.7067 207.483 10.2 207.838 9.554C208.205 8.908 208.389 8.17333 208.389 7.35C208.389 6.52667 208.205 5.792 207.838 5.146C207.483 4.5 206.989 3.99967 206.356 3.645C205.723 3.27767 205.013 3.094 204.228 3.094C203.443 3.094 202.733 3.27767 202.1 3.645C201.467 3.99967 200.966 4.5 200.599 5.146C200.244 5.792 200.067 6.52667 200.067 7.35C200.067 8.17333 200.244 8.908 200.599 9.554C200.966 10.2 201.467 10.7067 202.1 11.074C202.733 11.4287 203.443 11.606 204.228 11.606ZM223.033 14.228C221.678 14.228 220.449 13.9367 219.347 13.354C218.258 12.7587 217.397 11.9417 216.763 10.903C216.143 9.85167 215.832 8.66733 215.832 7.35C215.832 6.03267 216.143 4.85467 216.763 3.816C217.397 2.76467 218.258 1.94767 219.347 1.365C220.449 0.769666 221.684 0.472 223.052 0.472C224.205 0.472 225.244 0.674666 226.168 1.08C227.106 1.48533 227.891 2.068 228.524 2.828L226.548 4.652C225.649 3.61333 224.534 3.094 223.204 3.094C222.381 3.094 221.646 3.27767 221 3.645C220.354 3.99967 219.848 4.5 219.48 5.146C219.126 5.792 218.948 6.52667 218.948 7.35C218.948 8.17333 219.126 8.908 219.48 9.554C219.848 10.2 220.354 10.7067 221 11.074C221.646 11.4287 222.381 11.606 223.204 11.606C224.534 11.606 225.649 11.0803 226.548 10.029L228.524 11.853C227.891 12.6257 227.106 13.2147 226.168 13.62C225.231 14.0253 224.186 14.228 223.033 14.228ZM238.298 8.775L236.512 10.637V14H233.453V0.699999H236.512V6.913L242.402 0.699999H245.822L240.312 6.628L246.145 14H242.554L238.298 8.775ZM256.091 14.228C254.191 14.228 252.709 13.7023 251.645 12.651C250.594 11.5997 250.068 10.0987 250.068 8.148V0.699999H253.146V8.034C253.146 10.4153 254.134 11.606 256.11 11.606C257.073 11.606 257.807 11.321 258.314 10.751C258.821 10.1683 259.074 9.26267 259.074 8.034V0.699999H262.114V8.148C262.114 10.0987 261.582 11.5997 260.518 12.651C259.467 13.7023 257.991 14.228 256.091 14.228ZM273.763 0.699999C274.941 0.699999 275.96 0.896333 276.822 1.289C277.696 1.68167 278.367 2.239 278.836 2.961C279.304 3.683 279.539 4.538 279.539 5.526C279.539 6.50133 279.304 7.35633 278.836 8.091C278.367 8.813 277.696 9.37033 276.822 9.763C275.96 10.143 274.941 10.333 273.763 10.333H271.084V14H268.006V0.699999H273.763ZM273.592 7.825C274.516 7.825 275.219 7.62867 275.701 7.236C276.182 6.83067 276.423 6.26067 276.423 5.526C276.423 4.77867 276.182 4.20867 275.701 3.816C275.219 3.41067 274.516 3.208 273.592 3.208H271.084V7.825H273.592ZM303.224 14.228L301.628 12.746C300.362 13.734 298.88 14.228 297.182 14.228C296.22 14.228 295.352 14.076 294.579 13.772C293.807 13.4553 293.199 13.0183 292.755 12.461C292.325 11.9037 292.109 11.2767 292.109 10.58C292.109 9.75667 292.337 9.03467 292.793 8.414C293.262 7.78067 294.009 7.179 295.035 6.609C294.554 6.115 294.206 5.64633 293.99 5.203C293.775 4.747 293.667 4.27833 293.667 3.797C293.667 3.151 293.838 2.581 294.18 2.087C294.522 1.593 295.004 1.213 295.624 0.946999C296.258 0.668332 296.986 0.528999 297.809 0.528999C298.962 0.528999 299.887 0.807666 300.583 1.365C301.28 1.90967 301.628 2.65067 301.628 3.588C301.628 4.272 301.419 4.88 301.001 5.412C300.596 5.944 299.937 6.457 299.025 6.951L301.457 9.212C301.749 8.604 301.97 7.91367 302.122 7.141L304.497 7.882C304.244 9.06 303.839 10.067 303.281 10.903L304.839 12.347L303.224 14.228ZM297.809 2.543C297.366 2.543 297.011 2.657 296.745 2.885C296.492 3.113 296.365 3.40433 296.365 3.759C296.365 4.025 296.435 4.27833 296.574 4.519C296.714 4.747 296.986 5.05733 297.391 5.45C298.037 5.108 298.487 4.804 298.74 4.538C298.994 4.25933 299.12 3.96167 299.12 3.645C299.12 3.31567 299.006 3.04967 298.778 2.847C298.55 2.64433 298.227 2.543 297.809 2.543ZM297.391 11.91C298.316 11.91 299.146 11.6503 299.88 11.131L296.669 8.129C296.074 8.471 295.65 8.80667 295.396 9.136C295.143 9.46533 295.016 9.839 295.016 10.257C295.016 10.751 295.232 11.15 295.662 11.454C296.093 11.758 296.669 11.91 297.391 11.91ZM12.875 36.53V39H2.577V25.7H12.628V28.17H5.636V31.058H11.811V33.452H5.636V36.53H12.875ZM26.4232 39L23.2122 34.383L20.0582 39H16.5242L21.4452 32.236L16.7712 25.7H20.2672L23.3262 30.013L26.3282 25.7H29.6532L25.0172 32.122L29.9762 39H26.4232ZM36.6375 28.208H32.3815V25.7H43.9715V28.208H39.7155V39H36.6375V28.208ZM58.7756 36.53V39H48.4776V25.7H58.5286V28.17H51.5366V31.058H57.7116V33.452H51.5366V36.53H58.7756ZM76.2727 25.7V39H73.7457L67.1147 30.925V39H64.0747V25.7H66.6207L73.2327 33.775V25.7H76.2727ZM82.2694 25.7H88.3114C89.7554 25.7 91.0284 25.9787 92.1304 26.536C93.2451 27.0807 94.1064 27.8533 94.7144 28.854C95.3351 29.8547 95.6454 31.02 95.6454 32.35C95.6454 33.68 95.3351 34.8453 94.7144 35.846C94.1064 36.8467 93.2451 37.6257 92.1304 38.183C91.0284 38.7277 89.7554 39 88.3114 39H82.2694V25.7ZM88.1594 36.473C89.4894 36.473 90.547 36.1057 91.3324 35.371C92.1304 34.6237 92.5294 33.6167 92.5294 32.35C92.5294 31.0833 92.1304 30.0827 91.3324 29.348C90.547 28.6007 89.4894 28.227 88.1594 28.227H85.3474V36.473H88.1594ZM115.432 34.288V39H112.354V34.25L107.205 25.7H110.473L114.026 31.609L117.579 25.7H120.6L115.432 34.288ZM130.603 39.228C129.222 39.228 127.975 38.9303 126.86 38.335C125.758 37.7397 124.89 36.9227 124.257 35.884C123.636 34.8327 123.326 33.6547 123.326 32.35C123.326 31.0453 123.636 29.8737 124.257 28.835C124.89 27.7837 125.758 26.9603 126.86 26.365C127.975 25.7697 129.222 25.472 130.603 25.472C131.984 25.472 133.225 25.7697 134.327 26.365C135.429 26.9603 136.297 27.7837 136.93 28.835C137.563 29.8737 137.88 31.0453 137.88 32.35C137.88 33.6547 137.563 34.8327 136.93 35.884C136.297 36.9227 135.429 37.7397 134.327 38.335C133.225 38.9303 131.984 39.228 130.603 39.228ZM130.603 36.606C131.388 36.606 132.098 36.4287 132.731 36.074C133.364 35.7067 133.858 35.2 134.213 34.554C134.58 33.908 134.764 33.1733 134.764 32.35C134.764 31.5267 134.58 30.792 134.213 30.146C133.858 29.5 133.364 28.9997 132.731 28.645C132.098 28.2777 131.388 28.094 130.603 28.094C129.818 28.094 129.108 28.2777 128.475 28.645C127.842 28.9997 127.341 29.5 126.974 30.146C126.619 30.792 126.442 31.5267 126.442 32.35C126.442 33.1733 126.619 33.908 126.974 34.554C127.341 35.2 127.842 35.7067 128.475 36.074C129.108 36.4287 129.818 36.606 130.603 36.606ZM148.952 39.228C147.052 39.228 145.57 38.7023 144.506 37.651C143.455 36.5997 142.929 35.0987 142.929 33.148V25.7H146.007V33.034C146.007 35.4153 146.995 36.606 148.971 36.606C149.934 36.606 150.669 36.321 151.175 35.751C151.682 35.1683 151.935 34.2627 151.935 33.034V25.7H154.975V33.148C154.975 35.0987 154.443 36.5997 153.379 37.651C152.328 38.7023 150.852 39.228 148.952 39.228ZM169.341 39L166.776 35.295H166.624H163.945V39H160.867V25.7H166.624C167.802 25.7 168.822 25.8963 169.683 26.289C170.557 26.6817 171.228 27.239 171.697 27.961C172.166 28.683 172.4 29.538 172.4 30.526C172.4 31.514 172.159 32.369 171.678 33.091C171.209 33.8003 170.538 34.345 169.664 34.725L172.647 39H169.341ZM169.284 30.526C169.284 29.7787 169.043 29.2087 168.562 28.816C168.081 28.4107 167.378 28.208 166.453 28.208H163.945V32.844H166.453C167.378 32.844 168.081 32.6413 168.562 32.236C169.043 31.8307 169.284 31.2607 169.284 30.526ZM195.686 32.084C196.446 32.3247 197.041 32.73 197.472 33.3C197.902 33.8573 198.118 34.5477 198.118 35.371C198.118 36.5363 197.662 37.4357 196.75 38.069C195.85 38.6897 194.533 39 192.798 39H185.92V25.7H192.418C194.039 25.7 195.28 26.0103 196.142 26.631C197.016 27.2517 197.453 28.094 197.453 29.158C197.453 29.804 197.294 30.3803 196.978 30.887C196.674 31.3937 196.243 31.7927 195.686 32.084ZM188.979 28.018V31.153H192.038C192.798 31.153 193.374 31.02 193.767 30.754C194.159 30.488 194.356 30.0953 194.356 29.576C194.356 29.0567 194.159 28.6703 193.767 28.417C193.374 28.151 192.798 28.018 192.038 28.018H188.979ZM192.57 36.682C193.38 36.682 193.988 36.549 194.394 36.283C194.812 36.017 195.021 35.6053 195.021 35.048C195.021 33.946 194.204 33.395 192.57 33.395H188.979V36.682H192.57ZM209.739 39.228C208.358 39.228 207.111 38.9303 205.996 38.335C204.894 37.7397 204.026 36.9227 203.393 35.884C202.772 34.8327 202.462 33.6547 202.462 32.35C202.462 31.0453 202.772 29.8737 203.393 28.835C204.026 27.7837 204.894 26.9603 205.996 26.365C207.111 25.7697 208.358 25.472 209.739 25.472C211.12 25.472 212.361 25.7697 213.463 26.365C214.565 26.9603 215.433 27.7837 216.066 28.835C216.699 29.8737 217.016 31.0453 217.016 32.35C217.016 33.6547 216.699 34.8327 216.066 35.884C215.433 36.9227 214.565 37.7397 213.463 38.335C212.361 38.9303 211.12 39.228 209.739 39.228ZM209.739 36.606C210.524 36.606 211.234 36.4287 211.867 36.074C212.5 35.7067 212.994 35.2 213.349 34.554C213.716 33.908 213.9 33.1733 213.9 32.35C213.9 31.5267 213.716 30.792 213.349 30.146C212.994 29.5 212.5 28.9997 211.867 28.645C211.234 28.2777 210.524 28.094 209.739 28.094C208.954 28.094 208.244 28.2777 207.611 28.645C206.978 28.9997 206.477 29.5 206.11 30.146C205.755 30.792 205.578 31.5267 205.578 32.35C205.578 33.1733 205.755 33.908 206.11 34.554C206.477 35.2 206.978 35.7067 207.611 36.074C208.244 36.4287 208.954 36.606 209.739 36.606ZM228.62 39.228C227.239 39.228 225.992 38.9303 224.877 38.335C223.775 37.7397 222.907 36.9227 222.274 35.884C221.653 34.8327 221.343 33.6547 221.343 32.35C221.343 31.0453 221.653 29.8737 222.274 28.835C222.907 27.7837 223.775 26.9603 224.877 26.365C225.992 25.7697 227.239 25.472 228.62 25.472C230.001 25.472 231.242 25.7697 232.344 26.365C233.446 26.9603 234.314 27.7837 234.947 28.835C235.58 29.8737 235.897 31.0453 235.897 32.35C235.897 33.6547 235.58 34.8327 234.947 35.884C234.314 36.9227 233.446 37.7397 232.344 38.335C231.242 38.9303 230.001 39.228 228.62 39.228ZM228.62 36.606C229.405 36.606 230.115 36.4287 230.748 36.074C231.381 35.7067 231.875 35.2 232.23 34.554C232.597 33.908 232.781 33.1733 232.781 32.35C232.781 31.5267 232.597 30.792 232.23 30.146C231.875 29.5 231.381 28.9997 230.748 28.645C230.115 28.2777 229.405 28.094 228.62 28.094C227.835 28.094 227.125 28.2777 226.492 28.645C225.859 28.9997 225.358 29.5 224.991 30.146C224.636 30.792 224.459 31.5267 224.459 32.35C224.459 33.1733 224.636 33.908 224.991 34.554C225.358 35.2 225.859 35.7067 226.492 36.074C227.125 36.4287 227.835 36.606 228.62 36.606ZM245.43 39.228C244.379 39.228 243.359 39.0887 242.371 38.81C241.396 38.5187 240.611 38.145 240.015 37.689L241.06 35.371C241.63 35.789 242.308 36.1247 243.093 36.378C243.879 36.6313 244.664 36.758 245.449 36.758C246.323 36.758 246.969 36.6313 247.387 36.378C247.805 36.112 248.014 35.7637 248.014 35.333C248.014 35.0163 247.888 34.7567 247.634 34.554C247.394 34.3387 247.077 34.1677 246.684 34.041C246.304 33.9143 245.785 33.775 245.126 33.623C244.113 33.3823 243.283 33.1417 242.637 32.901C241.991 32.6603 241.434 32.274 240.965 31.742C240.509 31.21 240.281 30.5007 240.281 29.614C240.281 28.8413 240.49 28.1447 240.908 27.524C241.326 26.8907 241.953 26.3903 242.789 26.023C243.638 25.6557 244.67 25.472 245.886 25.472C246.735 25.472 247.565 25.5733 248.375 25.776C249.186 25.9787 249.895 26.27 250.503 26.65L249.553 28.987C248.325 28.2903 247.096 27.942 245.867 27.942C245.006 27.942 244.366 28.0813 243.948 28.36C243.543 28.6387 243.34 29.006 243.34 29.462C243.34 29.918 243.575 30.26 244.043 30.488C244.525 30.7033 245.253 30.9187 246.228 31.134C247.242 31.3747 248.071 31.6153 248.717 31.856C249.363 32.0967 249.914 32.4767 250.37 32.996C250.839 33.5153 251.073 34.2183 251.073 35.105C251.073 35.865 250.858 36.5617 250.427 37.195C250.009 37.8157 249.376 38.3097 248.527 38.677C247.679 39.0443 246.646 39.228 245.43 39.228ZM258.596 28.208H254.34V25.7H265.93V28.208H261.674V39H258.596V28.208Z"
      fill="#13212D"
    />
  </svg>
);
const ICON4 = (
  <svg
    className="UltrafairText"
    width="234"
    height="16"
    viewBox="0 0 234 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.778 15.252C7.28 15.252 5.922 14.93 4.704 14.286C3.5 13.628 2.548 12.725 1.848 11.577C1.162 10.415 0.819 9.106 0.819 7.65C0.819 6.194 1.162 4.892 1.848 3.744C2.548 2.582 3.5 1.679 4.704 1.035C5.922 0.377 7.287 0.0479997 8.799 0.0479997C10.073 0.0479997 11.221 0.272 12.243 0.72C13.279 1.168 14.147 1.812 14.847 2.652L12.663 4.668C11.669 3.52 10.437 2.946 8.967 2.946C8.057 2.946 7.245 3.149 6.531 3.555C5.817 3.947 5.257 4.5 4.851 5.214C4.459 5.928 4.263 6.74 4.263 7.65C4.263 8.56 4.459 9.372 4.851 10.086C5.257 10.8 5.817 11.36 6.531 11.766C7.245 12.158 8.057 12.354 8.967 12.354C10.437 12.354 11.669 11.773 12.663 10.611L14.847 12.627C14.147 13.481 13.279 14.132 12.243 14.58C11.207 15.028 10.052 15.252 8.778 15.252ZM20.2944 0.299999H23.6964V12.228H31.0674V15H20.2944V0.299999ZM45.9222 11.85H39.0972L37.7952 15H34.3092L40.8612 0.299999H44.2212L50.7942 15H47.2242L45.9222 11.85ZM44.8512 9.267L42.5202 3.639L40.1892 9.267H44.8512ZM55.4694 0.299999H58.8714V15H55.4694V0.299999ZM78.887 15L78.866 6.18L74.54 13.446H73.007L68.702 6.369V15H65.51V0.299999H68.324L73.826 9.435L79.244 0.299999H82.037L82.079 15H78.887ZM109.196 12.27V15H97.8139V0.299999H108.923V3.03H101.195V6.222H108.02V8.868H101.195V12.27H109.196ZM124.734 11.85H117.909L116.607 15H113.121L119.673 0.299999H123.033L129.606 15H126.036L124.734 11.85ZM123.663 9.267L121.332 3.639L119.001 9.267H123.663ZM143.647 15L140.812 10.905H140.644H137.683V15H134.281V0.299999H140.644C141.946 0.299999 143.073 0.516999 144.025 0.950999C144.991 1.385 145.733 2.001 146.251 2.799C146.769 3.597 147.028 4.542 147.028 5.634C147.028 6.726 146.762 7.671 146.23 8.469C145.712 9.253 144.97 9.855 144.004 10.275L147.301 15H143.647ZM143.584 5.634C143.584 4.808 143.318 4.178 142.786 3.744C142.254 3.296 141.477 3.072 140.455 3.072H137.683V8.196H140.455C141.477 8.196 142.254 7.972 142.786 7.524C143.318 7.076 143.584 6.446 143.584 5.634ZM166.355 0.299999V15H163.562L156.233 6.075V15H152.873V0.299999H155.687L162.995 9.225V0.299999H166.355ZM172.983 0.299999H176.385V15H172.983V0.299999ZM196.506 0.299999V15H193.713L186.384 6.075V15H183.024V0.299999H185.838L193.146 9.225V0.299999H196.506ZM213.067 7.419H216.175V13.383C215.377 13.985 214.453 14.447 213.403 14.769C212.353 15.091 211.296 15.252 210.232 15.252C208.706 15.252 207.334 14.93 206.116 14.286C204.898 13.628 203.939 12.725 203.239 11.577C202.553 10.415 202.21 9.106 202.21 7.65C202.21 6.194 202.553 4.892 203.239 3.744C203.939 2.582 204.905 1.679 206.137 1.035C207.369 0.377 208.755 0.0479997 210.295 0.0479997C211.583 0.0479997 212.752 0.264999 213.802 0.698999C214.852 1.133 215.734 1.763 216.448 2.589L214.264 4.605C213.214 3.499 211.947 2.946 210.463 2.946C209.525 2.946 208.692 3.142 207.964 3.534C207.236 3.926 206.669 4.479 206.263 5.193C205.857 5.907 205.654 6.726 205.654 7.65C205.654 8.56 205.857 9.372 206.263 10.086C206.669 10.8 207.229 11.36 207.943 11.766C208.671 12.158 209.497 12.354 210.421 12.354C211.401 12.354 212.283 12.144 213.067 11.724V7.419ZM227.315 15.252C226.153 15.252 225.026 15.098 223.934 14.79C222.856 14.468 221.988 14.055 221.33 13.551L222.485 10.989C223.115 11.451 223.864 11.822 224.732 12.102C225.6 12.382 226.468 12.522 227.336 12.522C228.302 12.522 229.016 12.382 229.478 12.102C229.94 11.808 230.171 11.423 230.171 10.947C230.171 10.597 230.031 10.31 229.751 10.086C229.485 9.848 229.135 9.659 228.701 9.519C228.281 9.379 227.707 9.225 226.979 9.057C225.859 8.791 224.942 8.525 224.228 8.259C223.514 7.993 222.898 7.566 222.38 6.978C221.876 6.39 221.624 5.606 221.624 4.626C221.624 3.772 221.855 3.002 222.317 2.316C222.779 1.616 223.472 1.063 224.396 0.656999C225.334 0.251 226.475 0.0479997 227.819 0.0479997C228.757 0.0479997 229.674 0.16 230.57 0.383999C231.466 0.608 232.25 0.93 232.922 1.35L231.872 3.933C230.514 3.163 229.156 2.778 227.798 2.778C226.846 2.778 226.139 2.932 225.677 3.24C225.229 3.548 225.005 3.954 225.005 4.458C225.005 4.962 225.264 5.34 225.782 5.592C226.314 5.83 227.119 6.068 228.197 6.306C229.317 6.572 230.234 6.838 230.948 7.104C231.662 7.37 232.271 7.79 232.775 8.364C233.293 8.938 233.552 9.715 233.552 10.695C233.552 11.535 233.314 12.305 232.838 13.005C232.376 13.691 231.676 14.237 230.738 14.643C229.8 15.049 228.659 15.252 227.315 15.252Z"
      fill="#13212D"
    />
  </svg>
);
