import React, { useState, useEffect } from "react";
import { busca } from '../api/api.js';
import { Link } from 'react-router-dom';

const ListaPost = ( { url } ) => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        busca(url, setPosts)
    }, [url])
    return(
        <section className="posts container">
            {
                posts.map((posts)=>
                    //console.log(post),
                    <Link className={`cartao-post cartao-post--${posts.categoria}`} to={`/posts/${posts.id}`} >
                        <article key={posts.id}>
                            <h3 className="cartao-post__titulo">
                                {posts.title}
                            </h3>
                            <p className="cartao-post__meta">
                                {posts.metadescription}
                            </p>
                        </article>
                    </Link>
                )
            }
        </section>
    );
}

export default ListaPost