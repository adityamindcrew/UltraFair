import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Nav, NavDropdown } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import { BitCoinSVG, QRSVG, DownArrow, BitcoinsSVG2, BitcoinsSVG3, BitcoinsSVG4, UsdcoinSVG3} from "../../../views/backend/main/dashboardIcons";
import QRCode from "../../../assets/images/QR.jpg"
import Refresh from "../../../assets/images/refresh.png"
import CopyIcon from "../../../assets/images/copy.png"

export const form1 = () => {



    return (
        <div className="">

            <div className="text-center" style={{ marginTop: 20, marginBottom: 20 }}>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="dropdown-wallet">
                        <span className="wallet-bitcoin-dropdown-1"><BitcoinsSVG4 /></span> BTC &nbsp; <DownArrow/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </div>



            <div className="wallet-Text container">
                <span>Your BTC Deposit Address</span>
            </div>
            <Row className="wallet-QR-row">
                <div className="wallet-address-deposit">
                    <div className="wallet-link">
                        <span>3JZ9uHgrt566Yhfyuk9467xFFk998ILlkh</span>
                    </div>
                    <div className="wallet-icons-1">
                        <img variant="top" className="img-responsive refresh-icon" src={Refresh} />
                    </div>
                    <span style={{ color: 'black', paddingRight: 10 }}>|</span>
                    <div className="wallet-icons-2">
                        <img variant="top" className="img-responsive refresh-icon" src={CopyIcon} />
                    </div>

                </div>
            </Row>

            <div className="img-responsive text-center mt-2" style={{ justifyContent: 'center', alignItems: 'center', justifyItems: 'center' }}>

                <img variant="top" className="img-responsive mb-3" src={QRCode} style={{ width: '11rem', backgroundColor: 'white', padding: 5, borderRadius: 8 }} />


            </div>
            <div className="text-center">
                <p>Only send BTC to this address, 1 confirmation required</p>

            </div>

        </div>
    )
}

export const form2 = (props) => {
    return (
        <div className="container mb-4">
            <div className="text-center" style={{ marginTop: 20, marginBottom: 20 }}>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="dropdown-wallet">
                        0.000000&nbsp; <span className="wallet-bitcoin-dropdown-1"><BitcoinsSVG4 /></span>  &nbsp; <DownArrow/>
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
                    <Form.Label>   <span className="wallet-bitcoin-dropdown-1"><BitcoinsSVG4 /></span> BTC Address</Form.Label>
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
                        <div style={{ position: 'absolute', right: 48, top: 10, paddingRight: 8, paddingLeft: 8}}>
                            <BitcoinsSVG4 />
                        </div>
                        <InputGroup.Text style={{ color: '#11ffbd', fontFamily:'Montserrat', fontSize:15 }}>Max</InputGroup.Text>
                    </InputGroup>
                </Form.Group>
            </div>
            <div className="wallet-info text-center mt-4">
                <Button
                    type="button"
                    variant="btn btn-primary"
                    className="wallet-Button"
                    style={{
                        color: "black",
                        width: '100%',
                        paddingTop:13,
                        paddingBottom:13,
                        fontFamily:'Montserrat',

                    }}

                >
                    Withdraw
                </Button>

            </div>
            <div className=" text-left mt-3 wallet-paragraph">
                <span style={{textAlign:'center'}}>Minimum Withdrawal is 0.00020000 <BitcoinsSVG4/> .
                Your withdrawal will have <br/> 0.00007000 <BitcoinsSVG4/> subtracted from your remaining balance to cover <br/>the required to process the transaction.</span>

            </div>


        </div>

    )
}

export const form3 = () => {
    return (

        <div className="container mt-3 mb-4">

            <Form.Label style={{ marginTop: 20 }}>Buy Bitcoin</Form.Label>
            <div style={{ backgroundColor: "#0D1D29", borderRadius: 5 }}>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="0.0000"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <div style={{ backgroundColor: '#344452', borderBottomRightRadius: 5, borderTopRightRadius: 5 }}>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className="dropdown-wallet-2" style={{fontSize: 13, fontFamily:'Montserrat'}}>
                                <span className="walletBitcoin"><BitcoinsSVG4/></span> BTC &nbsp; <DownArrow/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </InputGroup>
            </div>

            

            <Form.Label>Pay with USDC</Form.Label>
            <div style={{ backgroundColor: "#0D1D29", borderRadius: 5 }}>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="0.0000"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <div style={{ backgroundColor: '#344452', borderBottomRightRadius: 5, borderTopRightRadius: 5 }}>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className="dropdown-wallet-3"
                            style={{fontSize: 12, fontFamily:'Montserrat'}}>
                                <span className="walletBitcoin"><UsdcoinSVG3 /></span> USDC &nbsp; <DownArrow/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </InputGroup>
            </div>

            <div className="wallet-info text-center mt-5">
                <Button
                    type="button"
                    variant="btn btn-primary"
                    className="wallet-Button"
                    style={{
                       color:'black'

                    }}

                >
                    Buy via MoonPay
                </Button>

            </div>

        </div>


    )
}
export const form4 = () => {
    
    return (
        <div className="Wallet-2 container mb-4">
            <Form>
                <div className="text-center" style={{ marginTop: 20, marginBottom: 20 }}>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className="dropdown-wallet">
                            0.000000&nbsp; <span className="wallet-bitcoin-dropdown-2"><BitcoinsSVG4/></span>  &nbsp; <DownArrow/>
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
                        <Form.Label>Name</Form.Label>
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
                            style={{ width: '100%', }}
                        />
                    </Form.Group>
                    <Form.Group style={{ marginTop: 20 }}>
                        <Form.Label>Amount</Form.Label>
                        <Form.Label style={{ color: "red", marginLeft: "7px" }}>
                            {" "}
                            *
                        </Form.Label>
                        <Form.Label style={{ float: 'right' }}>$0.00</Form.Label>
                        <InputGroup className="mb-3 ammount-wallet"
                            style={{ borderRadius: 5 }}>

                            <Form.Control aria-label="Amount (to the nearest dollar)" className="form-control" placeholder="0.00" />
                            <div style={{ position: 'absolute', right: 48, top: 10,  paddingRight: 8, paddingLeft: 0, borderRadius: 40 }}>
                                <BitcoinsSVG4 />
                            </div>
                            <InputGroup.Text style={{ color: '#11ffbd',fontFamily:'Montserrat', fontSize: 14 }}>Min</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                </div>

                <div className="wallet-switch mt-4">
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Public"


                    />
                    <label style={{ position: 'relative', left: 35 }}>Tip will be appear in global chat message</label>
                </div>

                <div className="wallet-info text-center mt-4">
                    <Button
                        type="button"
                        variant="btn btn-primary"
                        className="wallet-Button"
                       onClick={() => { console.log("click")}}
                        style={{
                            color: "black",
                            width: '100%',
                            paddingTop:12,
                            paddingBottom:12,
                            fontFamily:'Montserrat',
                        }}>
                        Send Tip
                    </Button>

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
            <Row className="row-wallet">
                <div className="walletTab container text-center"   >
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
                        : walletBtn === "btn3" ?
                            <div>
                                {form3()}
                            </div> :
                            <div> {form4()}</div>
                }
            </div>
        </div>
    )
}

