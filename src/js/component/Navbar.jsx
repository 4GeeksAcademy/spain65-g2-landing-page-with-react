import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark d-flex justify-content-between">
            <div>
                <a className="navbar-brand text-light ms-4" href="#">Welcome to Roberto's</a>
                <button className="navbar-toggler navbar-dark ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mx-4">
                    <li className="nav-item active">
                        <a className="nav-link text-light" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;