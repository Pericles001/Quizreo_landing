import React from 'react';
import {Breakpoint} from "react-socks";


export function About() {
    return (
        <div>
            <Breakpoint medium>
                <div>
                    <h1>About</h1>
                </div>
            </Breakpoint>
            <Breakpoint large up>
                <div>
                    <h1>Bonjour</h1>
                </div>
            </Breakpoint>
        </div>

    );
}

