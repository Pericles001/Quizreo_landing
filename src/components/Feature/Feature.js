import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Feature(props) {

    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={props.source} alt={props.dest}></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <ul className="card-text">{props.items}</ul>
                </div>
            </div>
        </div>
    );
}
