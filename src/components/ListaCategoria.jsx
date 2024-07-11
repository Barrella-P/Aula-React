import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { busca } from '../api/api.js';
import '../assets/css/blog.css';

const ListaCategorias = () => {
    const [categorias, setCategorias] = useState([])
    useEffect (() => {
        busca(`/categorias`, setCategorias)
    }, []);
    return(
        <ul className="lista-categorias container flex">
            {
                categorias.map((categorias) => (
                    <Link to={`/categoria/${categorias.id}`}>
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${categorias.id}`}></li>
                    </Link>
                ))
            }
        </ul>
    );
}

export default ListaCategorias