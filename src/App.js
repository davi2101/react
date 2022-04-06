import './App.css';
import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carros from "./pages/Carros";
import Array from "./pages/Array";
import Objeto from "./pages/Objeto";
import Contador from "./pages/Contador";
import FilmesPopulares from "./pages/filmes/FilmesPopulares";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>

      <BrowserRouter>

        <Menu />

        <Container>
        <Routes>
          <Route path="/carros" element={<Carros />} />
          <Route path="/array" element={<Array />} />
          <Route path="/objeto" element={<Objeto />} />
          <Route path="/contador" element={<Contador />} />
          <Route path="/filmes/populares" element={<FilmesPopulares />} />
        </Routes>
        </Container>

      </BrowserRouter>
    </div>
  );
}

export default App;
