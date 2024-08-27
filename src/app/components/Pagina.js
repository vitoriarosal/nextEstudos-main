import { Container, Nav, Navbar } from "react-bootstrap";


export default function Pagina(props) {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Sistema acadêmico</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Página 1</Nav.Link>
                        <Nav.Link href="cliente">clientes</Nav.Link>
                        <Nav.Link href="#array">Array</Nav.Link>
                        <Nav.Link href="#carros">Carros</Nav.Link>
                        <Nav.Link href="#Nomes">Nomes</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>

            <div className="bg-secondary text-white text-center p-4 mb-4">
                <h1>{props.titulo}</h1>
            </div>

            <Container>
                {props.children}
            </Container>
        </>
    )
}
