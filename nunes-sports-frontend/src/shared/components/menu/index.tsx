import { Avatar, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import { Box } from '@mui/system';
import { Archive, FloppyDisk, Tag } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.png';



export const Menu: React.FC<{children: React.ReactNode}> = ({children}) => {
    const navigate = useNavigate();
    const theme = useTheme();
    return(
        <>
        <Drawer open={true} variant='permanent' style={{marginRight: 50}}>
            <Box width={theme.spacing(40)} height='100%' display='flex' flexDirection='column' alignItems="center"
  justifyContent="center">
                <Box width='100%' height={theme.spacing(21)} display='flex' alignItems='center' justifyContent='center'>
                    <Avatar sx={{height: theme.spacing(21), width: theme.spacing(36)}} src={Logo} />
                </Box>

                <Divider />

                <Box flex={1}>
                    <List component='nav' >
                        <ListItemButton onClick={() => navigate('/produtos')}>
                            <ListItemIcon>
                                <Archive size={20} color="#000080" weight="thin" />
                            </ListItemIcon>
                            <ListItemText primary="Todos os Registros" />
                        </ListItemButton>

                        <ListItemButton onClick={() => navigate('/produtos/code')}>
                            <ListItemIcon>
                                <Tag size={20} color="#000080" weight="thin" />
                            </ListItemIcon>
                            <ListItemText primary="Pesquisa por Código" />
                        </ListItemButton>

                        <ListItemButton onClick={() => navigate('/cadastro')}>
                            <ListItemIcon>
                                <FloppyDisk size={20} color="#000080" weight="thin" />
                            </ListItemIcon>
                            <ListItemText primary="Cadastrar Produto" />
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