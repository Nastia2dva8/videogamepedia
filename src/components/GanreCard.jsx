import React from 'react'

export default function GanreCard(props) {
    return (
        <article className="lot">
                <img src={"./src/assets/img/" + props.ganreName + ".png"} alt={props.title + " genre illustration"} />
                <h2><a href={props.link} target="_blank">{props.title}</a></h2>
                <p className="author">{props.author}</p>
        </article>
    )
}
