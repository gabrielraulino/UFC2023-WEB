import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Cadastrar = () => {

    const [nome,setNome] = useState("")
    const [curso,setCurso] = useState("")
    const [ira, setIra] = useState("0.0")

    let navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        const aluno = {nome,curso,ira}
        axios.post("http://localhost:3001/alunos/cadastrar",aluno)
        .then((response)=>{
            alert(`Aluno ID ${response.data._id} adicionado com sucesso!`)
            navigate("/listarAluno")
        })
        .catch(error=>console.log(error))
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Cadastrar Aluno
            </Typography>
            <Box
                sx={{width:"80%"}}
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField 
                    required
                    fullWidth
                    autoFocus
                    margin="normal"
                    label="Nome Completo"

                    id="nome"
                    name="nome"
                    onChange={(event)=>setNome(event.target.value)}
                />

                {/* Select para o usuário conseguir selecionar o curso, com os valores: [DD, SI, CC, ES, EC, RC] */}
                <FormControl sx={{marginTop:2, width:"100%"}} required>
                    {/* Sem a InputLabel, não seria mostrado a label no Select, já que ele não possui essa propriedade, ao contrário do TextField.  */}
                    <InputLabel id="select-tit-label">Curso</InputLabel>
                    {/* O Select do material ui possui a propriedade onChange, tal qual o TextField, que detecta a alteração no campo e retorna o evento, e com ele, conseguimos pegar o valor selecionado. */}
                    <Select
                        labelId="select-tit-label"
                        label="Curso"
                        value={curso}
                        onChange={(event)=> setCurso(event.target.value)}
                    >
                        <MenuItem value="DD">Design Digital</MenuItem>
                        <MenuItem value="SI">Sistemas da Informação</MenuItem>
                        <MenuItem value="CC">Ciência da Computação</MenuItem>
                        <MenuItem value="ES">Engenharia de Software</MenuItem>
                        <MenuItem value="EC">Engenharia da Computação</MenuItem>
                        <MenuItem value="RC">Redes de Computadores</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="ira"
                    label="IRA"
                    value={ira}
                    name="ira"
                    type="number"
                    inputProps={{
                        maxLength: 10,
                        step: "0.1"
                    }}
                    onChange={(e) => setIra(parseFloat(e.target.value))}
                />

                <Box sx={{display:"flex",justifyContent:"center",mt:2}}>
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Cadastrar
                    </Button>
                </Box>
            </Box>
        </>
    )
}
export default Cadastrar