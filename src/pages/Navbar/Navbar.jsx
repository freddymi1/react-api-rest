import React from 'react';

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="nav_logo">
                <img src="images/logo/black.png" alt="" className="logo"/>
            </div>
            <div className="nav_btn">
                <button className="btn">Se connecter</button>
            </div>
        </div>
    )
}