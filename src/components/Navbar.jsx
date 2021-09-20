import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link>  <a className="navbar-brand" href="#">UseReducer</a> </Link>Li

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link  to='/' className="nav-link active" aria-current="page">Home </Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/login' className="nav-link" >Login</Link>
                        </li>
                        <li className="nav-item">
                        <Link>    <a className="nav-link" href="#">Counter</a></Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <button className="btn btn-outline-success" type="submit">Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
