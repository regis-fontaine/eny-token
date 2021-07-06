import React from 'react';

const Card = ({ title, desc }) => {
    return (
        <>
            <div className={"eny-card-container"}>
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </>
    );
}

export default Card;
