import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav>
                <Link to="/">
                    <img src="./src/assets/img/logo.png" alt="logo" />
                    <b> Videogamepedia </b>
                </Link>
                <Link to="/genres">Game Genres</Link>
                <Link to="/feedback">Feedback</Link>
            </nav>
        </header>
    )
}
