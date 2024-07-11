import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import SubCategoria from "../../SubCategoria";
import { api } from "../../../api/api.js";
import { useHistory, useParams } from "react-router-dom";


const FormCategoria = () => {
    let history = useHistory()
    const parametros = useParams()

    const [nomeCategoria, setNomeCategoria] = useState('')
    
    useEffect(() => {
        if (parametros.id) {
            api.get(`categorias/${parametros.id}/`)
                .then(resposta => setNomeCategoria(resposta.data.nome))
        }
    }, [parametros])
    
    const CadCategoria = (evento) => {
        evento.preventDefault()

        if (parametros.id) {
            api.put(`categorias/${parametros.id}/`, {
                id: nomeCategoria,
                nome: nomeCategoria,
                subcategorias: []
            })
                .then(() => {
                    alert("Sucesso na atualização!")
                    history.push('/admin')
                })
        } else {
            api.post(`/categorias`, {
                id: nomeCategoria,
                nome: nomeCategoria,
                subcategorias: []
            })
                .then(() => {
                    alert("Cadastro realizado com Sucesso!")
                    history.push('/admin')
                })
        }

    }

    return (
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="titulo-pagina">Cadastro de Categorias</h2>
                <br />
                <form onSubmit={CadCategoria}>
                    <TextField 
                        value={nomeCategoria}
                        onChange={evento => setNomeCategoria(evento.target.value)}
                        id="standard-basic"
                        label="Categoria"
                        variant="filled"
                        fullWidth
                        required
                        />
                        <br />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ marginTop: 1 }}
                            fullWidth
                            >
                                Salvar
                            </Button>
                </form>
            </article>
        </main>
    );
}

export default FormCategoria;