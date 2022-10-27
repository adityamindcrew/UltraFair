import React, { useState, useRef, useEffect } from 'react'
import { Container, Col, Row, Button, Form, Card, Dropdown, InputGroup } from "react-bootstrap";

const Timer = ({setFormModal2, setFormModal3}) => {

    
    const Ref = useRef(null);

  
    const [timer, setTimer] = useState('00:00');


    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }


    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                // (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }


    const clearTimer = (e) => {

       
        setTimer('00:00');

       
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 147);
        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    const userBtn4 = () => {
        clearTimer(getDeadTime());
        setFormModal2()
        //setFormModal3()
        // setFormModal2(color)
     
    }

    return (
        <div className="App">
            <Row className="mt-3 container">
                <Col xs={6} md={6} className="">
                    <button type="button"
                          className='timer-button'
                        style={{
                            color: "black",
                            fontWeight:'bold',
                            // fontSize:'77%',
                            float:'right',
                            
                      }} 
                        onClick={userBtn4}>Resend</button>
                </Col>
                <Col xs={6} md={6} className="col-box">
                    <span className="timer">{timer}</span>
                </Col>


            </Row>
        </div>
    )
}

export default Timer;
