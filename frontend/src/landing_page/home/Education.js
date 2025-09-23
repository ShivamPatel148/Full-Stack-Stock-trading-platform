import React from "react";

function Education() {
  return (
    <div className="container mt-5 ">
      <div className="row p-5 ">
        <div className="col-6 ">
          <img
            src="../Images/education.svg"
            alt="Varsity"
            style={{ width: "75%" }}
          />
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online market education book in the world
            covering everything from the basics to advanced trading
          </p>

          <p className="mt-3">
            Trading Q&A, the most active trading and investment community in
            India for all your market related queries
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
