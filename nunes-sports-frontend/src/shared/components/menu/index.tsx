import { Avatar, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import { Box } from '@mui/system';
import { AddressBook, Archive, Article, ChartLine, File, FloppyDisk, MapPinLine, Users } from "phosphor-react";
import Logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";



export const Menu: React.FC<{children: React.ReactNode}> = ({children}) => {
    const url = 'https://sgrh2.systemainformatica.com.br/ui/#/portal-servidor/pmlimoeiro'
    const navigate = useNavigate();
    const theme = useTheme();
    return(
        <>
        <Drawer open={true} variant='permanent' style={{marginRight: 50}}>
            <Box width={theme.spacing(33)} height='100%' display='flex' flexDirection='column'>
                <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
                    <Avatar sx={{height: theme.spacing(15), width: theme.spacing(15)}} src={Logo} />
                </Box>

                <Divider />

                <Box flex={1}>
                    <List component='nav' >
                        <ListItemButton onClick={() => navigate('/painel')}>
                            <ListItemIcon>
                                <Archive size={20} color="#000080" weight="thin" />
                            </ListItemIcon>
                            <ListItemText primary="Todos os Registros" />
                        </ListItemButton>

                        <ListItemButton onClick={() => navigate('/nome')}>
                            <ListItemIcon>
                                <Users size={20} color="#000080" weight="thin" />
                            </ListItemIcon>
                            <ListItemText primary="Pesquisa por Nome" />
                        </ListItemButton>

                        <ListItemButton onClick={() => navigate('/matricula')}>
                            <ListItemIcon>
                                <Article size={20} color="#000080" weight="thin" />
                            </ListItemIcon>
                            <ListItemText primary="Pesquisa por Matrícula" />
                        </ListItemButton>

                        <ListItemButton onClick={() => navigate('/cpf')}>
                            <ListItemIcon>
                                <File size={20} color="#000080" weight="thin" />
                            </ListItemIcon>
                            <ListItemText primary="Pesquisa por CPF" />
                        </ListItemButton>

                        <ListItemButton onClick={() => navigate('/territorio')}>
                            <ListItemIcon>
                                <MapPinLine size={20} color="#000080" weight="thin" />
                            </ListItemIcon>
                            <ListItemText primary="Pesquisa por Território" />
                        </ListItemButton>

                        <ListItemButton onClick={() => navigate('/endereco')}>
                            <ListItemIcon>
                                <AddressBook size={20} color="#000080" weight="thin" />
                            </ListItemIcon>
                            <ListItemText primary="Pesquisa por Endereço" />
                        </ListItemButton>

                        <ListItemButton onClick={() => navigate('/cadastro')}>
                            <ListItemIcon>
                                <FloppyDisk size={20} color="#000080" weight="thin" />
                            </ListItemIcon>
                            <ListItemText primary="Cadastrar Pessoa" />
                        </ListItemButton>

                        <ListItemButton href={url} target="_blank">
                            <ListItemIcon>
                                <ChartLine size={20} color="#000080" weight="thin" />
                            </ListItemIcon>
                            <ListItemText primary="Contracheque" />
                        </ListItemButton>

                    </List>
                </Box>

            </Box>
        </Drawer>
        <Box height="100vh" marginLeft={theme.spacing(33)}>
            {children}
        </Box>
        </>
    )
}