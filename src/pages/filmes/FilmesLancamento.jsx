import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesLancamento = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        apiFilmes.get('movie/upcoming?language=pt-BR').then(resultado => {
            setFilmes(resultado.data.results)
        })

    }, [])

    return (
        <div>
            <h1>Filmes Lançamentos</h1>

            <Row>
                {filmes.map(item => (
                    <Col key={item.id} md={3} className="mb-3">
                        <Card>
                            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} title={item.title} />
                            <Card.Body>

                                <Link className="btn btn-success" to={'/filmes/' + item.id}>
                                    Assistir 
                                </Link>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default FilmesLancamento