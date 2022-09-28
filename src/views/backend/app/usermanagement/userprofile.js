import React from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Container,
  ProgressBar,
  Dropdown,
  Form,
} from "react-bootstrap";
import Card from "../../../../components/Card";

import Img1 from "../../../../assets/images/Customheader/Headerimg121.png"
// import CustomToggle from '../../../components/dropdowns'
import CustomToggle from "../../../../components/dropdowns";

//img
import user from "../../../../assets/images/user/1.jpg";
import user1 from "../../../../assets/images/user/06.jpg";
import user2 from "../../../../assets/images/user/07.jpg";
import user3 from "../../../../assets/images/user/08.jpg";
import SearchBar from "../../../../Common/SearchBar";
import UltraFairCard from "../../../../Common/UltraFairCard";
import CardSwiper from "../../../../Common/CardSwiper";
import UltraFairTable from "../../../../Common/UltraFairTable";

const UserProfile = () => {
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
           </Container>
        </>
    )
}


export default UserProfile;
