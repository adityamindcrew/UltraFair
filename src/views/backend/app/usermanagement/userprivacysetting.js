import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardSwiper from "../../../../Common/CardSwiper";
import SearchBar from "../../../../Common/SearchBar";
import UltraFairTable from "../../../../Common/UltraFairTable";
import UltraFairCard from "../../../../Common/UltraFairCard";

import Img1 from "../../../../assets/images/Customheader/Headerimg.2.png"
const UserPrivacySetting = () => {
  return (
    <>
      <Container fluid>

        <SearchBar />
        <br />
        <UltraFairCard />
        <br />
        <CardSwiper />
        <UltraFairTable />

      </Container>
    </>
  );
};

export default UserPrivacySetting;
