import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const AtoresDetalhes = () => {

  const params = useParams()

  const [atores, setatores] = useState({})

  const [filmes, setfilmes] = useState([])

  useEffect(() => {
    apiFilmes.get('person/' + params.id + '?language=pt-br').then(resultado => {
      setatores(resultado.data)
    })
    apiFilmes.get('person/' + params.id + '/movie_credits?language=pt-br').then(resultado => {
      setfilmes(resultado.data.cast)
    })
  }, [])

  return (
    <div>
      <h1>{atores.name}</h1>
      <Row>
        <Col md={4}>
          <Card>
          <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + atores.profile_path} />
          </Card>
        </Col>
        <Col md={8}>
          <p><strong>Data de Aniversário: </strong>{atores.birthday}</p>
          <p><strong>Local de Nascimento: </strong>{atores.place_of_birth}</p>
          <p><strong>Bibliografia: </strong>{atores.biography}</p>

          <Link className='btn btn-primary' to={-1}>Voltar</Link>
        </Col>

                        <h1>Filmes</h1>
                        {filmes.map(item => (
                            <Col className="mb-2" md={2}>
                                <Card>
                                    <Link to={'/filmes/' + item.id}>
                                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} title={item.title} />
                                    </Link>
                                </Card>
                            </Col>
                        ))}

      </Row>

    </div>
  )
}

export default AtoresDetalhes