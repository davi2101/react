import React from 'react'

const Objeto = () => {

    const carros = [
    {marca:'VW', modelo:'Fusca', cor:'Branco', ano: 1990, foto:"https://cdn.awsli.com.br/800x800/1766/1766071/produto/95888856/3c1b9d842e.jpg"},
    {marca:'VW', modelo:'Gol', cor:'Vermelho', ano: 2010, foto:"https://espacodoautomovelcaxias.com.br/carros/8b0ae0a227eb13cea56216fac6ca42eb-thumbjpg-volkswagen-gol-8601231-1200-900-70.jpg"},
    {marca:'Chevrolet', modelo:'Celta', cor:'preto', ano: 2011, foto:"https://s3.autogestor.net/5065/vehicles/948319/photos/uxpIOdOhM4dRFVZbdPdEirRr6gJUcBBJ.jpg"},
    {marca:'Toyota', modelo:'Corola', cor:'Prata', ano: 2021, foto:"https://revistacarro.com.br/wp-content/uploads/2019/12/Toyota-Corolla-XEi_4.jpg"},
    {marca:'VW', modelo:'Jeta', cor:'Branco', ano: 2020, foto:"https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2021/202110/20211018/volkswagen-jetta-2.0-tsi-highline-211cv-gasolina-4p-tiptronic-WMIMAGEM20592016227.jpg"},
    {marca:'VW', modelo:'Virtus', cor:'Preto', ano: 2022, foto:"https://images.noticiasautomotivas.com.br/img/f/volkswagen-virtus-gts-avalia%C3%A7%C3%A3o-na-1.jpg"},
    {marca:'Chevrolet', modelo:'S10', cor:'preto', ano: 2011, foto:"https://s3.ecompletocarros.dev/images/lojas/150/veiculos/80079/veiculoInfoVeiculoImagesMobile/vehicle_image_1636664883_5092c617a4ea333edf5b983eae95ab6d.jpeg"},
    {marca:'Toyota', modelo:'Hillux', cor:'Prata', ano: 2021, foto:"https://cdn.carsp.com.br/upload/imgcache/000776d60d528c909f4ed56abfb8ad53.jpeg"},
    ]

  return (
    <div>
        <h1>Objeto</h1>
        <h2>Carros</h2>

        {carros.map(item => (
            <p>{item.foto}</p>
            ))}
    </div>
  )
}

export default Objeto