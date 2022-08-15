import React from 'react'

function Header() {
    return (
        <div className='header'>
            <div className='menu'>
                <img src="images/logo.svg" alt='snap-logo'></img>
                <p>Features <img src='images/icon-arrow-down.svg' alt='arrow-down' /></p>
                <p>Company <img src='images/icon-arrow-down.svg' alt='arrow-down' /></p>
                <p>Careers</p>
                <p>About</p>
            </div>
            <div className='authorisation'>
                <p>Login</p>
                <p>Register</p>
            </div>
        </div>
    )
}

export default Header