function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center ">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment expireince even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="/Images/smallcaseLogo.png" alt="smallcase" />
          <p className="text-small text-muted">Themetic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            style={{ maxWidth: "70%", height: "55%" }}
            src="/Images/streakLogo.png"
            alt="streak"
          />
          <p className="text-small text-muted">Algo & Strategic platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            style={{ maxWidth: "70%", height: "55%" }}
            src="/Images/sensibullLogo.svg"
            alt="sensibull"
          />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            style={{ maxWidth: "70%" }}
            src="/Images/zerodhaFundhouse.png"
            alt="fundhouse"
          />
          <p className="text-small text-muted">Assest management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            style={{ maxWidth: "70%", height: "55%" }}
            src="/Images/goldenpiLogo.png"
            alt="goldenpi"
          />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt--5">
          <img
            style={{ maxWidth: "60%", height: "55%" }}
            src="/Images/dittoLogo.png"
            alt="ditto"
          />
          <p className="text-small text-muted">insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mt-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default Universe;
