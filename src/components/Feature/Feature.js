import React from 'react';
import {Breakpoint} from "react-socks";

export function Feature() {
    return (
        <div>
            <Breakpoint medium>
                <div>
                    <h1>Feature</h1>
                </div>
            </Breakpoint>
            <Breakpoint large up>
                <div>
                    <h1>Bonsoir</h1>
                </div>
            </Breakpoint>
        </div>
    );
}
