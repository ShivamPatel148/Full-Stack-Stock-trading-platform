import React from "react";

function Awards() {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-6">
          <img src="../images/largestBroker.svg" alt="largestBroker" />
        </div>
        <div className="col-6 ">
          <h1 className="mb-5 p-5 "> Largest stock broker in India</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing:{" "}
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Future & Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual fund </p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="../images/pressLogos.png"
            alt="pressLogos"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
