function Team() {
  return (
    <div className="conatiner">
    <div className="row p-5 mt-5 mb-5 border-top">
       <h1 className=" text-center ">
            People
       </h1>
    </div>
    
    <div
      className="row p-5  text-muted"
      style={{ lineHeight: "1.8", fontSize: "1.2em" }}
    >
      <div className="col-6 p-5 text-center">
          <img src="./Images/nithinKamath.jpg" alt="team" style={{borderRadius:"100%", width:"50%"}}/>
          <h4 className="mt-5 fs-5">Nithin Kamath</h4>
          <h6 className="fs-6">Founder, CEO</h6>
      </div>
      <div className="col-6 p-5">
      <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p className="Aboutus-Links">
            Connect on <a href="/">Homepage</a> / <a href="Trading">TradingQnA</a> /{" "}
            <a href="/https://x.com/i_shivam14">Twitter</a>
          </p>
      </div>
    </div>

  </div>
  );
}

export default Team;
