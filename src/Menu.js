import React from 'react'
import {  Route, Link } from "react-router-dom";
function Menu() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <Link className="btn btn-outline-success m-2 my-sm-0" to="/">Login</Link>
                        <Link className="btn btn-outline-success m-2 my-sm-0" to="/register">Registration</Link>
                        <Link className="btn btn-outline-success m-2 my-sm-0" to="/dashboard">Dashboard</Link>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Menu
