import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Request from '../../services/Request';
import { useState, useEffect } from 'react';


import './categoryNews.scss';

const CategoryNews = () => {
    const[itemsNew, setItemsNew] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const request = new Request();

    const updateItemsNew = () => {
        onNewsLoading();
        request
            .getCategoryNews('general')
            .then(onNewsLoaded)
            .catch(onError);
    }
    const onNewsLoaded = (itemsNew) => {
        setLoading(false);
        setItemsNew(itemsNew);
    }

    const onNewsLoading = () => {
        setLoading(true);
    }

    const onError = () => {
        setError(true);
        setLoading(false);
    }

    useEffect(() => {
        updateItemsNew();
        // eslint-disable-next-line
    }, []);

    const errorMessage = error ? <div>Error</div> : null;
    const spinner = loading ? <div>Spinner</div> : null;
    const content = !(loading || error || !itemsNew) ? <View itemsNew={itemsNew}/> : null;

    return(
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )


}

const View = ({itemsNew}) => {
    const categoryNames = ['general', 'entertainment', 'business', 'healths', 'cience', 'sports', 'technology'];
    const tabs = categoryNames.map((name, i) => {
        return (
            <Nav.Item key={i + 'tab'}>
                <Nav.Link eventKey={name}>{name.toUpperCase()}</Nav.Link>
            </Nav.Item>
        )
    })

    const textNews = itemsNew.slice(3, 9).map((item, i) => {
        return (
            <ListGroup.Item className="wrapper" key={i+3}>
                <div className='textCard'>
                    <Card.Body className='textCard'>
                        <Card.Subtitle className="mb-2 text-muted">{item.time}</Card.Subtitle>
                            <Card.Text>
                                <a href={item.link} className="newsLink">{item.title}</a>
                            </Card.Text>
                    </Card.Body>
                </div>
            </ListGroup.Item>
        )
    })

    function cardRender (itemsNew, numberOfNew, colSize, cardClasses) {
        const item = itemsNew[numberOfNew];
        if(item.img === null) {
            item.img = './bg.jpg';
        }
        return (
            <Col sm={colSize}>
                <Card className={cardClasses}>
                    <Card.Img variant="top" src={item.img} alt={item.title}/>
                    <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{item.time}</Card.Subtitle>
                        <Card.Text>
                        <a href={item.link} className="newsLink">{item.title}</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    }    

    return (
        <section className='category'>
            <Container>
                <div  id="left-tabs">
                    <Tab.Container defaultActiveKey="general">
                    <Row>
                        <Col sm={2}>
                        <Nav variant="tabs" className="flex-column">
                            <Nav.Item>
                            <div className='navTitle'>CATEGORIES:</div>
                            </Nav.Item>
                            {tabs}
                        </Nav>
                        </Col>
                        <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="general">
                            <Row>
                                <Col sm={7} className="categoryCardsWrapper">
                                    <Row>
                                        {cardRender(itemsNew, 0, 12, 'newsCard topCategoryCard')}
                                    </Row>
                                    <Row>
                                        {cardRender(itemsNew, 1, 6, 'newsCardSmall')}
                                        {cardRender(itemsNew, 2, 6, 'newsCardSmall')}
                                    </Row>
                                </Col>
                                <Col sm={5}>
                                    <ListGroup>
                                        {textNews}
                                        <ListGroup.Item className="wrapper">
                                            <div className='textCard'>
                                                <Card.Body>
                                                        <Card.Text className='moreText d-flex'>
                                                            <a href="/">
                                                            See all news     
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
                            <Tab.Pane eventKey="entertainment">
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