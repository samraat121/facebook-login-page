import React from 'react'

import { Route, Link } from "react-router-dom";
import './Home.css'
function Registration() {
    return (
        <div>
            <div className="global-container">
                <div className="card login-form">
                    <div className="card-body">
                        <h3 className="card-title text-center">Log in to with Core Learners</h3>
                        <div className="card-text">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputName">Name</label>
                                    <input type="text" className="form-control form-control-sm" id="exampleInputName" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPhone">Phone Number</label>
                                    <input type="number" className="form-control form-control-sm" id="exampleInputPhone" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <Link to="/" style={{float:'right',fontSize:'12px'}}>Forgot password?</Link>
                                    <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                                
                                <div className="sign-up">
                                    Don't have an account? <Link to="/">Create One</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Registration
