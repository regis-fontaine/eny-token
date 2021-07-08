import React from 'react'
import { Link } from 'react-router-dom'
const Button = ({ name, href }) => {
    return (
        <>
            <button className={"eny-button"}>
                <a href={href}>{name}</a>
            </button>
        </>
    );
}

export default Button;
