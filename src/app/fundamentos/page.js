'use client'

import Pagina from "../components/Pagina";

export default function Objetos() {

    const carros = [
        {marca: 'GM', modelo: 'Corsa', cor: 'Rosa', foto: ''}, 
        {marca: 'GM', modelo: 'Celta', cor: 'Preto', foto: ''}, 
        {marca: 'Ferrari', modelo: 'La Ferrari', cor: 'Vermelha', foto: ''}, 
        {marca: 'VW', modelo: 'Fusca', cor: 'Prata', foto: ''}, 
        {marca: 'GM', modelo: 'Cobalt', cor: 'Branco', foto: ''}, 
    ]

    return (
        <Pagina titulo="Objetos">
            {carros.map((item, index) => (
                <div key={index}>
                    <p>Marca: {item.marca}</p>
                    <p>Modelo: {item.modelo}</p>
                    <p>Cor: {item.cor}</p>
                    {}
                    {}
                </div>
            ))}
        </Pagina>
    )
}
