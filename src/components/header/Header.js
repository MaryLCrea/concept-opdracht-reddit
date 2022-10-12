import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import logo from "../../assets/logo.png";

function Header({children}) {
     return(
            <header>
             <div>
                <img src={logo} alt="logo" />
                <h2>Reddit</h2>
                <nav>
                <ul>
                    <li><Link to="/">Hottest posts</Link></li>
                    <li><a href="https://www.reddit.com/">Reddit</a></li>
                    <li><Link to="/subreddit/memes">Memes</Link></li>
                </ul>
                </nav>
            <div className="hero-content">
                {children}
                {/*waarom moet hier {children} staan en hoe had ik dat kunnen weten?*/}
            </div>
             </div>
             </header>
                );
}
export default Header;