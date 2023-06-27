import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "@mui/material"
import MyMenu from "./MyMenuV1"

import CadastrarAluno from "./aluno/Cadastrar"
import ListarAluno from "./aluno/Listar"
import ListarAprovadosAluno from "./aluno/ListarAprovados"
import EditarAluno from "./aluno/Editar"

import CadastrarProfessor from "./professor/Cadastrar"
import ListarProfessor from "./professor/Listar"
import EditarProfessor from "./professor/Editar"

import Login from "./login/Login"

const MainPage = () => {
    return (
        <BrowserRouter>
            <MyMenu />
            <Container sx={{mt:5,display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Routes>
                    <Route path="cadastrarAluno" element={<CadastrarAluno/>}/>
                    <Route path="listarAluno" element={<ListarAluno/>}/>
                    <Route path="listarAprovadosAluno" element={<ListarAprovadosAluno/>}/>
                    <Route path="editarAluno/:id" element={<EditarAluno/>}/>

                    <Route path="cadastrarProfessor" element={<CadastrarProfessor/>}/>
                    <Route path="listarProfessor" element={<ListarProfessor/>}/>
                    <Route path="editarProfessor/:id" element={<EditarProfessor/>}/>

                    {/* Router para acessar o "componente" de página Login */}
                    <Route path="login" element={<Login/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default MainPage