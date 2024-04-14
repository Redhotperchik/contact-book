import React from "react";

function Contact({ name, phone }) {
    return (
        <li> 
            <span>{name}</span>
            <span>{phone}</span>
        </li>
    );
}

export default Contact