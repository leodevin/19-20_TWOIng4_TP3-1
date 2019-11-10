import React from 'react';
import '../index.css';

function Navbar_element(props) {
    return (
        <button className="navElement" onClick={props.onClick}>
            {props.name}
        </button>
    )
}

export default Navbar_element;