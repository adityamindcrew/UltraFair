import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Nav, NavDropdown } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import { BitCoinSVG, QRSVG, DownArrow } from "../../../views/backend/main/dashboardIcons";
import QRCode from "../../../assets/images/QR.jpg"
import Refresh from "../../../assets/images/refresh.png"
import CopyIcon from "../../../assets/images/copy.png"

export const form1 = () => {



    return (
        <div className="container">

            <div className="text-center" style={{ marginTop: 20, marginBottom: 20 }}>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="dropdown-wallet">
                        <span className="wallet-bitcoin"><BitCoinSVG /></span> BTC &nbsp; 
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </div>



            <div className="wallet-Text">
                <span>Your BTC Deposit Address</span>
            </div>
            <Row>
                <div className="wallet-address-deposit">
                    <div className="wallet-link">
                        <span>3JZ9uHgrt566Yhfyuk9467xFFk998ILlkh</span>
                    </div>
                    <div className="wallet-icons-1">
                        <img variant="top" className="img-responsive refresh-icon" src={Refresh} />
                    </div>
                    <span style={{color:'black', paddingRight:10}}>|</span>
                    <div className="wallet-icons-2">
                        <img variant="top" className="img-responsive refresh-icon" src={CopyIcon} />
                    </div>

                </div>
            </Row>

            <div className="img-responsive text-center" style={{ justifyContent: 'center', alignItems: 'center', justifyItems: 'center' }}>

                <img variant="top" className="img-responsive mb-3" src={QRCode} style={{ width: '12rem', backgroundColor: 'white', padding: 5, borderRadius: 8 }} />


            </div>
            <div className="text-center">
                <p>Only send BTC to this address, 1 confirmation required</p>

            </div>

        </div>
    )
}

export const form2 = (props) => {
    return (
        <div className="Wallet-2 container">
            <div className="text-center" style={{ marginTop: 20, marginBottom: 20 }}>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="dropdown-wallet">
                        0.000000&nbsp; <span className="wallet-bitcoin"><BitCoinSVG /></span>  &nbsp; 
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </div>


            <div className="">
                <Form.Group>
                    <Form.Label>BTC Address</Form.Label>
                    <Form.Label style={{ color: "red", marginLeft: "7px" }}>
                        {" "}
                        *
                    </Form.Label>
                    <Form.Control
                        type="email"
                        className="mb-0"
                        id="exampleInputEmail1"
                        placeholder=""
                        autoComplete="off"
                        required
                        style={{ width: '100%' }}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Amount</Form.Label>
                    <Form.Label style={{ color: "red", marginLeft: "7px" }}>
                        {" "}
                        *
                    </Form.Label>
                    <Form.Label style={{ float: 'right' }}>$0.00</Form.Label>
                    <InputGroup className="mb-3 ammount-wallet" style={{ borderRadius: 5 }}>

                        <Form.Control aria-label="Amount (to the nearest dollar)" className="form-control" />
                        <div style={{ position: 'absolute', right: 55, top: 10, backgroundColor: "orange", paddingRight: 8, paddingLeft: 8, borderRadius: 40 }}>
                            <BitCoinSVG />
                        </div>
                        <InputGroup.Text style={{ color: '#11ffbd' }}>Max</InputGroup.Text>
                    </InputGroup>
                </Form.Group>
            </div>
            <div className="wallet-info text-center mt-5">
                <Button
                    type="button"
                    variant="btn btn-primary"
                    style={{
                        color: "black",
                        width: '100%',

                    }}

                >
                    Withdraw
                </Button>

            </div>
            {/* <div className="text-center mt-4">
                <p style={{textAlign:'center'}}>Minimum Withdrawal is 0.00020000. Your withdrawal will have 0.00007000 subtracted from your remaining balance to cover the required to process the transaction.</p>

            </div> */}


        </div>

    )
}

