import React from 'react';
import './_Navbar.css';
import {Breakpoint} from "react-socks";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Navbar() {
    return (
        <div>
            <Breakpoint small down>
                <nav className="Navbar navbar text-center fixed-top" style={{borderBottom: "black 2px solid"}}>
                    <span className="navbar-brand mb-0 h1 mx-auto">Quizreo</span>
                </nav>
            </Breakpoint>
            <Breakpoint medium up>
                <nav className="p-2 Navbar navbar" style={{borderBottom: "black 2px solid"}}>
                    <span className="navbar-brand mb-0 h1">Quizreo</span>
                    <div className="mb-0 justify-content-between align-items-left d-flex flex-row">
                        <ul  className="p-2 list-inline">
                            <li className="list-inline-item">
                                <a className="text-decoration-none text-dark" href="#AboutSec">About</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="text-decoration-none text-dark" href="#FeaturesSec">Features</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="text-decoration-none text-dark" href="#StartSec">Get Started</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Breakpoint>

        </div>
    );
}


