import {Navbar, Nav, Container} from "react-bootstrap"

const NavigationBar = () => {
    return(
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/" className="brandid">
                        <div className="pleck">P-Leck </div>
                        <br />
                        <div className="film"> FILM</div></Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#trending">Trending</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar