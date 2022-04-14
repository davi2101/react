import './App.css';
import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carros from "./pages/Carros";
import Array from "./pages/Array";
import Objeto from "./pages/Objeto";
import Contador from "./pages/Contador";
import FilmesPopulares from "./pages/filmes/FilmesPopulares";
import FilmesDetalhes from "./pages/filmes/FilmesDetalhes";
import FilmesLancamento from "./pages/filmes/FilmesLancamento.jsx";
import FilmesCartaz from "./pages/filmes/FilmesCartaz.jsx";
import AtoresDetalhes from "./pages/atores/AtoresDetalhes.jsx";
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
          <Route path="/filmes/:id" element={<FilmesDetalhes />} />
          <Route path="/filmes/lancamento" element={<FilmesLancamento />} />
          <Route path="/filmes/cartaz" element={<FilmesCartaz />} />
          <Route path="/atores/:id" element={<AtoresDetalhes />} />
        </Routes>
        </Container>

      </BrowserRouter>
    </div>
  );
}

export default App;
