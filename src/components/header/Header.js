import React from 'react';
import './Header.css';
import {NavLink, Route, Switch, useParams} from 'react-router-dom';
import HomePage from "../../pages/home/Home";
import RedditPagina from "../../pages/subreddit/Subreddit";
import MemesPagina from "../../pages/memes/Memes";
import logo from "../../assets/logo.png";

function Header() {
    const {id} = useParams
    return(
        <>
        <nav>
            <div>
                <img src={logo} alt="logo" />
                <h2>Reddit</h2>
                <ul>
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/Subreddit/:id">Reddit</NavLink></li>
                    <li><NavLink to="/Memes" >Memes</NavLink></li>
                </ul>
            </div>
        </nav>
    <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/subreddit">
                    <RedditPagina />
                </Route>
                <Route exact path="/memes">
                    <MemesPagina/>
                </Route>
            </Switch>
            </>
         );
}
export default Header;