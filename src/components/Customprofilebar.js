import React from 'react'

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// import Img1 from "../assets/images/Customheader/Headerimg44.png"
import { EmailBoxIconSVG, PhoneIconSVG, BrowserIconSVG, EditIconSVG } from '../views/backend/app/usermanagement/userprofileIcon';

const Customprofilebar = () => {
    return (
        <Row style={{ margin: "0px !important" }}>
            <div className="profiletopbar" style={{ background: "#1E2C37" }}>
                <div className="profilename">
                    Name Surname
                    <div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: "center", width: "" }}>
                        <Button variant="outline-secondary"><EditIconSVG /> <span className='hide-profile-text m-1'>Edit Details</span></Button>{' '}
                    </div>
                </div>
                <div className='profile-list'>
                    <div className="profile-list-item"><EmailBoxIconSVG /><span className='m-2'>example@email.com</span></div>
                    <div className="profile-list-item"><PhoneIconSVG /><span className='m-2'>+27 83 445 5423</span></div>
                    <div className="profile-list-item"><BrowserIconSVG /><span className='m-2'>South Africa </span></div>
                </div>
            </div>



        </Row>
    )
}

export default Customprofilebar
