import { Routes, Route, Link, redirect } from 'react-router-dom';
import {Cadastro} from '../../pages/cadastro'

export const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/painel" element={<Painel></Painel>} /> */}
      <Route path="/cadastro" element={<Cadastro></Cadastro>} />
      <Route path="*" element={<Cadastro></Cadastro>} />
    </Routes>
  );
}