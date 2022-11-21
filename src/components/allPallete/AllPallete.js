import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

import './allPallete.scss';

const AllPallete = () => {
    return(
        <section className='all'>
             <Container>
                <Row>
                    <Col sm={3}>
                        <ListGroup>
                            <ListGroup.Item className="wrapper">
                                <Card bg="light">
                                    <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted">20-11-2022 19:30</Card.Subtitle>
                                            <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in
                                                to additional content. This content is a little bit longer.
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </ListGroup.Item>
                            <ListGroup.Item className="wrapper">
                                <Card bg="light">
                                    <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted">20-11-2022 19:30</Card.Subtitle>
                                            <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in
                                                to additional content. This content is a little bit longer.
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </ListGroup.Item>
                            <ListGroup.Item className="wrapper">
                                <Card bg="light">
                                    <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted">20-11-2022 19:30</Card.Subtitle>
                                            <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in
                                                to additional content. This content is a little bit longer.
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </ListGroup.Item>
                            <ListGroup.Item className="wrapper">
                                <Card bg="light">
                                    <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted">20-11-2022 19:30</Card.Subtitle>
                                            <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in
                                                to additional content. This content is a little bit longer.
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </ListGroup.Item>
                            <ListGroup.Item className="wrapper">
                                <div className='textCard'>
                                    <Card.Body>
                                            <Card.Text className='moreText d-flex'>
                                                <a href="/">
                                                See more news     
                                                <img src="https://img.icons8.com/ios/30/null/circled-chevron-right.png" alt=''/>
                                                </a>
                                            </Card.Text>
                                    </Card.Body>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={9}>
                        <Row xs={1} md={3} className="g-6">
                            {Array.from({ length: 6 }).map((_, idx) => (
                                <Col>
                                    <Card className='newsCard'>
                                        <Card.Img variant="top" src='./bg.jpg' />
                                        <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted">20-11-2022 19:30</Card.Subtitle>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in
                                            to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AllPallete;
