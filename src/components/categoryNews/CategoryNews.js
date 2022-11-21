import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

import './categoryNews.scss';

const CategoryNews = () => {
    return (
        <section className='category'>
            <Container>
                <div  id="left-tabs">
                    <Tab.Container defaultActiveKey="first">
                    <Row>
                        <Col sm={2}>
                        <Nav variant="tabs" className="flex-column">
                            <Nav.Item>
                            <Nav.Link className='navTitle'>CATEGORIES:</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <Row>
                                <Col sm={7}>
                                    <Row>
                                        <Col sm={12}>
                                            <Card className='newsCard topCategoryCard'>
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
                                    </Row>
                                    <Row>
                                        <Col sm={6}>
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
                                        <Col sm={6}>
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
                                    </Row>
                                </Col>
                                <Col sm={5}>
                                    <ListGroup>
                                        <ListGroup.Item className="wrapper">
                                            <div className='textCard'>
                                                <Card.Body>
                                                    <Card.Subtitle className="mb-2 text-muted">20-11-2022 19:30</Card.Subtitle>
                                                        <Card.Text>
                                                            This is a wider card with supporting text below as a natural lead-in
                                                            to additional content. This content is a little bit longer.
                                                        </Card.Text>
                                                </Card.Body>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="wrapper">
                                            <div className='textCard'>
                                                <Card.Body>
                                                    <Card.Subtitle className="mb-2 text-muted">20-11-2022 19:30</Card.Subtitle>
                                                        <Card.Text>
                                                            This is a wider card with supporting text below as a natural lead-in
                                                            to additional content. This content is a little bit longer.
                                                        </Card.Text>
                                                </Card.Body>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="wrapper">
                                            <div className='textCard'>
                                                <Card.Body>
                                                    <Card.Subtitle className="mb-2 text-muted">20-11-2022 19:30</Card.Subtitle>
                                                        <Card.Text>
                                                            This is a wider card with supporting text below as a natural lead-in
                                                            to additional content. This content is a little bit longer.
                                                        </Card.Text>
                                                </Card.Body>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="wrapper">
                                            <div className='textCard'>
                                                <Card.Body>
                                                    <Card.Subtitle className="mb-2 text-muted">20-11-2022 19:30</Card.Subtitle>
                                                        <Card.Text>
                                                            This is a wider card with supporting text below as a natural lead-in
                                                            to additional content. This content is a little bit longer.
                                                        </Card.Text>
                                                </Card.Body>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="wrapper">
                                            <div className='textCard'>
                                                <Card.Body>
                                                    <Card.Subtitle className="mb-2 text-muted">20-11-2022 19:30</Card.Subtitle>
                                                        <Card.Text>
                                                            This is a wider card with supporting text below as a natural lead-in
                                                            to additional content. This content is a little bit longer.
                                                        </Card.Text>
                                                </Card.Body>
                                            </div>
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
                            </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div>
                                orjvifdljvsdcjsdjsifhrightnrobrjeiovmdi
                            </div>
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
                </div>
        </Container>
        </section>
        
    )
}

export default CategoryNews;