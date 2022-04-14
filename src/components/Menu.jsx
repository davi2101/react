import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/carros">Carros</Link>
            <Link className="nav-link" to="/array">Array</Link>
            <Link className="nav-link" to="/objeto">Objeto</Link>
            <Link className="nav-link" to="/contador">Contador</Link>
            <Link className="nav-link" to="/filmes/populares">Filmes Populares</Link>
            <Link className="nav-link" to="/filmes/lancamento">Filmes Lançamento</Link>
            <Link className="nav-link" to="/filmes/cartaz">Filmes em Cartaz</Link>
            <Link className="nav-link" to="/atores/detalhes">Atores dos Filmes</Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Menu