import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")

    let navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();

        // O body da requisição é um objeto com os campos login e senha
        const data = { login, senha };

        // Faz a requisição POST para o servidor na rota /login passando os dados de body
        axios.post("http://localhost:3001/login/", data)
        .then((response)=>{
            // Caso a resposta do servidor seja true, redireciona para a página de listagem de alunos
            if (response.data.res === true) {
              navigate("/listarAluno")
            } else {
              // Caso a resposta do servidor seja false, exibe um alerta
              alert("Usuário ou senha incorretos");
            }
        })
        .catch(error=> console.log(error))
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Fazer login no sistema
            </Typography>

            <p>Login (default): admin</p>
            <p>Senha (default): admin</p>

            <Box
                sx={{width:"80%"}}
                component="form"
                onSubmit={handleSubmit}
            >
                {/* TextField para o usuário inserir o login */}
                <TextField 
                    required
                    fullWidth
                    autoFocus
                    margin="normal"
                    label="Usuário"

                    id="login"
                    name="login"
                    onChange={(event)=>setLogin(event.target.value)}
                />
                {/* TextField para o usuário inserir a senha */}
                <TextField 
                    required
                    fullWidth
                    autoFocus
                    margin="normal"
                    label="Senha"

                    id="senha"
                    name="senha"
                    onChange={(event)=>setSenha(event.target.value)}
                />

                <Box sx={{display:"flex",justifyContent:"center",mt:2}}>
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Entrar
                    </Button>
                </Box>
            </Box>
        </>
    )
}
export default Login