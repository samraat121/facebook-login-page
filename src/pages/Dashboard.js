import React from 'react'
import {  Route, Link, useHistory } from "react-router-dom";

function Dashboard() {
    const history = useHistory();
    const logOutUser = () => {
        console.log('Hello logout')
        localStorage.removeItem('loggedin')
        history.push('/register')
    }
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                        Profile Information
                    </div>
                    <div className="card-body">
                        {
                            (() => {
                                
                                var users = JSON.parse(localStorage.getItem('users'))
                                for (var user of users) {
                                    return(
                                        <div>
                                            Name: {user.name}<br/>
                                           Email: { user.email}<br/>
                                           Phone: {user.phone}<br/>
                                        </div>
                                    )
                                }
                            })()
                        }
                    </div>
                    <div className="card-footer text-muted">
                    <button onClick={logOutUser} className="btn btn-outline-danger m-2 my-sm-0">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
