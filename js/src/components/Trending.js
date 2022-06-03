import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
const Trending = () => {

    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then((response) => {
            setMovies(response.data.results)
        })
    }, [])

    return (
        <div>
            <Container>
                <br />
                <h1 id="trending" className="text-white">Trending Movies</h1>
                <br />
                <Row>
                    {movies.map((result, index) => {
                     return (
                        <Col md={3} className='movieWrapper'  key={index}>
                            <Card className="text-white movieImage">
                                <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="" className="images" />
                                <div className="bg-dark">
                                    <div className="cttr border">
                                        <Card.Title className="mb-1 text-center">{result.title}</Card.Title>
                                        <Card.Text className="overs text-left">
                                            {result.overview}
                                        </Card.Text>
                                        <Card.Text className="mlbb text-left">Release On: <a className="release text-danger">{result.release_date}</a></Card.Text>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    )
                     })
                    }
                </Row>
            </Container>
        </div>
    )
}
export default Trending