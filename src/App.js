import React, { useState, useEffect } from "react";
//router
import LayoutsRoute from "./router/layouts-route";

//scss files
import "./assets/css/bootstrap.min.css";
import "./assets/css/typography.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
// import  './assets/css/custom.css';

function App() {
  const [width, setWidth] = useState(window.screen.width);
  window.addEventListener("resize", function () {
    return setWidth(window.innerWidth);
  });
  useEffect(() => {
    localStorage.setItem("screenWidth", window.screen.width);

    // console.log("screen==>", width);
  }, [width]);
  return (
    <div className="App">
      <LayoutsRoute />
    </div>
  );
}

export default App;
