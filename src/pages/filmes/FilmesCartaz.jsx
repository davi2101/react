import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import apiFilmes from '../../services/apiFilmes'

const FilmesCartaz = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        apiFilmes.get('movie/now_playing?language=pt-BR').then(resultado => {
            setFilmes(resultado.data.results)
        })

    }, [])

    return (
        <div>
            <h1>Filmes em Cartaz</h1>

            <Row>
                {filmes.map(item => (
                    <Col key={item.id} md={3} className="mb-3">
                        <Card>
                            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} title={item.title} />
                            
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default FilmesCartaz