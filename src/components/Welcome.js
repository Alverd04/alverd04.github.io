import React from 'react'
import './stylesheets/Welcome.scss'

const Welcome = () => {
    return(
        <div className='welcome'>
            <h1>VLUESHOT</h1>
            <button onClick={function(){window.scrollTo(0, 1200)}}>DISCOVER</button>
            <div className='social-pannel'>
                <a href="https://instagram.com/vlueshot" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    )
}

export default Welcome