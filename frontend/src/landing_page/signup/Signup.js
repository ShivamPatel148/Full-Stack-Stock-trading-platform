import React from "react";

function Signup() {
    return ( 
        <div className="container">
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="form-card p-3 bg-white" style={{width: "400px", borderRadius: "10px"}}>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" id="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" id="password"  className="form-control"/>
                    </div > 
                    <button className="btn btn-success" type="submit">Sign In</button>
                </form>
            </div>
        </div>
        </div>
     );
}

export default Signup;