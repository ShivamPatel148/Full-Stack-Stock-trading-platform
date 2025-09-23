import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-4">Trust with confidence</h1>
          <h2 className="fs-4">Coustomer-first always</h2>
          <p className="text-muted">
            Thats's why 13+ crore coustomer trust Zerodha with $3.5 lakh dollars
            worth equality investments.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoyimg push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4">The Zerodha Universe</h2>
          <p className="text-muted">
            Not just an app, but s whole ecosysytem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, We don't just faciliate
            transactions. but actively help you do better with your money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="../images/ecosystem.png"
            alt="ecosystem"
            style={{ width: "90%" }}
          />
          {/* <div className="text-center p-5">
                <a className="mx-5">Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a>Try Kite demo</a>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default Stats;
