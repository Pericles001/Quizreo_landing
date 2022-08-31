import React from 'react';
import {Breakpoint} from "react-socks";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Navbar() {
    return (
        <div>
            <Breakpoint small down>
                <nav className="navbar navbar-light bg-light text-center">
                    <span className="navbar-brand mb-0 h1 mx-auto">Quizreo</span>
                </nav>
            </Breakpoint>
            <Breakpoint medium>
                <nav className="p-2 navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">Quizreo</span>
                    <div className="mb-0 justify-content-between align-items-left d-flex flex-row">
                        <ul  className="p-2 list-inline">
                            <li className="list-inline-item">
                                <a className="text-decoration-none text-dark" href="#">About</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="text-decoration-none text-dark" href="#">Features</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="text-decoration-none text-dark" href="#">Get Started</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Breakpoint>
            <Breakpoint large up>
                <div>
                    <h1>hum</h1>
                </div>
            </Breakpoint>
        </div>
    );
}


