import React from 'react'

const CardNews = ({title, subt, desc}) => {
    return (
        <>
            <div className={"card-news"} >
                <h4>{title}</h4>
                <h5>{subt}</h5>
                <p>{desc}</p>
            </div>
        </>
    );
}

export default CardNews
