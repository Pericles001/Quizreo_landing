import React from 'react';
import {Breakpoint} from "react-socks";

export function Footer() {
    return (
        <div>
            <Breakpoint medium>
                <div>
                    <h1>Footer</h1>
                </div>
            </Breakpoint>
            <Breakpoint large up>
                <div>
                    <h1>Bon</h1>
                </div>
            </Breakpoint>
        </div>
    );
}
