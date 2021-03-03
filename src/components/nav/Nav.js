import React from 'react'
import {NavLink , Link } from 'react-router-dom'
import { useBlogContext } from '../context/BlogContext'
import './nav.css'

export default function Nav() {
            const {blogState} = useBlogContext()
            const counterState = blogState.counter ;
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
                            <form className="d-flex">
                                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                 <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                                <button className='btn btn-outline-info ms-3 position-relative'>
                                    <i className="bi bi-cart-plus"></i>
                                    <span className='ms-3'>{counterState}</span>
                                </button>
                        </div>
                        <div className='d-flex flex-end ms-3'>
                        </div>
                    </div>
                </nav>
            )
        
    
}

