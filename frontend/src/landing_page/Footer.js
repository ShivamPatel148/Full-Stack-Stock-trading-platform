// import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5 ">
        <div className="row mt-5">
          <div className="col-3">
            <img src="../Images/logo.svg" alt="logo" width="100px" />
            <p>&copy; 2010-2024 Zerodha Broking Ltd. <br></br>All rights reserved.</p>
          </div>
          <div className="col-3">
            <p className="fw-bold">Company</p>
            <div className="footer-links">
              <a href="#">Products</a>
              <br />
              <a style={{ textDecoration: "none" }} href="#">
                Referral programme
              </a>
              <br />
              <a href="#">Careers</a>
              <br />
              <a href="#">About </a>
              <br />
              <a href="#">Zerodha.tech</a>
              <br />
              <a href="#">Pricing </a>
              <br />
              <a href="#">Press & Medaia</a>
              <br />
              <a href="#">Zerodha Cares (CSR)</a>
              <br />
            </div>
          </div>
          <div className="col-3">
            <p className="fw-bold"> Support</p>
            <div className="footer-links">
              <a href="#">Contact</a>
              <br />
              <a href="#">Support portal</a>
              <br />
              <a href="#">Z-Connect blog</a>
              <br />
              <a href="#">List of charges</a>
              <br />
              <a href="#">Downloads & Resources</a>
            </div>
          </div>

          <div className="col-3 " style={{ textDecoration: "" }}>
            <p className="fw-bold">Account</p>
            <div className="footer-links">
              <a href="#">Open an Account</a>
              <br />
              <a href="#">Fund Transfer</a>
              <br />
              <a href="#">60 daily change</a>
              <br />
            </div>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "12px" }}>
          <p className="footer-smallprint">
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            <a href="#"> complaints@zerodha.com</a>, for DP related to{" "}
            <a href="#"> dp@zerodha.com</a>. Please ensure you carefully read
            the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p className="footer-smallprint">
            Procedure to file a complaint on <a href="#">SEBI SCORES</a>:
            Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div className="container">
          <ul
            className="row footer-graveyards-links p-3 "
            style={{
              fontSize: "12px",
              textAlign: "center",
              listStyleType: "none",
            }}
          >
            <li className="col-2">
              <a href="#">NSE</a>
            </li>
            <li className="col-2">
              <a href="#">BSE</a>
            </li>
            <li className="col-2">
              <a href="#">MCX</a>
            </li>
            <li className="col-2">
              <a href="#">Terms&conditions</a>
            </li>
            <li className="col-2">
              <a href="#">Policies & procedures</a>
            </li>
            <li className="col-2">
              <a href="#">Privacy policy</a>
            </li>
          </ul>
          {/* <div className=" footer-links col-2">
              <a href="#">NSE</a>
            </div>
            <div className="footer-links col-2">
              <a href="#">BSE</a>
            </div>
            <div className=" footer-links col-2">
              <a href="#">MCX</a>
            </div>
            <div className=" footer-links col-2">
              <a href="#">Terms&conditions</a>
            </div>
            <div className=" footer-links col-2">
              <a href="#">Policies & procedures</a>
            </div>
            <div className=" footer-links col-2">
              <a href="#">Privacy policy</a>
            </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
