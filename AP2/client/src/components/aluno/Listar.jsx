import { TableContainer, Typography, Table, Paper, TableHead, TableBody, TableRow, TableCell, Box } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

const Listar = () => {
    const [alunos,setAlunos] = useState([])
    const [iraMedia,setIraMedia] = useState(0)
    let contador = 1;

    useEffect(
        ()=>{
            axios.get("http://localhost:3001/alunos/listar")
            .then(
                (response)=>{
                    const resultado = response.data;

                    setAlunos(resultado);
                }
            )
            .catch(error=>console.log(error))
        }
        ,
        []
    )

    // Esse useEffect() é chamado toda vez que o vetor de alunos é alterado, ou seja, toda vez que um aluno é inserido ou excluído
    // a média do IRA é recalculada.
    useEffect(() => {
        // Utilizo o reduce() para percorrer o vetor e somar todos os IRA's e depois dividir pelo tamanho do vetor.
        // O reduce possui dois parâmetros, o acumulador (total) e o valor atual (que inicia em 0), o acumulador é o valor que será
        // retornado no final da função, e o valor atual é o valor que está sendo percorrido no momento.
        // Para cada aluno no vetor, o valor do IRA é somado ao acumulador, e no final é retornado o valor total dividido pelo tamanho do vetor.
        setIraMedia(alunos.reduce((total, aluno)=> total + parseFloat(aluno.ira), 0) / alunos.length)
    }, [alunos])

    function deleteAlunoById(id) {
        if(window.confirm("Deseja Excluir ? " + id)){
            axios.delete(`http://localhost:3001/alunos/remover/${id}`)
            .then((response)=>{
                const resultado = alunos.filter(aluno => aluno._id != id)

                setAlunos(resultado)
            })
            .catch(error=>console.log(error))
        }
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Listar Aluno
            </Typography>
            <TableContainer component={Paper} sx={{mt:4,mb:4}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>IRA</StyledTableCell>
                            <StyledTableCell>AÇÕES</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            
                            alunos.map(
                                (aluno) => {
                                    return (
                                        // A propriedade redLine é passada como "prop" para o StyledTableRow para que seja possível
                                        // alterar a cor da linha da tabela caso o IRA do aluno seja menor que a média
                                        <StyledTableRow key={aluno._id} redLine={parseFloat(aluno.ira) < iraMedia}>
                                            <StyledTableCell>{contador++}</StyledTableCell>
                                            <StyledTableCell>{aluno.nome}</StyledTableCell>
                                            <StyledTableCell>{aluno.curso}</StyledTableCell>
                                            <StyledTableCell>{aluno.ira}</StyledTableCell>
                                            <StyledTableCell>
                                                <Box>
                                                    <IconButton aria-label="edit" color="primary" component={Link} to={`/editarAluno/${aluno._id}`}>
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton aria-label="delete" color="error" onClick={()=>deleteAlunoById(aluno._id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Box>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    )
                                }
                            )
                        }

                        {/* Caso tenha algum aluno carregado, será mostrado a média geral do IRA na última linha */}
                        {
                            alunos.length > 0 && (
                                <StyledTableRow>
                                    <StyledTableCell>{contador++}</StyledTableCell>
                                    <StyledTableCell>IRA Médio</StyledTableCell>
                                    <StyledTableCell>Todos</StyledTableCell>
                                    <StyledTableCell>{iraMedia}</StyledTableCell>
                                    <StyledTableCell><Box></Box></StyledTableCell>
                                </StyledTableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )
}


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme, ...props }) => ({
    // Altera a cor da linha caso o IRA do aluno seja menor que a média utilizando o prop redLine
    '&:nth-of-type(odd)': {
        backgroundColor: props.redLine ? "red" : theme.palette.action.hover 
    },
    // Altera a cor da linha caso o IRA do aluno seja menor que a média utilizando o prop redLine
    '&': {
        backgroundColor: props.redLine ? "red" : "white"
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



export default Listar