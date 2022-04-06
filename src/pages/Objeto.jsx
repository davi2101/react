import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Objeto = () => {

    const carros = [
        { marca: 'VW', modelo: 'Fusca', cor: 'Branco', ano: 1990, valor: 'R$25.250,00', foto: "https://conteudo.imguol.com.br/c/entretenimento/84/2020/10/26/volkswagen-fusca-itamar-inflacionado-1603745128011_v2_450x337.jpg" },
        { marca: 'VW', modelo: 'Gol', cor: 'Vermelho', ano: 2010, valor: 'R$32.000,00', foto: "https://espacodoautomovelcaxias.com.br/carros/8b0ae0a227eb13cea56216fac6ca42eb-thumbjpg-volkswagen-gol-8601231-1200-900-70.jpg" },
        { marca: 'Chevrolet', modelo: 'Celta', cor: 'preto', ano: 2011, valor: 'R$18.000,00', foto: "https://s3.autogestor.net/5065/vehicles/948319/photos/uxpIOdOhM4dRFVZbdPdEirRr6gJUcBBJ.jpg" },
        { marca: 'Toyota', modelo: 'Corola', cor: 'Prata', ano: 2021, valor: 'R$80.000,00', foto: "https://www.santoantonioautomoveis.com.br/carros/427c7c6ba8b9e3a4dbadd77844874ded-bigjpeg-toyota-corolla-8625223-1000-750-70.jpg" },
        { marca: 'VW', modelo: 'Jeta', cor: 'Branco', ano: 2020, valor: 'R$95.000,00', foto: "https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2021/202110/20211018/volkswagen-jetta-2.0-tsi-highline-211cv-gasolina-4p-tiptronic-WMIMAGEM20592016227.jpg" },
        { marca: 'VW', modelo: 'Virtus', cor: 'Preto', ano: 2022, valor: 'R$90.000,00', foto: "https://images.noticiasautomotivas.com.br/img/f/volkswagen-virtus-gts-avalia%C3%A7%C3%A3o-na-1.jpg" },
        { marca: 'Chevrolet', modelo: 'S10', cor: 'preto', ano: 2011, valor: 'R$100.000,00', foto: "https://s3.ecompletocarros.dev/images/lojas/150/veiculos/80079/veiculoInfoVeiculoImagesMobile/vehicle_image_1636664883_5092c617a4ea333edf5b983eae95ab6d.jpeg" },
        { marca: 'Toyota', modelo: 'Hillux', cor: 'Prata', ano: 2021, valor: 'R$250.000,00', foto: "https://cdn.carsp.com.br/upload/imgcache/000776d60d528c909f4ed56abfb8ad53.jpeg" },
    ]

    return (
        <div>
            <h1 className="m-4">Carros</h1>

            <Container>

                <Row>
                    {carros.map(item => (
                        <Col md={3} className="mb-3">
                            <Card border="secondary">
                                <Card.Img variant="top" src={item.foto} />
                                <Card.Body>
                                    <Card.Title>{item.marca} - {item.modelo}</Card.Title>
                                    <Card.Text><strong>Cor:</strong> {item.cor}</Card.Text>
                                    <Card.Text><strong>Ano:</strong> {item.ano}</Card.Text>
                                    <Card.Text><strong>Valor:</strong> {item.valor}</Card.Text>
                                    <Button variant="danger">Ver Detalhes</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    )
}

export default Objeto