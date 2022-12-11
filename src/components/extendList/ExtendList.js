import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Spinner from '../spinner/Spinner';
import ErrorGif from '../errorGif/ErrorGif';
import Request from '../../services/Request';
import { useState, useEffect } from 'react';
import './extendList.scss';

const ExtendList = () => {
    const [itemsNew, setItemsNew] = useState(null);
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
    const content = !(loading || error || !itemsNew) ? <ListView itemsNew={itemsNew}/> : null;

    return(
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}


const ListView = ({itemsNew}) => {
    const cards = itemsNew.map((item, i) => {
        if(item.img === null) {
            item.img = './bg.jpg';
        }
        return (
            <Card className='any-news-item' key={i}>
            <Row>
                <Col lg={3}>
                    <Card.Img src={item.img} />
                </Col>
                <Col lg={9}>
                    <Card.Body>
                        <Card.Title><a href={item.link} className="link-to-new">{item.title}</a></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{item.time}</Card.Subtitle>
                        <Card.Text>
                        {item.descr}
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
        )})
    return(
        <Container>
        <Card className='any-news-item'>
            <Card.Body id="card-header">
                <a href="/"><img src="./back-arrow.png"/></a>              
                <div id="block-title">Latest news:</div>
            </Card.Body>
        </Card>
            {cards}
        </Container>
        
        
    )
}

export default ExtendList;