import React, { useState } from 'react';
import { useEffect } from 'react';
import apiFilmes from '../../services/apiFilmes';

const FilmesPopulares = () => {

    const [filmes, setfilmes] = useState([])
    useEffect(()=>{

        apiFilmes.get('movie/popular').then(resultado=>{
            console.log(resultado.data.results)
        })

    }, [])

  return (
    <div>
        <h1>Filmes Populares</h1>

    </div>
  )
}

export default FilmesPopulares