export const form3 = () => {
    return (
        <div>
            <div className="container">
                <Form.Label>Amount</Form.Label>
                <InputGroup className="">
                    <Form.Control aria-label="Text input with dropdown button" />

                    <div className="dropdown" style={{ backgroundColor: 'black' }}>
                        <span>
                            dropdown
                        </span>
                    </div>
                </InputGroup>

                <Form.Label>Amount</Form.Label>
                <InputGroup className="">
                    <Form.Control aria-label="Text input with dropdown button" />

                    <div className="dropdown" style={{ backgroundColor: 'black' }}>
                        <span>
                            dropdown
                        </span>
                    </div>
                </InputGroup>
                <div className="wallet-info text-center mt-5">
                    <Button
                        type="button"
                        variant="btn btn-primary"
                        style={{
                            color: "black",
                            width: '100%',

                        }}

                    >
                        Withdraw
                    </Button>

                </div>

            </div>

        </div>
    )
}
export const form4 = () => {
    return (
        <div className="Wallet-2 container">
            <Form>
                <div style={{ marginTop: 20, marginBottom: 20 }}
                    className="text-center">

                    <DropdownButton
                        variant="outline-secondary"
                        title="Bitcoin"
                        id="input-group-dropdown-1"

                    >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className="">
                    <Form.Group>
                        <Form.Label>BTC Address</Form.Label>
                        <Form.Label style={{ color: "red", marginLeft: "7px" }}>
                            {" "}
                            *
                        </Form.Label>
                        <Form.Control
                            type="email"
                            className="mb-0"
                            id="exampleInputEmail1"
                            placeholder=""
                            autoComplete="off"
                            required
                            style={{ width: '100%', borderColor: 'powderblue' }}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Amount</Form.Label>
                        <Form.Label style={{ color: "red", marginLeft: "7px" }}>
                            {" "}
                            *
                        </Form.Label>
                        <Form.Label style={{ float: 'right' }}>$0.00</Form.Label>
                        <InputGroup className="mb-3" style={{ backgroundColor: 'black', borderRadius: 5 }}>

                            <Form.Control aria-label="Amount (to the nearest dollar)" className="form-control" />
                            <InputGroup.Text style={{ color: 'green' }}>MaX</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                </div>
                <div className="wallet-info text-center mt-5">
                    <Button
                        type="button"
                        variant="btn btn-primary"
                        style={{
                            color: "black",
                            width: '100%',

                        }}

                    >
                        Withdraw
                    </Button>

                </div>

                <div className="wallet-switch mt-3">
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Public"


                    />
                    <label style={{ position: 'relative', left: 35 }}></label>
                </div>

            </Form>

        </div>

    )
}





