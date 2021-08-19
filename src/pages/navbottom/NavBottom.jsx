import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBottom(){
    return(
        <div className="navbar_bottom">
            <div className="nav_bottom_c">
                <div className="nav_logo">
                   <ul className="list">
                       <li className="list_item">
                           <Link to="">Linkedin</Link>
                       </li>
                       <li className="list_item">
                           <Link to="">Facbook</Link>
                       </li>
                       <li className="list_item">
                           <Link to="">Notre blog</Link>
                       </li>
                       <li className="list_item">|</li>
                       <li className="list_item langue">
                           <Link to="">Francais</Link>
                       </li>
                       <li className="list_item langue">
                           <Link to="">Anglais</Link>
                       </li>
                   </ul>
                </div>
                <div className="nav_bottom">
                    <p>© 2021 Littlebigsmala - All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}