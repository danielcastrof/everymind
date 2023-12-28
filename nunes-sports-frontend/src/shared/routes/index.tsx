import { Routes, Route, Link, redirect } from 'react-router-dom';
import {Cadastro} from '../../pages/cadastro'
import { Codigo } from '../../pages/busca-por-codigo';
import { Nome } from '../../pages/painel';
import { Atualizar } from '../../pages/atualizar-produto';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/cadastro" element={<Cadastro></Cadastro>} />
      <Route path="/code" element={<Codigo></Codigo>} />
      <Route path="/nome" element={<Nome></Nome>} />
      <Route path="/edit" element={<Atualizar></Atualizar>} />
      <Route path="*" element={<Nome></Nome>} />
    </Routes>
  );
}