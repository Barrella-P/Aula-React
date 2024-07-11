import React, { useEffect, useState } from "react";
import {Route, useParams, useRouteMatch} from 'react-router-dom';
import { busca } from '../api/api.js'
import { Link } from "react-router-dom";
import '../assets/css/blog.css';
import ListaCategorias from "../components/ListaCategoria";
import SubCategoria from "../paginas/SubCategoria";
import ListaPost from "../components/ListaPost";
import { Switch } from "react-router-dom/cjs/react-router-dom.min.js";

const Categoria = () => {
    const { id } = useParams()
    const { path } = useRouteMatch()
    const [subcategorias, setSubCategorias] = useState([])

    useEffect(() => {
        busca(`/categoria/${id}`, (categoria) => {
            setSubCategorias(categoria.subcategorias)
        })   
    }, [id])

    return(
        <>
            <div className="constainer">
                <h2 className="titulo-pagina">Pet notícias</h2>
            </div>
            <ListaCategorias />
            <ul className="lista-categorias container flex">
                {
                    subcategorias.map((subcategoria) => (
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`} key={subcategoria}>
                            <Link to={`${url}/${subcategoria}`}>
                                {subcategoria}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Switch>
                <Route exact path={`${path}/`}>
                    <ListaPost url={`/posts?categoria=${id}`} />
                </Route>
                <Route path={`${path}/:subcategoria`}>
                    <SubCategoria />
                </Route>
            </Switch>
        </>
    )
}

export default Categoria