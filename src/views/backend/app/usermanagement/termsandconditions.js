import React from "react";
import { Container } from "react-bootstrap";
import Customheader from "../../../../components/Customheader";
import "../../../../assets/css/Terms.css";
import CardSwiper from "../../../../Common/CardSwiper";

const TermsAndConditions = () => {
  const Terms = [1, 2, 3, 4, 5];
  return (
    <>
      <Container fluid className="BGGRAD" >
        <Customheader title={"Terms & Conditions"} TaD="abc" />
        <div className="MainContainerTerm">
          {Terms.map((e) => {
            return (
              <div key={e} className="MRG-30">
                <div className="Textcontainer">
                  <span className="Header">Heading/title</span>
                  <span className="NormalTEXTa MRG-30">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </span>
                  <span className="NormalTEXTa">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </span>
                </div>
              </div>
            );
          })}
        </div>

       <div className="MT_40 MB_45">
       <CardSwiper
          classnm="testclass21"
          classnm1="testclass22"
          title="Providers"
        />
       </div>
      </Container>
    </>
  );
};

export default TermsAndConditions;
