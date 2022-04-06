import React from 'react'
import { Container } from 'react-bootstrap'

const Array = () => {

    const carros = ['Fusca', 'Gol', 'Celta', 'Corola', 'Corsa']
    const pessoas = ['Orion', 'Cleitin', 'Jorgin', 'Klebin']

    return (
        <div>
            <Container>
            <h1>Array</h1>

            <h2>Carros</h2>
            <ul>
            {carros.map(item => (
                <li> {item} </li>
            ))}
            </ul>

            <h2>Pessoas</h2>
            <ol>
                {pessoas.map(item => (
                    <li>{item}</li>
                ))}
            </ol>
            </Container>

        </div>
    )
}

export default Array