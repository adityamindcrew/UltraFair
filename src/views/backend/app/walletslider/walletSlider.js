import React, { useState, useEffect } from "react";
import "./walletSlider.css";

export default function WalletSlider(props) {
  console.log("props==>", props.percentageValue);
  const [value, setValue] = useState(0);
  useEffect(() => {
    const ele = document.querySelector(".buble");
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  });
  return (
    <div className="firstDiv">
      <div className="slider-container">
        {/* <div className="value-container">
          <span id="demo" className="buble">
            {`${value}%`}
          </span>
        </div> */}
        <div className="scale">
          <span>0%</span>
          <span>20%</span>
          <span>40%</span>
          <span>60%</span>
          <span>80%</span>
          <span>100%</span>
        </div>
        <input
          className="slider"
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={({ target: { value: radius } }) => {
            setValue(radius);
            props.percentageValue(radius);
          }}
        />
      </div>
    </div>
  );
}
