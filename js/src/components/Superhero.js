import {Card, Container, Row, Col, Image} from "react-bootstrap";
const Superhero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">Superhero Movies</h1>
                <br />
                <Row>
                    <Col md={4} className='movieWrapper' >
                        <Card className="text-white movieImage">
                            <Image alt="" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1">
                                    <Card.Title className="text-center">Card title</Card.Title>
                                    <Card.Text className="text-left">
                                        This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Superhero