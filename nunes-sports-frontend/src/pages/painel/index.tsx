import { TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { Menu } from '../../shared/components/menu/index';
import { api } from '../../services/api/index';

export const Nome = () => {
    const [registers, setRegisters] = useState<any[]>([]);
    const [nome, setNome] = useState<string>('');

    const handleChange = async (event: any) => {
        setNome(event.target.value as string);
    };

    const getName = async () => {
        if (nome === '') {
            const response = await api.get('/produto');
            setRegisters(response.data);
        }
        else {
        const response = await api.get('/produto/nome/' + nome);
        setRegisters(response.data);
        }
    }

    useEffect(() => {
        getName();
    }, [nome]);

    return (
        <>
            <Menu>
                <TextField style={{ width: '15%', marginLeft: 150, marginBottom: 40, marginTop: 50 }} onChange={(e) => {handleChange(e)}} placeholder='Nome do Produto:' id="outlined-basic" label="Nome" variant="outlined" />
                <TableContainer component={Paper} style={{ marginTop: 25 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead style={{ backgroundColor: '#0405FF', borderRadius: 80 }}>
                            <TableRow >
                                <TableCell style={{ fontWeight: 700, fontSize: 18, color: 'white' }} align="center">Nome</TableCell>
                                <TableCell style={{ fontWeight: 700, fontSize: 18, color: 'white' }} align="center">Código&nbsp;</TableCell>
                                <TableCell style={{ fontWeight: 700, fontSize: 18, color: 'white' }} align="center">Descrição&nbsp;</TableCell>
                                <TableCell style={{ fontWeight: 700, fontSize: 18, color: 'white' }} align="center">Preço&nbsp;</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody style={{ padding: 10, backgroundColor: '#D8EFF8' }}>
                            {Array.isArray(registers) && registers.map((row) => (
                                <TableRow
                                    key={row.codigo}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align='center' component="th" scope="row">
                                        {row.nome}
                                    </TableCell>
                                    <TableCell align="center">{row.codigo}</TableCell>
                                    <TableCell align="center">{row.descricao}</TableCell>
                                    <TableCell align="center">{row.preco}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Menu>
        </>
    );
}