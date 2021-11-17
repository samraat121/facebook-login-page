import React,{useState} from 'react'

import { Route, Link, useHistory } from "react-router-dom";
import './Home.css'

function Home() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const logOutUser = () => {
        console.log('Hello logout')
        localStorage.removeItem('loggedin')
        history.push('/register')
    }

    const LoginSubmit = (event) => {
        event.preventDefault();
        console.log('hello')

        var users = JSON.parse(localStorage.getItem('users'))
        var i = 0;
        for (var user of users) {
            if (user.email === email && user.password === password) {
                i++
            }
            
        }
        if (i == 1) {
            alert('Login is Successfullly')
            localStorage.setItem('loggedin', 'loggedin')
            history.push('/dashboard')
        }else{
            alert('Invadild Login Info');
            history.push('/login')
        }
    }
    return (
        <div>
            <div className="global-container">
                <div className="card login-form">
                    <div className="card-body">

                        {
                            (() => {
                                if (localStorage.getItem('loggedin')) {
                                    return(
                                        <div>
                                            <h3>Welcome to Authenticate User</h3>
                                            <button onClick={logOutUser} className="btn btn-danger">Logout</button>
                                        </div>
                                    ) 
                                } else {
                                    return(
                                        <div>                  
                                            <h3 className="card-title text-center">Log in to Core Learners</h3>
                                            <div className="card-text">
                                                <form onSubmit={LoginSubmit}>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                                        <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" onChange={(e)=>{setEmail(e.target.value)}} value={email} />
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
                                    )
                                }
                            })()
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
