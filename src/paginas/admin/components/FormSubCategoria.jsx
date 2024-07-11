import React, { useEffect, useState } from 'react';
import { Button, TextField } from "@mui/material";
import { api, busca } from "../../../api/api";
import { useParams } from "react-router-dom";

const FormSubCategoria = () => {
    const parametros = useParams()

    const [nomeCategoria, setNomeCategoria] = useState([])
    const [subcategorias, setSubCategorias] = useState([])
    const [subCategoria1, setSubCategoria1] = useState([])
    const [subCategoria2, setSubCategoria2] = useState([])

    useEffect(() => {
        if (parametros.id) {
            api.get(`categorias/${parametros.id}/`)
                .then(resposta => setNomeCategoria(resposta.data.nome))
        }
    }, [parametros])
    
    return (
        <main className="container flex flex-centro">
            <article className="cartao post">
                <h3 className="titulo-pagina">
                    Categoria: {parametros.id} / Subcategorias:
                </h3>
                <form>
                    <TextField
                        value={subCategoria1}
                        onChange={(evento) => setSubCategoria1(evento.target.value)}
                        id="outlined-basic"
                        label="Subcategoria 1"
                        variant="filled"
                        fullWidth
                        sx={{ marginTop: 2}}
                    />
                    <br />
                    <TextField
                        value={subCategoria2}
                        onChange={(evento) => setSubCategoria2(evento.target.value)}
                        id="outlined-basic"
                        label="Subcategoria 2"
                        variant="filled"
                        fullWidth
                        sx={{ marginTop: 2}}
                    />
                    <br />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ marginTop: 2 }}
                        fullWidth
                    >
                        Salvar
                    </Button>
                </form>
            </article>
        </main>
    );
}

export default FormSubCategoria;