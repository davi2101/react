import React from 'react'
import { Card } from 'react-bootstrap'

const Cartao = (props) => {
  return (
    <div>
      <Card border="danger" className="mb-3 ms-2" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imagem}></Card.Img>
        <Card.Body>
          <Card.Title>{props.titulo}</Card.Title>
          <Card.Text>
            Seja bem-vindo ao centro universitário Iesb
          </Card.Text>
          <Card.Link target="_blank" href="https://www.iesb.br/">Entrar Iesb</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cartao