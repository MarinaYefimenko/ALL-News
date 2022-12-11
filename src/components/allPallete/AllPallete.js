import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';

import Spinner from '../spinner/Spinner';
import ErrorGif from '../errorGif/ErrorGif';
import Request from '../../services/Request';
import { useState, useEffect } from 'react';

import './allPallete.scss';

const AllPallete = () => {
    
    const[itemsNew, setItemsNew] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const request = new Request();

    const updateItemsNew = () => {
        onNewsLoading();
        request
            .getMainNewsBE()
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

    const errorMessage = error ? <ErrorGif/> : null;
    const spinner = loading ? <Spinner/> : null;
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

    const cards = itemsNew.slice(5, 11).map((item, i) => {
        if(item.img === null) {
            item.img = './bg.jpg';
        }
        return (
            <Col key={i}>
                <Card className='newsImgCard'>
                    <Card.Img className="cardImg" variant="top" src={item.img} alt={item.title}/>
                    <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{item.time}</Card.Subtitle>
                    <Card.Text>
                        <a href={item.link} className="newsLink">{item.title}</a>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    })

    const textNews = itemsNew.slice(11, 15).map((item, i) => {
        return (
            <ListGroup.Item className="wrapper" key={i+6}>
                <Card bg="dark" text="white">
                    <Card.Body className='textCard'>
                        <Card.Subtitle className="mb-2 text-muted">{item.time}</Card.Subtitle>
                            <Card.Text>
                                <a href={item.link} className="newsLink">{item.title}</a>
                            </Card.Text>
                    </Card.Body>
                </Card>
            </ListGroup.Item>
        )
    })

    return(
        <section className='all'>
             <Container>
                <Row>
                    <Col lg={3}>
                        <ListGroup>
                            {textNews}
                            <ListGroup.Item className="wrapper">
                                <div className='textCard'>
                                    <Card.Body>
                                            <Card.Text className='moreText d-flex'>
                                                <a href="/all-news">
                                                See more news     
                                                <img src="https://img.icons8.com/ios/30/null/circled-chevron-right.png" alt=''/>
                                                </a>
                                            </Card.Text>
                                    </Card.Body>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg={9}>
                        <CardGroup>
                        <Row xs={1} sm={2} md={3} className="cardRow g-6">
                            {cards}
                        </Row>
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AllPallete;
