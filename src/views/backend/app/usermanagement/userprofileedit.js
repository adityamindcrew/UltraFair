import React from "react";
import { Container, Row, Col, Tab, Form, Button, Nav } from "react-bootstrap";
import Card from "../../../../components/Card";
import { Link } from "react-router-dom";

import Img1 from "../../../../assets/images/Customheader/Headerimg44.png";

//img
import user1 from "../../../../assets/images/user/1.jpg";
import Customheader from "../../../../components/Customheader";
import Custombtn from "../../../../components/Custombtn";
import Customsearchbar from "../../../../components/Customsearchbar";
import UltraFairCard from "../../../../Common/UltraFairCard";
import CardSwiper from "../../../../Common/CardSwiper";

const UserProfileEdit = () => {
  const SVG = (
    <svg
      width="25"
      height="25"
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0.108154C10.21 0.108154 12 1.89815 12 4.10815C12 6.31815 10.21 8.10815 8 8.10815C5.79 8.10815 4 6.31815 4 4.10815C4 1.89815 5.79 0.108154 8 0.108154ZM12 10.6482C12 11.7082 11.72 14.1782 9.81 16.9382L9 12.1082L9.94 10.2282C9.32 10.1582 8.67 10.1082 8 10.1082C7.33 10.1082 6.68 10.1582 6.06 10.2282L7 12.1082L6.19 16.9382C4.28 14.1782 4 11.7082 4 10.6482C1.61 11.3482 0 12.6082 0 14.1082V18.1082H16V14.1082C16 12.6082 14.4 11.3482 12 10.6482Z"
        fill="#11FFBD"
      />
    </svg>
  );

  return (
    <>
      <Container fluid>
        <Customheader Headercls="Headertitle" title="Live Casino" SVG={SVG} wid="14%" Img={Img1} />
        <Customsearchbar hg="7%" wd="390%" />
        <Custombtn mr="2%" flx="flex-start" />
        <UltraFairCard />
        <CardSwiper classnm="AxC" classnm1="AxCD" />
      </Container>
    </>
  );
};

export default UserProfileEdit;
