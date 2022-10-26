import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import {Container,Col,Row }from 'react-bootstrap'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { rtlModeAction, getRtlMode } from '../../../../store/mode/rtlmode'
import '../../../../assets/css/Ultrafair/footerstyle.css'
import '../../../../assets/css/Ultrafair/bottombarstyle.css'
// icon 

import Vector from '../../../../assets/images/Ultrafair/Vector.png'
import Flag from '../../../../assets/images/Ultrafair/flag.png'
import Ultrafair from '../../../../assets/images/sidebar/UltrafairLogo.png'
import { BitcoinsSVG ,TetherSVG , CurvedaotokenSVG , UsdcoinSVG, DailogoSVG, EtheremcoinsSVG} from './footerIcons';

import Bottombarstyle from '../bottombarstyle/bottombarstyle';

const mapStateToProps = (state) => {
  return {
    rtlMode: getRtlMode(state)
  };


}
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(
        {
            rtlModeAction
        },
        dispatch
    )
})

const FooterStyle = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const rtlMode = sessionStorage.getItem("rtl-mode");
    if (rtlMode === null) {
      props.rtlModeAction(props.rtlMode);
    } else {
      props.rtlModeAction(rtlMode);
    }
  });

  return (
    <>
      <div className={`rtl-box ${show === true ? 'show' : ''}`} >
        <button type="button" className="btn btn-light rtl-btn">
          <svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 20 20" fill="white">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="rtl-panel">
          <ul className="modes">
            <li className="dir-btn" data-mode="rtl" data-active="false" onClick={() => { props.rtlModeAction('ltl') }} data-value="ltr"><Link to="#">LTR</Link></li>
            <li className="dir-btn" data-mode="rtl" data-active="true" onClick={() => { props.rtlModeAction('rtl') }} data-value="rtl"><Link to="#">RTL</Link></li>
          </ul>
        </div>
      </div>
                <footer className="iq-footer">
                <div className="container-fluid">
                    <div class="contain">
          <div class="col">
            <h1>Casino</h1>
            <ul>
              <li>Games</li>
              <li>VIP Clubs</li>
              <li>prmotions</li>
            </ul>
          </div>
          <div class="col">
            <h1>Supports</h1>
            <ul>
              <li>Fairness</li>
              <li>Affiliate</li>
              <li> <div className='d-flex flex-row'>Gamble Aware  <div style={{marginLeft : "5px"}}><img src={Vector} height="12px" width="12px" /></div></div></li>
              <li>Live Support</li>
              <li> <div className='d-flex flex-row'>Help Center  <div className='ml-2'><img src={Vector} height="12px" width="12px" /></div></div></li>
            </ul>
          </div>
          <div class="col">
            <h1>Community</h1>
            <ul>
              <li>Blog</li>
              <li> <div className='d-flex flex-row'>Forum <div className='ml-2'><img src={Vector} height="12px" width="12px" /></div></div></li>
              <li> <div className='d-flex flex-row'>Facebook<div className='ml-2'><img src={Vector} height="12px" width="12px" /></div></div></li>
              <li> <div className='d-flex flex-row'>Twitter<div className='ml-2'><img src={Vector} height="12px" width="12px" /></div></div></li>
              <li> <div className='d-flex flex-row'>Instagram<div className='ml-2'><img src={Vector} height="12px" width="12px" /></div></div></li>
              <li> <div className='d-flex flex-row'>YouTube<div className='ml-2'><img src={Vector} height="12px" width="12px" /></div></div></li>
              <li> <div className='d-flex flex-row'>Shop<div className='ml-2'><img src={Vector} height="12px" width="12px" /></div></div></li>
            </ul>
          </div>
          <div class="col">
            <h1>About Us</h1>
            <ul>
              <li>Privacy Policy</li>
              <li>Licenses</li>
              <li>AML Policy</li>
              <Link to='/terms-and-conditions'><li>Terms of Service</li></Link>
              <li>Self Exclusion</li>
            </ul>
          </div>
          <div class="col col-hide" >
            <h1>Language</h1>
            <ul>
              <li> <div className='d-flex flex-row '><div className='pt-1 mt-1'><img src={Flag} height="25px" width="25px" /></div>         <select className="form-control" style={{width : "110px !important"}} id="exampleFormControlSelect2">
                <option >English</option>
                <option>Hindi</option>
              </select></div></li>
              <li className='laguagetext'>Odds</li>
              <li><div style={{ width: "114px", marginLeft: "-5px", padding : "0" }}><select style={{padding : "0"  , marginInlineStart : "-5px !important" ,width : "110px !important"}} className="form-control" id="exampleFormControlSelect2">
                <option >Decimal</option>
                <option>Number</option>
              </select></div><div className='mr-2 pt-4'></div> </li>
            </ul>
          </div>
          <div class="clearfix"></div>
          <hr class="linedesign"></hr>

          <div className='p-2'>
            <center className="pb-4"><img src={Ultrafair} /></center>
            <center className="pb-4 d-flex justify-content-center"> <div className='m-2'>< BitcoinsSVG /></div><div className='m-2'><EtheremcoinsSVG /></div><div className='m-2'> <UsdcoinSVG /></div><div className='m-2'> <TetherSVG /></div><div className='m-2'> <DailogoSVG /></div><div className='m-2'> <CurvedaotokenSVG /></div></center>
            <center><p className='mainfootertext'>© 2022 Ultrafair.com | All Rights Reserved.</p></center>
            <center><h5 className='mb-4 mainfootertext'>1 BTC = $22,624.43</h5></center>
            <center>
              <div className='footertext'>
                Ultrafair is owned and operated by Medium Rare N.V., registration number: 145353, registered address: Fransche Bloemweg, 4 Willemstad Curaçao. Contact us at mailto:support@ultrafair.com. Payment agent company is Medium Rare Limited with address 7-9 Riga Feraiou, LIZANTIA COURT, Office 310, Agioi Omologites, 1087 Nicosia, Cyprus and Registration number: HE 410775 Stake is authorized and regulated by the Government of Curacao and operates under License No. 8048/JAZ issued to Antillephone. Stake has passed all compliance and is legally authorized to conduct gaming operations for all games of chance and wagering.
              </div></center>
          </div>
        </div>
        </div>
            </footer>   

    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterStyle)
