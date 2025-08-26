import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar2() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#">
                    ECOMPLUS
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center" href="#">
                                Menu 1 <span className="ms-1 dropdown-toggle"></span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center" href="#">
                                Menu 2 <span className="ms-1 dropdown-toggle"></span>
                            </a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="#">Menu 3</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Menu 4</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
