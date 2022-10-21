import React from 'react';

// Partials
import HeaderStyle1 from '../../components/partials/backend/headerstyle/headerstyle1';
import SidebarStyle from '../../components/partials/backend/sidebarstyle/sidebarstyle'
import FooterStyle from '../../components/partials/backend/footerstyle/footerstyle'
import Bottombarstyle from '../../components/partials/backend/bottombarstyle/bottombarstyle';
import '../../../src/assets/css/Ultrafair/bottombarstyle.css'
// Router Component
import Layout1Route from '../../router/layout1-route'
import Chat from '../../components/Chat/chat';
import chat from '../../assets/images/Ultrafair/chat.svg'
import search from '../../assets/images/Ultrafair/search.svg'
import toggle from '../../assets/images/Ultrafair/toggle.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Layout1 = () => {
    const [showchat, setShowchat] = useState(false);
    const minisidbar = () => {
        document.body.classList.toggle("sidebar-main");
    };

    return (
        <>
            <div className="wrapper">
                <SidebarStyle />
                <HeaderStyle1 />
                <div className="content-page" id="content-page">
                    <Layout1Route />
                </div>
            </div>
            {showchat ? '' : <FooterStyle />}
            <nav class="navigation-bar" style={{ positon: 'sticky', zIndex: 99 }}>
                <div className='d-flex maindiv justify-content-evenly'>
                    <div className='m-2' onClick={minisidbar}>
                        <img src={toggle} />
                        <div> Menu</div>
                    </div>
                    <div className='m-2 '>
                        <img src={search} />
                        <div>
                            Search</div>
                    </div>
                    <div className='m-2'>
                        <Link to="/chat" onClick={setShowchat(!showchat)}>
                            <img src={chat} />
                            <div style={{ color: "#D1D0CF" }}>
                                Chat</div></Link>
                    </div></div>
            </nav>
        </>
    )
}


export default Layout1;