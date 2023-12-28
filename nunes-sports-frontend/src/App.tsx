import { BrowserRouter } from "react-router-dom";
import { Menu } from "./shared/components/menu";
import { AppRoutes } from './shared/routes/index';

function App() {
  return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
  );
}

export default App;