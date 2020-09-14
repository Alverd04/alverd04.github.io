import React from 'react'
import './navBar.scss'
const navBar = () => {
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    var prevScrollpos = window.pageYOffset;
    window.onload = function(){
        document.getElementById("navbar").style.top = "-8vh";
    }
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-8vh";
    }
    prevScrollpos = currentScrollPos;
    }
    return(
        <div id='navbar' className = 'navBar'>
            <ul>
                <li><a href=".">Home</a></li>
                <li><a href=".">About</a></li>
                <li><a href=".">Contact</a></li>
            </ul>
        </div>
    )
}

export default navBar