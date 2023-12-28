import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { MenuItem, SelectChangeEvent } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Menu } from '../../shared/components/menu/index';
import { atualizar } from '../../services/api/atualizar/index';
import { api } from '../../services/api';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                System Administrator
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export const Atualizar = () => {
    const { id } = useParams<'id'>();
    const [registers, setRegisters] = useState<any[]>([]);
    const [nome, setNome] = useState<string>('');
    const [codigo, setCodigo] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [preco, setPreco] = useState<number>(0);

    const inputProps = {
        step: 300,
    };

    const getId = async () => {
        const response = await api.get('/produto/' + id);
            try{
                setRegisters(response.data);
                setNome(response.data.nome);
                setCodigo(response.data.codigo);
                setDescricao(response.data.descricao);
                setPreco(response.data.preco);
            }
            catch(error){
                console.log(error);
            }
    };

    const addPost = async () => {
        try {
            await atualizar({ id, nome, codigo, descricao, preco });
            alert('ATUALIZADO');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        getId();
    }, [id]);

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value;
        const numericValue = parseFloat(rawValue.replace(/[^\d.,]/g, '').replace(',', '.'));
        setPreco(isNaN(numericValue) ? 0 : numericValue);
    };

    return (
        <Menu>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            ":empty": {
                                display: 'none'
                            }
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Atualizar Cadastro
                        </Typography>
                        <Box component="form" onSubmit={(e) => { e.preventDefault(); addPost(); }} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="nome"
                                        required
                                        fullWidth
                                        id="nome"
                                        label="Nome do Produto"
                                        autoFocus
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                        error={nome.length < 2}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="codigo"
                                        label="Código do Produto"
                                        name="codigo"
                                        value={codigo}
                                        onChange={(e) => setCodigo(e.target.value)}
                                        error={codigo.length < 1}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="preco"
                                        label="Preço"
                                        id="preco"
                                        value={preco === 0 ? '' : preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                        onChange={handlePriceChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        multiline
                                        rows={2}
                                        name="descricao"
                                        label="Descrição"
                                        id="descricao"
                                        value={descricao}
                                        onChange={(e) => setDescricao(e.target.value)}
                                        error={descricao.length < 2}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Atualizar
                            </Button>
                            <Grid container justifyContent="flex-end" />
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Container>
            </ThemeProvider>
        </Menu>
    );
};
