import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Feature} from "./Feature";
import {target} from "./target";
import {Breakpoint} from "react-socks";

export function Features() {


    const shuffle = target.map(item => {
        return <Feature source={item.url} dest={item.description} title={item.title} items={item.items.map(elem => {
            return (<li>{elem}</li>)
        })}/>
    });

    return (
        <div className="Features">
            <Breakpoint small down>
                <div className="container-fluid">
                    <div id="FeaturesSec" className="row justify-content-center">

                        {shuffle.map((item) => (
                            <div className="col-sm-12 mt-5 mb-2">
                                {item}
                            </div>
                        ))}

                    </div>
                </div>
            </Breakpoint>
            <Breakpoint medium up>
                <div className="container-fluid">
                    <div id="FeaturesSec" className="row">

                        {shuffle.map((item) => (
                            <div className="col-md-4 mt-5 mb-5">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </Breakpoint>
        </div>
    )
}
