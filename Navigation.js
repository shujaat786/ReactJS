import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-light">
                <a className="navbar-brand" href="#">DLOS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Navigation
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Action</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Links
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Action</a>
                            </div>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search App ID" aria-label="Search"/>
                        <button className="btn btn-outline-light" type="submit">Find</button>&nbsp;
                        <button className="btn btn-outline-light" type="submit">Next</button>
                    </form>
                </div>
            </nav>
        );
    }
}
export default Navigation;