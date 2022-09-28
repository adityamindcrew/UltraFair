import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardSwiper from "../../../../Common/CardSwiper";
import SearchBar from "../../../../Common/SearchBar";
import UltraFairTable from "../../../../Common/UltraFairTable";
import UltraFairCard from "../../../../Common/UltraFairCard";

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
