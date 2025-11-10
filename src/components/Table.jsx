import React from 'react'

export default function Table() {
    return (
        <table border="1" width="100%" cellSpacing="0" cellPadding="5">
            <caption><strong>Video Game Genres and Popular Titles</strong></caption>

            <thead>
                <tr>
                    <th rowSpan="2">Genre</th>
                    <th colSpan="2">Popular Games</th>
                    <th rowSpan="2">Developers</th>
                    <th rowSpan="2">Platform</th>
                </tr>
                <tr>
                    <th>Main Title</th>
                    <th>Another Example</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td rowSpan="2">Action</td>
                    <td>Grand Theft Auto V</td>
                    <td>Red Dead Redemption 2</td>
                    <td>Rockstar Games</td>
                    <td rowSpan="2">PC, PlayStation, Xbox</td>
                </tr>
                <tr>
                    <td>Call of Duty: Modern Warfare II</td>
                    <td>Call of Duty: Warzone</td>
                    <td>Infinity Ward / Activision</td>
                </tr>

                <tr>
                    <td>Adventure</td>
                    <td colSpan="2">The Legend of Zelda: Breath of the Wild</td>
                    <td>Nintendo</td>
                    <td>Nintendo Switch</td>
                </tr>

                <tr>
                    <td rowSpan="2">RPG</td>
                    <td>The Witcher 3: Wild Hunt</td>
                    <td>Cyberpunk 2077</td>
                    <td>CD Projekt Red</td>
                    <td rowSpan="2">PC, PlayStation, Xbox</td>
                </tr>
                <tr>
                    <td>Elden Ring</td>
                    <td>Dark Souls III</td>
                    <td>FromSoftware</td>
                </tr>
            </tbody>

            <tfoot>
                <tr>
                    <td colSpan="5">Source: Video Game Encyclopedia © 2025</td>
                </tr>
            </tfoot>
        </table>
    )
}
