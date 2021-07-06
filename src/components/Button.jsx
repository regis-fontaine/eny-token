import React from 'react'

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
