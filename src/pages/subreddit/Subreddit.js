import React, { useEffect, useState } from 'react';
import './Subreddit.css';
import axios from 'axios';
import {Link, useHistory} from "react-router-dom";


function Subreddit() {
    const history = useHistory();
    const [subreddit, setSubreddit] = useState('');

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await axios.get('https://www.reddit.com/r/{id}/about.json');
                console.log(response.data.data.children);
                setSubreddit(response.data.data.children);

            } catch(e) {
                console.error(e);
            }
        }
        fetchCategories();
    }, []);

    return (
        <section className="subreddit">
            <div>
                {subreddit((reddits) => {
                    return (
                        <>
                            <h3 className="title" key={reddits.data}>{reddits.data.title}</h3>
                        </>
                    )
                })}

            </div>
        </section>
    );
}
export default Subreddit;