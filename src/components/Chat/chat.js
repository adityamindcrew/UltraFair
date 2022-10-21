import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { WhiteiconSVG, YellowiconSVG, SaveiconSVG } from './chatIcon';
import Flag from '../../assets/images/Ultrafair/flag.png'
import Crossicon from '../../assets/images/Ultrafair/cross-icon.svg'
import '../Chat/chat.css'
const Chat = () => {
  return (
    <div className='chat_card'>
      <div className='chat-topbar'>
        <div>
          <div className='d-flex justify-content-between'>
            <div><span style={{ marginBlockStart: "5px !important" }} className='m-1'><img src={Flag} height="30px" width="30px" /></span>
              <select className="form-control-dropdown-topbar" id="exampleFormControlSelect2">
                <option style={{ fontSize: "12px !important" }}>English</option>
                <option>Hindi</option>
              </select></div>
            <div>
              <div className="main-circle m-2"><img src={Crossicon} /></div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className='chat_text'>
        <div>
          <div className='userchat-innertext'>
            <div className='d-flex justify-content-between'>
              <div className='chat-inner-left-text d-flex'><span style={{ margin: "0px 5px 10px 0px" }}><YellowiconSVG /></span>user_name003</div>
              <div className='chat-inner-right-text d-flex'>10:30 am</div>
            </div>
            <div className='chat-massage-inner-text'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
          </div>
          <div className='chat-innertext mt-2'>
            <div className='d-flex justify-content-between'>
              <div className='chat-inner-left-text d-flex'><span style={{ margin: "0px 5px 10px 0px" }}><YellowiconSVG /></span>my_username</div>
              <div className='chat-inner-right-text d-flex'>10:30 am</div>
            </div>
            <div className='chat-massage-inner-text'>Lorem ipsum dolor sit amet.</div>
          </div>
          <div className='userchat-innertext mt-2'>
            <div className='d-flex justify-content-between'>
              <div className='chat-inner-left-text d-flex'><span style={{ margin: "0px 5px 10px 0px" }}><WhiteiconSVG /></span>user_name003</div>
              <div className='chat-inner-right-text d-flex'>10:30 am</div>
            </div>
            <div className='chat-massage-inner-text'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
          </div>
          <div className='userchat-innertext mt-2'>
            <div className='d-flex justify-content-between'>
              <div className='chat-inner-left-text d-flex'><span style={{ margin: "0px 5px 10px 0px" }}><YellowiconSVG /></span>user_name003</div>
              <div className='chat-inner-right-text d-flex'>10:30 am</div>
            </div>
            <div className='chat-massage-inner-text'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
          </div>
          <div className='userchat-innertext mt-2'>
            <div className='d-flex justify-content-between'>
              <div className='chat-inner-left-text d-flex'><span style={{ margin: "0px 5px 10px 0px" }}><WhiteiconSVG /></span>user_name003</div>
              <div className='chat-inner-right-text d-flex'>10:30 am</div>
            </div>
            <div className='chat-massage-inner-text'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
          </div>

        </div>

      </div>
      <div className='mt-4'>
        <div classname="d-flex" style={{ display: "flex", margin: "0 10px" }}>
          <div className='col-9'>
            <input type="text" className="text search-input chat-seachbar" placeholder="Type message here..." /> </div>
          <div className='col-2'>
            <button type="button" class="btn-sm save-button"><SaveiconSVG /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;