import React from 'react'
import CardNews from '../CardNews'
import "./news.css"

const News = () => {
    return (
        <>
            {/* News */}
            <section id={"news-eny"}>
                <div className={"eny-title-container"} >
                    <h2>News</h2>
                    <p className={"eny-subtitle"} >News.News.News.News.News.News.News</p>
                </div>
                <div className={"cards-container"} >
                    <CardNews title={"Title"} subt="Subtitle" desc={"Lancement sur les chapeaux de roues les gens 🔥 Préparer vos sous-sous 💸"} />
                    <CardNews title={"Title"} subt="Subtitle" desc={"Lancement sur les chapeaux de roues les gens 🔥 Préparer vos sous-sous 💸"} />
                    <CardNews title={"Title"} subt="Subtitle" desc={"Lancement sur les chapeaux de roues les gens 🔥 Préparer vos sous-sous 💸"} />
                </div>
            </section>
        </>
    );
}

export default News
