import React,{useState} from 'react'

import { Route, Link } from "react-router-dom";
import './Home.css'
function Registration() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const RegisterForm = (event) => {
        event.preventDefault();
        console.log('Hello Register user');
    }

    return (
        <div>
            <div className="global-container">
                <div className="card login-form">
                    <div className="card-body">
                        <h3 className="card-title text-center">Log in to with Core Learners</h3>
                        <div className="card-text">
                            <form onSubmit={RegisterForm}> 
                                <div className="form-group">
                                    <label htmlFor="exampleInputName">Name</label>
                                    <input type="text" className="form-control form-control-sm" id="exampleInputName" onChange={(e)=>{setName(e.target.value)}} value={name} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" onChange={(e)=>{setEmail(e.target.value)}} value={email}  />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPhone">Phone Number</label>
                                    <input type="number" className="form-control form-control-sm" id="exampleInputPhone" onChange={(e)=>{setPhone(e.target.value)}} value={phone} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <Link to="/" style={{float:'right',fontSize:'12px'}}>Forgot password?</Link>
                                    <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" onChange={(e)=>{setPassword(e.target.value)}} value={password} />
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
