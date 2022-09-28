import React from "react";
import {
  Col,
  Row,
  Container,
  ProgressBar,
  Dropdown,
  Form,
  Card,
} from "react-bootstrap";
import Blackjack from "../assets/images/Ultrafair/Blackjack.svg";
import SweetBon from "../assets/images/Ultrafair/Sweetbon.svg";
import Bitcion from "../assets/images/Ultrafair/Bitcion.svg";
import BitcionLogo from "../assets/images/Ultrafair/Bitcoin-logo.png";

function UltraFairTable() {
  return (
    <div>
      <Card.Body>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr className="text-color">
                <th style={{ width: "18%" }}>Game</th>
                <th style={{ width: "15%" }}>User</th>
                <th style={{ width: "15%" }}>Time</th>
                <th className="text-right" style={{ width: "18%" }}>
                  Bet Amount
                </th>
                <th className="text-right" style={{ width: "15%" }}>
                  Multiplier
                </th>
                <th className="text-right" style={{ width: "15%" }}>
                  Payout
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="media align-items-center">
                    <div className="iq-movie">
                      <img src={Blackjack} height="20px" width="20px" />
                    </div>
                    <div className="media-body text-color text-left ml-3">
                      Blackjackdfcccccccccccccc
                    </div>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="media align-items-center">
                    <div className="iq-movie">
                      <img src={SweetBon} height="20px" width="20px" />
                    </div>
                    <div className="media-body text-color text-left ml-3">
                      SweetBon
                    </div>
                  </div>
                </td>
                <td className="timetextcolor">10:01 AM</td>
                <td className="left-text-color ">
                  <div>
                    {" "}
                    0.00023202302331
                    <img
                      src={BitcionLogo}
                      style={{ marginLeft: "10px" }}
                      height="20px"
                      width="20px"
                    />
                  </div>
                </td>

                <td className="left-text-color">0.00x</td>
                <td className="left-text-color ">
                  <div>
                    {" "}
                    -0.103293093304
                    <img
                      src={BitcionLogo}
                      style={{ marginLeft: "10px" }}
                      height="20px"
                      width="20px"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="media align-items-center">
                    <div className="iq-movie">
                      <img src={Blackjack} height="20px" width="20px" />
                    </div>
                    <div className="media-body text-color text-left ml-3">
                      Buffalo King{" "}
                    </div>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="media align-items-center">
                    <div className="iq-movie">
                      <img src={SweetBon} height="20px" width="20px" />
                    </div>
                    <div className="media-body text-color text-left ml-3">
                      SweetBon
                    </div>
                  </div>
                </td>
                <td className="timetextcolor">10:01 AM</td>
                <td className="left-text-color ">
                  <div>
                    {" "}
                    0.00445600
                    <img
                      src={BitcionLogo}
                      style={{ marginLeft: "10px" }}
                      height="20px"
                      width="20px"
                    />
                  </div>
                </td>

                <td className="left-text-color">22.00x</td>
                <td className="left-text-greencolor">
                  <div style={{ color: "#11FFBD !important" }}>
                    0.09803200
                    <img
                      src={BitcionLogo}
                      style={{ marginLeft: "10px" }}
                      height="20px"
                      width="20px"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="media align-items-center">
                    <div className="iq-movie">
                      <img src={Blackjack} height="20px" width="20px" />
                    </div>
                    <div className="media-body text-color text-left ml-3">
                      Blackjack
                    </div>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="media align-items-center">
                    <div className="iq-movie">
                      <img src={SweetBon} height="20px" width="20px" />
                    </div>
                    <div className="media-body text-color text-left ml-3">
                      SweetBon
                    </div>
                  </div>
                </td>
                <td className="timetextcolor">10:01 AM</td>
                <td className="left-text-color ">
                  <div>
                    {" "}
                    23549.99908
                    <img
                      src={BitcionLogo}
                      style={{ marginLeft: "10px" }}
                      height="20px"
                      width="20px"
                    />
                  </div>
                </td>

                <td className="left-text-color">2.00x</td>
                <td className="left-text-greencolor">
                  <div>
                    47099.99816
                    <img
                      src={BitcionLogo}
                      style={{ marginLeft: "10px" }}
                      height="20px"
                      width="20px"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="media align-items-center">
                    <div className="iq-movie">
                      <img src={Blackjack} height="20px" width="20px" />
                    </div>
                    <div className="media-body text-color text-left ml-3">
                      Cherry Pop
                    </div>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="media align-items-center">
                    <div className="iq-movie">
                      <img src={SweetBon} height="20px" width="20px" />
                    </div>
                    <div className="media-body text-color text-left ml-3">
                      SweetBon
                    </div>
                  </div>
                </td>
                <td className="timetextcolor">10:01 AM</td>
                <td className="left-text-color ">
                  <div>
                    150.00000
                    <img
                      src={BitcionLogo}
                      style={{ marginLeft: "10px" }}
                      height="20px"
                      width="20px"
                    />
                  </div>
                </td>

                <td className="left-text-color">8.83x</td>
                <td className="left-text-greencolor">
                  <div>
                    1325.20000000
                    <img
                      src={BitcionLogo}
                      style={{ marginLeft: "10px" }}
                      height="20px"
                      width="20px"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="media align-items-center">
                    <div className="iq-movie">
                      <img src={Blackjack} height="20px" width="20px" />
                    </div>
                    <div className="media-body text-color text-left ml-3">
                      Sweet Bon
                    </div>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="media align-items-center">
                    <div className="iq-movie">
                      <img src={SweetBon} height="20px" width="20px" />
                    </div>
                    <div className="media-body text-color text-left ml-3">
                      SweetBon
                    </div>
                  </div>
                </td>
                <td className="timetextcolor">10:01 AM</td>
                <td className="left-text-color ">
                  <div>
                    0.58430000
                    <img
                      src={BitcionLogo}
                      style={{ marginLeft: "10px" }}
                      height="20px"
                      width="20px"
                    />
                  </div>
                </td>

                <td className="left-text-color">0.28x</td>
                <td className="left-text-color">
                  <div>
                    -0.42274105
                    <img
                      src={BitcionLogo}
                      style={{ marginLeft: "10px" }}
                      height="20px"
                      width="20px"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card.Body>
    </div>
  );
}

export default UltraFairTable;
