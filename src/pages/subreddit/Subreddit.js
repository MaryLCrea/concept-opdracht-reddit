import React, { useEffect, useState } from 'react';
import './Subreddit.css';
import axios from 'axios';
import {useParams} from "react-router-dom";


function Subreddit() {
    const [subreddit, setSubreddit] = useState({});
    const { id } = useParams();
    // zou ik ook meerdere useParams in kunnen stellen of altijd maar 1?

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await axios.get(`https://www.reddit.com/r/${id}/about.json`);
                // Is deze link een speciale link waarbij je de data kunt ophalen via het ID of kun je
                // dat bij een willekeurige api link ook doen met het toevoegen van de {$id} ?
                console.log(response);
                setSubreddit(response.data.data);

            } catch(e) {
                console.error(e);
            }
        }
        fetchCategories();
    },);

    return (
        <>
        <main>
            <section className="reddit-card">
                               {Object.keys(subreddit).length> 0 && (
                            // waarom moet hier Object.keys staan en hoe had ik dat kunnen weten?
                            <div>
                                <p>{subreddit.title}</p>
                                <h3>Description</h3>
                                <p>{subreddit.public_description}</p>
                                <h3>Number of subscribers</h3>
                                <p>{subreddit.subscribers}</p>
                            </div>
                        )}

                    </section>
               </main>
        </>
    );
}
export default Subreddit;