import React from 'react'
import './stylesheets/gallery.scss'

const gallery = () => {
    return(
        <div className='gallery'>
            <div className='row'>
                <img src="./img/one.jpg" alt=""/>
                <img src="./img/two.jpg" alt=""/>
                <img src="./img/three.jpg" alt=""/>
            </div>
            <div className='row'>
                <img src="./img/four.jpg" alt=""/>
                <img src="./img/five.jpg" alt=""/>
                <img src="./img/six.jpg" alt=""/>
            </div>
            <div className='row'>
                <img src="./img/seven.jpg" alt=""/>
                <img src="./img/eight.jpg" alt=""/>
                <img src="./img/nine.jpg" alt=""/>
            </div>
        </div>
    )
}

export default gallery