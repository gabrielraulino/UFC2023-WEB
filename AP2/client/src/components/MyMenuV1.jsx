import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"
import { Link } from "react-router-dom"
import { useState } from "react"

const MyMenu = () => {

    const [anchorElAluno,setAnchorElAluno] = useState(null)
    const [anchorElProfessor,setAnchorElProfessor] = useState(null)

    const handleOpenAnchorElProfessor = (event) => {
        setAnchorElProfessor(event.currentTarget)
    }

    const handleCloseAnchorElProfessor = () => {
        setAnchorElProfessor(null)
    }

    const handleOpenAnchorElAluno = (event) => {
        setAnchorElAluno(event.currentTarget)
    }

    const handleCloseAnchorElAluno = () => {
        setAnchorElAluno(null)
    }

    function dropProfessorMenu() {
        return (
            <Box>
                <Button
                    sx={{ color: "white", my: 2 }}
                    onClick={handleOpenAnchorElProfessor}
                >
                    Professores
                </Button>
                <Menu
                    anchorEl={anchorElProfessor}
                    open={Boolean(anchorElProfessor)}
                    onClose={handleCloseAnchorElProfessor}
                >
                    <MenuItem
                        onClick={handleCloseAnchorElProfessor}
                        component={Link}
                        to="cadastrarProfessor"
                    >
                        Cadastrar
                    </MenuItem>
                    <MenuItem
                        onClick={handleCloseAnchorElProfessor}
                        component={Link}
                        to="listarProfessor"
                    >
                        Listar
                    </MenuItem>
                </Menu>
            </Box>
        )
    }

    function dropAlunoMenu() {
        return (
            <Box>
                <Button
                    sx={{ color: "white", my: 2 }}
                    onClick={handleOpenAnchorElAluno}
                >
                    Alunos
                </Button>
                <Menu
                    anchorEl={anchorElAluno}
                    open={Boolean(anchorElAluno)}
                    onClose={handleCloseAnchorElAluno}
                >
                    <MenuItem
                        onClick={handleCloseAnchorElAluno}
                        component={Link}
                        to="cadastrarAluno"
                    >
                        Cadastrar
                    </MenuItem>
                    <MenuItem
                         onClick={handleCloseAnchorElAluno}
                         component={Link}
                         to="listarAluno"
                    >
                        Listar
                    </MenuItem>
                    <MenuItem
                         onClick={handleCloseAnchorElAluno}
                         component={Link}
                         to="listarAprovadosAluno"
                    >
                        Listar Alunos Aprovados
                    </MenuItem>
                </Menu>
            </Box>
        )
    }

    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                    <Typography
                        variant="h4"
                        component="a"
                        href="/"
                        sx={{
                            textDecoration: "none",
                            color: "white",
                            fontFamily: "monospace",
                            letterSpacing: ".3rem",
                            fontWeight: 800
                        }}
                    >
                        CRUD_V1
                    </Typography>

                    <Box sx={{ ml: 3, width: "100%", display: "flex", justifyContent: "flex-end" }}>
                        {dropProfessorMenu()}
                    </Box>

                    <Box sx={{ ml: 3, width: "100%", display: "flex", justifyContent: "flex-end" }}>
                        {dropAlunoMenu()}
                    </Box>
                    
                    {/* Link acessar a página de Login */}
                    <Box sx={{ ml: 3, width: "100%", display: "flex", justifyContent: "flex-end" }}>
                        <Button
                            sx={{ color: "white", my: 2 }}
                            component={Link}
                            to="login"
                        >
                            Login
                        </Button>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default MyMenu