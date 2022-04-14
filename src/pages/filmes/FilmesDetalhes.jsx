import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = () => {

    const params = useParams()

    const [filmes, setfilmes] = useState({})

    const [atores, setatores] = useState([])

    useEffect(() => {
        apiFilmes.get('movie/' + params.id + '?language=pt-br').then(resultado => {
            setfilmes(resultado.data)
        })
        apiFilmes.get('movie/' + params.id + '/credits?language=pt-br').then(resultado => {
            setatores(resultado.data.cast)
        })
    }, [params])

    return (
        <div>

            {!filmes.id && <h1>Carregando... Aguarde!</h1>}

            {filmes.id &&
                <div>
                    <h1>{filmes.title}</h1>

                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filmes.poster_path} />
                            </Card>
                        </Col>
                        <Col md={8}>
                            <p><strong>Título Original: </strong>{filmes.original_title}</p>
                            <p><strong>Popularidade: </strong>{filmes.popularity}</p>
                            <p><strong>Data de Lançamento: </strong>{filmes.release_date}</p>
                            <p><strong>Orçamento: </strong>{filmes.budget}</p>

                            <p><strong>Gêneros: </strong>
                                {filmes.genres.map(item => (
                                    <span>{item.name}, </span>
                                ))}
                            </p>

                            <p><strong>Sinopse: </strong>{filmes.overview}</p>

                            <Link className='btn btn-primary' to={-1}>Voltar</Link>
                        </Col>

                        <h1>Atores</h1>
                        {atores.map(item => (
                            <Col className="mb-2" md={2}>
                                <Card>
                                    <Link to={'/atores/' + item.id}>
                                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} title={item.name} />
                                    </Link>
                                </Card>
                            </Col>
                        ))}

                    </Row>
                </div>
            }
        </div>
    )
}

export default FilmesDetalhes