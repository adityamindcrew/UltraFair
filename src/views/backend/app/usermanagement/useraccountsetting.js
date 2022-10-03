import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Card from "../../../../components/Card";

import Img1 from "../../../../assets/images/Customheader/Headerimg1.png";

import Customheader from "../../../../components/Customheader";
import Custombtn from "../../../../components/Custombtn";
import Customsearchbar from "../../../../components/Customsearchbar";
import UltraFairCard from "../../../../Common/UltraFairCard";
import CardSwiper from "../../../../Common/CardSwiper";

const UserAccountSetting = () => {
  const SVG = (
    <svg
      width="30"
      height="30"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.69998 9.10815L5.49998 5.50815V4.60815H2.79998V5.50815H4.59998L2.79998 9.10815M7.29998 9.10815L9.09998 5.50815V4.60815H6.39998V5.50815H8.19998L6.39998 9.10815M10.9 9.10815L12.7 5.50815V4.60815H9.99998V5.50815H11.8L9.99998 9.10815M18.1 0.108154C17.11 0.108154 16.3 0.918154 16.3 1.90815C16.3 2.53815 16.66 3.16815 17.2 3.43815V13.6082H14.5V11.8082C15.04 11.8082 15.4 11.4482 15.4 10.9082V2.80815C15.4 2.26815 15.04 1.90815 14.5 1.90815H11.08C10.36 0.828154 9.09998 0.108154 7.74998 0.108154C6.39998 0.108154 5.13998 0.828154 4.41998 1.90815H0.999976C0.459976 1.90815 0.0999756 2.26815 0.0999756 2.80815V10.9082C0.0999756 11.4482 0.459976 11.8082 0.999976 11.8082V17.2082C0.999976 17.7052 1.40292 18.1082 1.89998 18.1082H13.6C14.097 18.1082 14.5 17.7052 14.5 17.2082V15.4082H17.2C18.19 15.4082 19 14.5982 19 13.6082V3.43815C19.54 3.16815 19.9 2.53815 19.9 1.90815C19.9 0.918154 19.09 0.108154 18.1 0.108154ZM10.9 15.4082H4.59998V13.6082H10.9V15.4082ZM13.6 10.0082H1.89998V3.70815H13.6V10.0082Z"
        fill="#D68FD6"
      />
    </svg>
  );
  return (
    <>
      <Container fluid>
        <Customheader title="Slots" SVG={SVG} wid="8%" Img={Img1} />
        <Customsearchbar hg="5%" wd="390%" />
        <Custombtn mr="2%" flx="flex-start" />
        <UltraFairCard />
        <CardSwiper classnm="ABC" classnm1="ABCD" />
      </Container>
    </>
  );
};

export default UserAccountSetting;
