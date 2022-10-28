import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Select from "react-select";
import "./transaction.css";
import { TransactionSvg } from "../../../../../components/partials/backend/headerstyle/headerIcons";

const Transactions = () => {
  const [depositToggle, setDepositToggle] = useState(false);
  const customStyles = {
    singleValue: (provided, state) => ({
      ...provided,
      // backgroundColor: "#4800ff",
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
      label: "",
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

  return (
    <>
      <Container fluid>
        <div className="transaction-container">
          <div className="transaction-option_card ">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                class={`transactionToggleOuter-${depositSelected}`}
                onClick={depositClickHandler}
              >
                Deposits
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
                Withdrawals
              </div>
              {depositToggle ? (
                <div className="optionsUnderlineMobile" />
              ) : (
                <div />
              )}
            </div>
          </div>

          <div className="transaction-type_card ">
            <div>
              <p className="labelType">Type</p>
              <Select options={categoryGroup} styles={customStyles} />
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
