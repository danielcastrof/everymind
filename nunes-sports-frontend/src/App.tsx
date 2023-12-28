import { BrowserRouter } from "react-router-dom";
import { MenuLateral } from "./shared/components/menu-lateral";
import { AppRoutes } from './shared/routes/index';

function App() {
  return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
  );
}

export default App;