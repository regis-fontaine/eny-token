import React from 'react'
import { Link } from 'react-router-dom'
const Button = ({ name, to, classSup }) => {
    return (
        <>
            <Link to={to}>
                <button className={classSup," eny-button"}>
                    {name}
                </button>
            </Link>
        </>
    );
}

export default Button;
