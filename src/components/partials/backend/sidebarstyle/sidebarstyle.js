import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Accordion, Button } from 'react-bootstrap'
import Scrollbar from 'smooth-scrollbar'
import Crossicon from '../../../../assets/images/Ultrafair/cross-icon.svg'
import logo from '../../../../assets/images/sidebar/UltrafairLogo.png'
import smallLogo from '../../../../assets/images/sidebar/UltrafairSmallLogo.png'
import { UltrafairExclusivesSVG, SlotsSVG, GameShowsSVG, LiveCasinoSVG, NewReleasesSVG, UltrafairOrignalsSVG, FeatureBuySVG, TableGamesSVG, BlackjackSVG, BaccaratSVG, RouletteSVG, ChallengesSVG ,LockupSVG } from './sidebarIcons'
import Flag from '../../../../assets/images/Ultrafair/flag.png'
import logoicon from '../../../../assets/images/Ultrafair/logoicon.png'
import logotext from '../../../../assets/images/Ultrafair/logotext.png'


const minisidbar = () => {
    document.body.classList.toggle('sidebar-main')

}


const SidebarStyle = (props) => {

    //Collapse state
    const [activeMenu, setActiveMenu] = useState(false)
    const [activesubMenu, setSubmenu] = useState(false)
    const [activesubMenu1, setSubmenu1] = useState(false)

    //location
    let location = useLocation();

    useEffect(
        () => {
            Scrollbar.init(document.querySelector('#sidebar-scrollbar'))
        }
    )
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
        if(window.innerWidth  < 1300){
            minisidbar();
        }
      };
      
    return (
        <>
            <div className="iq-sidebar">
            <div className="iq-sidebar-logo d-flex justify-content-between">
                    <Link to="" className="header-logo ml-2" onClick={scrollToTop}>
                    <img src={logoicon} className="img-fluid1 rounded-normal" height="20px" width="20px" onClick={minisidbar} alt=""/>
                    <div className="logo-title">
                        <span className="text-primary text-uppercase"><img src={logotext} className="img-fluid1 rounded-normal"  alt=""/></span>
                    </div>
                    </Link>
                    <div className="iq-menu-bt-sidebar">
                    <div className="iq-menu-bt align-self-center">
                        <div className="wrapper-menu" onClick={minisidbar}>
                            <div className="main-circle"><img  src={Crossicon}/></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="data-scrollbar" data-scroll="1" id="sidebar-scrollbar">
                    <nav className="iq-sidebar-menu">
                        <Accordion as="ul" id="iq-sidebar-toggle" className="iq-menu" onSelect={(e) => setActiveMenu(e)}>
                            <li className={`${location.pathname === '/slots' ? 'active' : ''} `} >
                                <Link to="/slots" className="" onClick={scrollToTop}>
                                    <SlotsSVG />
                                    <span>Slots</span>
                                </Link>
                            </li>
                            <li  className={`${location.pathname === '/live-casino' ? 'active' : ''} `} onClick={scrollToTop}>
                                <Link to="/live-casino" className="">
                                    <LiveCasinoSVG />
                                    <span>Live Casino </span>
                                </Link>
                            </li>

                            <li className={`${location.pathname === '/new-release' ? 'active' : ''} `}>
                                <Link to="/new-release" className="" onClick={scrollToTop}>
                                    <NewReleasesSVG />
                                    <span>New Releases</span>
                                </Link>
                            </li>
                            <li className={`${location.pathname === '/table-games' ? 'active' : ''} `}>
                                <Link to="/table-games" className="" onClick={scrollToTop}>
                                    <TableGamesSVG />
                                    <span>Table Games</span>
                                </Link>
                            </li>
                            <li className={`${location.pathname === '/blackjack' ? 'active' : ''} `}>
                                <Link to="/blackjack" className="" onClick={scrollToTop}>
                                    <BlackjackSVG />
                                    <span>Blackjack</span>
                                </Link>
                            </li>
                            <li className={`${location.pathname === '/baccarat' ? 'active' : ''} `}>
                                <Link to="/baccarat" className="" onClick={scrollToTop}>
                                    <BaccaratSVG />
                                    <span>Baccarat </span>
                                </Link>
                            </li>
                            <li className={`${location.pathname === '/roulette' ? 'active' : ''} `}>
                                <Link to="/roulette" className="" onClick={scrollToTop}>
                                    <RouletteSVG />
                                    <span>Roulette</span>
                                </Link>
                            </li>
                            <li style={{ border: '1px solid #344452', margin: "10px", background: '#344452' }}></li>
                            <li className={`${location.pathname === '/lockup' ? 'active' : ''} `}>
                                <Link to="/lockup" className="" onClick={scrollToTop}>
                                    <LockupSVG />
                                    <span>Lockup </span>
                                </Link>
                            </li>
                            <li style={{ border: '1px solid #344452', margin: "10px", background: '#344452' }}></li>

                            <li className={`${location.pathname === '/blog' ? 'active' : ''} `}>
                                <Link to="/blog" className="iq-waves-effect" onClick={scrollToTop}>
                                    <span>Blog</span>
                                </Link>
                            </li>
                            <li className={`${location.pathname === '/live-support' ? 'active' : ''} `}>
                                <Link to="/live-support" className="iq-waves-effect" onClick={scrollToTop}>
                                    <span>Live Support</span>
                                </Link>
                            </li>
                            <li className={`${location.pathname === '' ? 'active' : ''} `}>
                                <Link to="" className="">
                                    <img src={Flag} height="30px" width="30px" />
                                    <div><select className="form-control-dropdown" id="exampleFormControlSelect2">
                                        <option style={{fontSize: "12px !important"}}>English</option>
                                        <option>Hindi</option>
                                    </select></div>
                                </Link>
                            </li>
                        </Accordion>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default SidebarStyle;
