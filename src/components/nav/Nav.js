import React, { Component } from 'react'
import {NavLink , Link } from 'react-router-dom'
import './nav.css'

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">FarStore</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                 <NavLink className="nav-link" to="/product">Products</NavLink>
                            </li>
                        </ul>
                        <form class="d-flex">
                             <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                             <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                             <button className='btn btn-outline-info ms-3'><i className="bi bi-cart-plus"></i></button>
                    </div>
                    <div className='d-flex flex-end ms-3'>
                    </div>
                </div>
            </nav>
        )
    }
}
