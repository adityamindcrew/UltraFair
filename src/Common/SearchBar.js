import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function SearchBar(wd) {
  return (
    // <div
    //   className="iq-search-bar ml-auto Searchtext1"
    //   style={{ width: "100%" }}
    // >
    //   <Form
    //     action="#"
    //     className="searchbox Searchtext1"
    //     style={{ backgroundRadius: "25px" }}
    //   >
    //     <input
    //       type="text"
    //       className="text search-input TEXTINPUT"
    //       style={{
    //         width: "325%",
    //         background: "#13212D",
    //         borderRadius: "25px",
    //         height: "44px",
    //       }}
    //       placeholder="Search your game"
    //     />
    //     <Link className="search-link" to="#">
    //       <i className="ri-search-line"></i>
    //     </Link>
    //   </Form>
    // </div>

      <div className="iq-search-bar ml-auto Searchtext1" style={{width:"100%",marginTop:"2%"}}   >
    <Form action="#" className="searchbox Searchtext1" style={{backgroundRadius:"25px"}} >
        <input type="text" className="text search-input TEXTINPUT" style={{width:"325%",background:"#13212D",borderRadius:"25px",height:"44px",}} placeholder="Search your game"/>
        <Link className="search-link" to="#"><i className="ri-search-line" style={{color:"#5B6F84",}}></i></Link>
    </Form>
</div>
 
  );
}

export default SearchBar;
