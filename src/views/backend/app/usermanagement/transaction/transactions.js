import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Select from "react-select";
import "./transaction.css";
import { TransactionSvg } from "../../../../../components/partials/backend/headerstyle/headerIcons";
import Customheader from "../../../../../components/Customheader";

const Transactions = () => {
  const [depositToggle, setDepositToggle] = useState(false);
  const customStyles = {
    singleValue: (provided, state) => ({
      ...provided,
      // backgroundColor: "#ffff",
      color: "#fff",
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "17px",
      textAlign: "left",
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "#fff",
      };
    },
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  };

  const categoryGroup = [
    {
      // label: "Select",
      options: [
        // { label: "Select", value: undefined },
        { label: "Crypto", value: "Crypto" },
        { label: "Bitcoin", value: "Bitcoin" },
      ],
    },
  ];
  const withdrawalClickHandler = () => {
    setDepositToggle(true);
  };

  const depositClickHandler = () => {
    setDepositToggle(false);
  };

  var depositSelected = depositToggle ? "" : "active";
  var withdrawalSelected = depositToggle ? "active" : "";
  const SVG = (
    <svg
      width="30"
      height="34"
      viewBox="0 0 30 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.6667 4.00033H19.6933C19.005 2.06199 17.1733 0.666992 15 0.666992C12.8267 0.666992 10.995 2.06199 10.3067 4.00033H3.33333C1.49167 4.00033 0 5.49199 0 7.33366V30.667C0 32.5087 1.49167 34.0003 3.33333 34.0003H26.6667C28.5083 34.0003 30 32.5087 30 30.667V7.33366C30 5.49199 28.5083 4.00033 26.6667 4.00033ZM13.3333 27.3337H6.66667C5.74667 27.3337 5 26.587 5 25.667C5 24.747 5.74667 24.0003 6.66667 24.0003H13.3333C14.2533 24.0003 15 24.747 15 25.667C15 26.587 14.2533 27.3337 13.3333 27.3337ZM13.3333 17.3337H6.66667C5.74667 17.3337 5 16.587 5 15.667C5 14.747 5.74667 14.0003 6.66667 14.0003H13.3333C14.2533 14.0003 15 14.747 15 15.667C15 16.587 14.2533 17.3337 13.3333 17.3337ZM15 7.33366C14.08 7.33366 13.3333 6.58699 13.3333 5.66699C13.3333 4.74699 14.08 4.00033 15 4.00033C15.92 4.00033 16.6667 4.74699 16.6667 5.66699C16.6667 6.58699 15.92 7.33366 15 7.33366ZM22.845 26.8453C22.5333 27.1587 22.1083 27.3337 21.6667 27.3337H20C19.08 27.3337 18.3333 26.587 18.3333 25.667C18.3333 24.747 19.08 24.0003 20 24.0003H20.9767L23.1317 21.8453C23.7833 21.1937 24.8383 21.1937 25.4883 21.8453C26.14 22.497 26.14 23.552 25.4883 24.202L22.845 26.8453ZM21.6667 17.3337H20C19.08 17.3337 18.3333 16.587 18.3333 15.667C18.3333 14.747 19.08 14.0003 20 14.0003H20.9767L23.1317 11.8453C23.7833 11.1937 24.8383 11.1937 25.4883 11.8453C26.14 12.497 26.14 13.552 25.4883 14.202L22.845 16.8453C22.5333 17.1587 22.1083 17.3337 21.6667 17.3337Z"
        fill="#11FFBD"
      />
    </svg>
  );

  return (
    <>
      <Container fluid>
        <div className="mb5">
          <Customheader title="Transaction" SVG={SVG} />
        </div>
        <div className="transaction-container">
          <div className="transaction-option_card ">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                class={`transactionToggleOuter-${depositSelected}`}
                onClick={depositClickHandler}
              >
                {depositToggle ? <div /> : <div className="GreenLine" />}
                <span className={depositToggle ? "mr5" : ""}>
                  {" "}
                  Deposits
                </span>{" "}
              </div>
              {depositToggle ? (
                <div />
              ) : (
                <div className="optionsUnderlineMobile" />
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                class={`transactionToggleOuter-${withdrawalSelected}`}
                onClick={withdrawalClickHandler}
              >
                {" "}
                {!depositToggle ? <div /> : <div className="GreenLine" />}
                <span className={!depositToggle ? "mr5" : ""}>
                  {" "}
                  Withdrawals{" "}
                </span>
              </div>
              {depositToggle ? (
                <div className="optionsUnderlineMobile" />
              ) : (
                <div />
              )}
            </div>
          </div>

          <div className="transaction-type_card ">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="labelType">Type</span>
              <Select
                options={categoryGroup}
                styles={customStyles}
                placeholder={"Select"}
              />
            </div>
            <br />
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TransactionSvg />
              <br />
              <p className="textBelowIcon">
                {depositToggle ? "No Withdrawals" : "No Deposits"}
              </p>
              <div className="navigationButton">
                <div>{"< Previous"}</div>
                <div>{"Next >"}</div>
              </div>
              <br />
              <div className="buttonBelowIcon">
                {depositToggle
                  ? "Download all Withdrawals"
                  : "Download all Deposits"}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Transactions;
