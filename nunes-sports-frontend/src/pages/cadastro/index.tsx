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
import { useNavigate } from 'react-router-dom';
import { Menu } from '../../shared/components/menu/index';

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

export const Cadastro = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [territorio, setTerritorio] = useState<number>(1);
  const [endereco, setEndereco] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [matricula, setMatricula] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');

  const navigate = useNavigate();

  const limparCampos = () => {
      setName('')
      setEmail('')
      setCpf('')
      setTelefone('')
      setEndereco('')
      setMatricula('')
  }

//   const handleSubmit = async () => {
//     await cadastrar({ email, name, territorio, endereco, telefone, matricula, cpf }).then(() => {
//       alert('Cadastro realizado com sucesso!')
//     }).catch(() => {
//       alert('Erro ao realizar cadastro!')
//     }).finally(() => {
//       limparCampos();
//     });
//   };

  useEffect(() => {
  }, [email, name, territorio, endereco, telefone, matricula, cpf]);

  const handleChange = async (event: SelectChangeEvent<number>) => {
    setTerritorio(event.target.value as number);
  };

  return (
    <>
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
              Cadastro
            </Typography>
            <Box component="form" onSubmit={() => "handleSubmit()"} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required={true}
                    fullWidth
                    id="firstName"
                    label="Nome Completo"
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={name.length < 6}
                    />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required={true}
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={email.length < 7}
                    />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required={true}
                    fullWidth
                    name="cpf"
                    label="CPF"
                    id="cpf"
                    autoComplete="cpf"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    error={cpf.length < 11 || cpf.length > 11}
                    />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required={true}
                    fullWidth
                    name="phone"
                    label="Telefone"
                    id="phone"
                    autoComplete="phone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    error={telefone.length < 8}
                    />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required={true}
                    fullWidth
                    name="adress"
                    label="Endereço"
                    id="adress"
                    autoComplete="adress"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    error={endereco.length < 8}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    required={true}
                    fullWidth
                    name="matricula"
                    label="Matrícula"
                    id="matricula"
                    autoComplete="number"
                    value={matricula}
                    onChange={(e) => setMatricula(e.target.value)}
                    error={matricula.length < 3}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required={true}
                    fullWidth
                    name="territorio"
                    label="Território"
                    id="territorio"
                    autoComplete="number"
                    value={territorio}
                    onChange={(e: any) => handleChange(e)}
                    select={true}
                  >
                    <MenuItem value={1}>01</MenuItem>
                    <MenuItem value={2}>02</MenuItem>
                    <MenuItem value={3}>03</MenuItem>
                    <MenuItem value={4}>04</MenuItem>
                    <MenuItem value={5}>05</MenuItem>
                  </TextField>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onSubmit={() => {
                //   handleSubmit();
                }}
              >
                Cadastrar
              </Button>
              <Grid container justifyContent="flex-end">
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
      </Menu>
    </>
  );
};