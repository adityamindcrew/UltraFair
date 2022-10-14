import React from 'react'

import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Customsearchbar({hg,wd}) {
  return (
    <div className="iq-search-bar ml-auto Searchtext1 Searcbr" style={{width:"100%",marginTop:"7%",padding:0}}   >
                    <Form action="#" className="searchbox Searchtext1" style={{backgroundRadius:"25px",width:"100%"}} >
                        <input type="text" className="text search-input " style={{width:"100%",background:"#13212D",borderRadius:"25px",height:"44px"}} placeholder="Search your game"/>
                        <Link className="search-link" to="#"><i className="ri-search-line"></i></Link>
                    </Form>
                </div>
  )
}

export default Customsearchbar