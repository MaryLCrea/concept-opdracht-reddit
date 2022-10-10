import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import {Link, useHistory} from "react-router-dom";


function Home() {
    const history = useHistory();
    const [reddithome, setReddithome] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await axios.get('https://www.reddit.com/hot.json?limit=15');
                console.log(response.data.data.children);
                setReddithome(response.data.data.children);

            } catch(e) {
                console.error(e);
            }
        }
        fetchCategories();
    }, []);

    return (
        <section className="reddit-card">
        <div>
            {reddithome && reddithome.map((reddit) => {
                return (
                    <>
                        <h3 className="title" key={reddit}>{reddit.data.title}</h3>
                        <Link to={`/Subreddit/${reddit.data.subreddit}`}>{reddit.data.subreddit_name_prefixed}</Link>
                        <p> Comments {reddit.num_comments} - Ups: {reddit.data.ups}</p>
                    </>
                )
            })}

            <footer>
                <div className="footer">
                    <form>
                        <p>In opdracht van NOVI Hogeschool c 2022</p>
                    </form>
                </div>
            </footer>

        </div>
        </section>
    );
}
export default Home;