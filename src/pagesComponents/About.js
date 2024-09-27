import React from 'react'

const About = () => {
    return (
        <>
            <table class="center">
                <tr>
                    <td><a href="/" class="changeYellow">Weather</a></td>
                    <td><a href="/about" class="changeYellow">About</a></td>
                    <td><a href="/404" class="changeYellow">404</a></td>
                </tr>
            </table>
            <div className="about">
                <p> This site was created by Brian Yin and Nathan Hu. It uses data from the Weatherstack and Positionstack API. </p>
            </div>
        </>
    )
}

export default About;