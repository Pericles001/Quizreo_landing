import React from 'react';
import './_About.css';
import {Breakpoint} from "react-socks";


export function About(props) {

    const topics = [
        "We are a team of hard workers",
        "Quizreo gives your more time",
        "Quizreo is an open community"
    ];

    const getTopic = topics.map(topic => {
        return <li className="mt-2  p-4" style={{marginTop: "400px"}}><h5>{topic}</h5></li>
    });

    return (
        <div className="About">
            <Breakpoint small down>
                <div className="container-fluid">
                    <div id="AboutSec" className="row">
                        <div className="col-sm-12 mt-5 mb-2">
                            <img src={props.source} alt={props.det} width={props.width} height="50%"/>
                            <ul className="p-5">
                                {getTopic}
                            </ul>
                        </div>
                    </div>
                </div>
            </Breakpoint>
            <Breakpoint medium up>
                <div className="container-fluid">
                    <div id="AboutSec" className="row">
                        <div className="col-md-6 mt-5 mb-5">
                            <img src={props.source} alt={props.det} width={props.width}/>
                        </div>
                        <div className="col-md-6 mt-5">
                            <ul className="p-5">
                                {getTopic}
                            </ul>
                        </div>
                    </div>
                </div>
            </Breakpoint>

        </div>

    );
}

