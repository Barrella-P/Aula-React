import { Button } from '@mui/material';
import React, { useEffect, useState } from "react";
import { Link, Route, Switch, useParams, useRouteMatch} from 'react-router-dom';
import { busca } from '../../api/api.js'
import '../../assets/css/blog.css';
import ListaCatAdmin from './components/ListaCatAdmin.jsx';

const CatAdmin = () => {
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
                <h2 className="titulo-pagina">Administração</h2>
            </div>
            <div className='container'>
                <table className='tabela'>
                    <thead>
                        <tr>
                            <th colSpan="3" className="tabela__coluna--g">
                                SubCategoria: 
                                <span className='cartao__titulo'>{id}</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr> {
                            subcategorias.map((subcategoria) => (
                                <td className="tabela__coluna--m" key={subcategoria.id}>
                                    {subcategoria}
                                </td>))
                        }
                            <td>
                                <Link to={`/admin/sub/${id}`}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        sx={{ marginTop: 1 }}
                                    >
                                        Editar SubCategorias
                                    </Button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ListaCatAdmin />
        </>
    )
}

export default CatAdmin