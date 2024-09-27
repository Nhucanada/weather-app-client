import React from 'react'

const Missing = () => {
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
                <h1> Error 404 Page </h1>
            </div>
        </>
    )
}

export default Missing;