import React from "react";
import { Container } from "react-bootstrap";
import Select from "react-select";
import "./transaction.css";
import { transactionSvg } from "../../../../../components/partials/backend/headerstyle/headerIcons";

const Transactions = () => {
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
  return (
    <>
      <Container fluid>
        <div className="transaction-container">
          <div className="transaction-option_card ">
            {/* <div className="transactionToggleOuter mb-2"> */}
            <button type="button" class=" transactionToggleOuter mb-2">
              Deposits
            </button>
            {/* </div> */}
            {/* <div className="transactionToggleOuter "> */}
            <button type="button" class=" transactionToggleOuter">
              Withdrawals
            </button>
            {/* </div> */}
          </div>

          <div className="transaction-type_card ">
            <div>
              <p className="labelType">Type</p>
              <Select options={categoryGroup} styles={customStyles} />
            </div>
            <br />
            <br />
            <div>
              <transactionSvg />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Transactions;
