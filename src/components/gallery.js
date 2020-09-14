import React from 'react'
import './stylesheets/gallery.scss'

const gallery = () => {
    return(
        <div className='gallery'>
            <div className='row'>
                <img src="./img/one.jpg" alt=""/>
                <img src="./img/two.jpg" alt=""/>
                <img src="https://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg" alt=""/>
            </div>
            <div className='row'>
                <img src="https://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg" alt=""/>
                <img src="https://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg" alt=""/>
                <img src="https://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg" alt=""/>
            </div>
            <div className='row'>
                <img src="https://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg" alt=""/>
                <img src="https://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg" alt=""/>
                <img src="https://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg" alt=""/>
            </div>
        </div>
    )
}

export default gallery