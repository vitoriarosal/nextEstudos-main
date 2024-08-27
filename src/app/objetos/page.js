'use client';

import Pagina from "../components/Pagina";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Objetos() {
    const carros = [
        {marca: 'GM', modelo: 'Corsa', cor: 'Rosa', ano: 2005, foto: 'https://i.pinimg.com/originals/6b/73/e2/6b73e20fe9778d91fed49f7077d0d0ee.jpg'}, 
        {marca: 'GM', modelo: 'Celta', cor: 'Preto', ano: 2008, foto: 'https://cdn.grupolance.com.br/batches/5e/17222/4e487c60b3d30c301e59e3581fd8d977.jpg'}, 
        {marca: 'Ferrari', modelo: 'La Ferrari', cor: 'Vermelha', ano: 2015, foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/LaFerrari_in_Beverly_Hills_%2814563979888%29.jpg/1200px-LaFerrari_in_Beverly_Hills_%2814563979888%29.jpg'}, 
        {marca: 'VW', modelo: 'Fusca', cor: 'Prata', ano: 1980, foto: 'https://i0.statig.com.br/bancodeimagens/9o/dw/qz/9odwqzi9te915p4koe83o8rkd.jpg'}, 
        {marca: 'GM', modelo: 'Cobalt', cor: 'Branco', ano: 2012, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrnAUThADyc2haUfmE7YGIJyPa5sIfF-Awmg&s'}, 
    ];

    return (
        <Pagina titulo="Carros">
            <div className="my-5">
                <Row>
                    {carros.map((item, index) => (
                        <Col key={index} sm={12} md={6} lg={4} xl={3} className="mb-4">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={item.foto} alt={`${item.marca} ${item.modelo}`} />
                                <Card.Body>
                                    <Card.Title>{item.marca} {item.modelo}</Card.Title>
                                    <Card.Text>
                                        Cor: {item.cor}
                                    </Card.Text>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <span>Ano: <strong>{item.ano}</strong></span>
                                        </div>
                                        <Button variant="primary">Detalhes</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Pagina>
    );
}
