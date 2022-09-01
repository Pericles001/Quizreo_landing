import React from 'react';
import {Breakpoint} from "react-socks";

export function Footer() {
    return (
        <div>
            <Breakpoint small down>
                <nav className="Navbar navbar text-center" style={{borderTop: "black 2px solid"}}>
                    <span className="navbar-brand mb-0 h1 mx-auto">Made with &hearts; by <a
                        className="text-decoration-none text-dark" href="https://github.com/Pericles001">Pericles001</a></span>
                </nav>
    <p className="text-center mx-auto text-dark Trade" style={{backgroundColor: "#CCC7C7"}}>2022 Quizreo @ LLC</p>
            </Breakpoint>
            <Breakpoint medium up>
                <nav className="Navbar navbar text-center" style={{borderTop: "black 2px solid"}}>
                    <span className="navbar-brand mb-0 h1 mx-auto">Made with &hearts; by <a
                        className="text-decoration-none text-dark" href="https://github.com/Pericles001">Pericles001</a></span>
                </nav>
                <p className="text-center mx-auto text-dark Trade" style={{backgroundColor: "#CCC7C7"}}>2022 Quizreo @ LLC</p>
            </Breakpoint>

        </div>
    );
}