export default function Name() {
    const [walletBtn, setWalletbtn] = useState("btn1-wallet")

    const WalletbtnColorhandles = (color) => {
        setWalletbtn(color)
        console.log('dsklfjsdl')
    }

    return (
        <div>

            {/* <Row style={{ marginLeft: "0px" }} xl="20">
                <div className="walletTab container" style={{
                    background: "#13212D", borderRadius: "30px", width: '90%', padding: 5, textAlign: 'center',
                    marginTop: "3%", marginBottom: "3%", display: "flex", justifyContent: "center"
                }}   >
                     <button className='WalletButtonText' style={{ background: walletBtn === "btn1" ? '#344452' : "#13212D", padding: "1px", borderRadius: "30px", color: "white", border: walletBtn === "btn1" ? "1px solid #344452" : "0px", boxShadow: "none", display: "flex", justifyContent: "space-around", alignItems: "center", paddingLeft: 10, paddingRight: 10, marginRight: 12}} onClick={() => WalletbtnColorhandles("btn1")}>Deposit</button>
                    <button className='WalletButtonText' style={{ background: walletBtn === "btn2" ? '#344452' : "#13212D", padding: "10px", borderRadius: "30px", color: "white", border: walletBtn === "btn2" ? "1px solid #344452" : "0px", boxShadow: "none", display: "flex", justifyContent: "space-around", alignItems: "center", paddingLeft: 10, paddingRight: 10, marginRight: 12}} onClick={() => WalletbtnColorhandles("btn2")}>Withdraw</button>
                    <button className='WalletButtonText' style={{ background: walletBtn === "btn3" ? '#344452' : "#13212D", padding: "10px", borderRadius: "23px", color: "white", border: walletBtn === "btn3" ? "1px solid #344452" : "0px", boxShadow: "none", display: "flex", justifyContent: "space-around", alignItems: "center", paddingLeft: 10, paddingRight: 10, marginRight: 12 }} onClick={() => WalletbtnColorhandles("btn3")}>Buy Crypto</button>
                    <button className='WalletButtonText' style={{ background: walletBtn === "btn4" ? '#344452' : "#13212D", padding: "10px", borderRadius: "30px", color: "white", border: walletBtn === "btn4" ? "1px solid #344452" : "0px", boxShadow: "none", display: "flex", justifyContent: "space-around", alignItems: "center", paddingLeft: 15, paddingRight: 15, marginRight: 2}} onClick={() => WalletbtnColorhandles("btn4")}>Tip</button>

                </div>
            </Row> */}
            <Row style={{ marginLeft: "0px" }}>
                <div className="walletTab container text-center" style={{
                    background: "#13212D", borderRadius: "30px", width: '100%', padding: 5, textAlign: 'center',
                    marginTop: "1%", marginBottom: "3%", display: "flex",position:'relative', right:10
                }}   >
                    <button className='WalletButtonText' style={{ background: walletBtn === "btn1-wallet" ? '#344452' : "#13212D", padding: "1px", borderRadius: "30px", color: "white", border: walletBtn === "btn1-wallet" ? "1px solid #344452" : "0px", boxShadow: "none", display: "flex", justifyContent: "space-around", alignItems: "center", paddingLeft: 10, paddingRight: 10, marginRight: 12 }} onClick={() => WalletbtnColorhandles("btn1-wallet")}>Deposit</button>

                    <button className='WalletButtonText' style={{ background: walletBtn === "btn2-wallet" ? '#344452' : "#13212D", padding: "1px", borderRadius: "30px", color: "white", border: walletBtn === "btn2-wallet" ? "1px solid #344452" : "0px", boxShadow: "none", display: "flex", justifyContent: "space-around", alignItems: "center", paddingLeft: 10, paddingRight: 10, marginRight: 12 }} onClick={() => WalletbtnColorhandles("btn2-wallet")}>Withdraw</button>
                    <button className='WalletButtonText' style={{ background: walletBtn === "btn3" ? '#344452' : "#13212D", padding: "1px", borderRadius: "23px", color: "white", border: walletBtn === "btn3" ? "1px solid #344452" : "0px", boxShadow: "none", display: "flex", justifyContent: "space-around", alignItems: "center", paddingLeft: 10, paddingRight: 10, marginRight: 12 }} onClick={() => WalletbtnColorhandles("btn3")}>Buy Crypto</button>
                    <button className='WalletButtonText' style={{ background: walletBtn === "btn4" ? '#344452' : "#13212D", padding: "1px", borderRadius: "30px", color: "white", border: walletBtn === "btn4" ? "1px solid #344452" : "0px", boxShadow: "none", display: "flex", justifyContent: "space-around", alignItems: "center", paddingLeft: 10, paddingRight: 10, marginRight: 2 }} onClick={() => WalletbtnColorhandles("btn4")}>Tip</button>

                </div>
            </Row>

            <div className="container">
                {walletBtn === "btn1-wallet" ?
                    <div>
                        {form1()}
                    </div>
                    : walletBtn === "btn2-wallet" ?
                        <div>
                            {form2()}
                        </div>
                        : walletBtn === "btn3-wallet" ?
                            <div>
                                {form3()}
                            </div> :
                            <div> {form4()}</div>
                }
            </div>
        </div>
    )
}

