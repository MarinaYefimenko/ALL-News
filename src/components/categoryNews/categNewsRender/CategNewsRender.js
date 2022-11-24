import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

import Spinner from '../../spinner/Spinner';
import ErrorGif from '../../errorGif/ErrorGif';
import Request from '../../../services/Request';
import { useState, useEffect } from 'react';

import './categNewsRender.scss';

const CategNewsRender = (props) => { 
    const[itemsNew, setItemsNew] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const request = new Request();

    const updateItemsNew = () => {
        onNewsLoading();
        request
            .getCategoryNews(props.category)
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
    }, [props]);

    const errorMessage = error ? <ErrorGif/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !itemsNew) ? <View itemsNew={itemsNew} props={props}/> : null;

    return(
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({itemsNew, props}) => {

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

    const cardRender = (itemsNew, numberOfNew, colSize, cardClasses) => {
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
        <Tab.Pane eventKey={props.category}>
            <Row>
                <Col lg={7} className="categoryCardsWrapper">
                    <Row>
                        {itemsNew.length >= 1?cardRender(itemsNew, 0, 12, 'newsCard topCategoryCard') : null}
                    </Row>
                    <Row>
                        {itemsNew.length >= 2? cardRender(itemsNew, 1, 6, 'newsCardSmall') : null}
                        {itemsNew.length >= 3? cardRender(itemsNew, 2, 6, 'newsCardSmall') : null}
                    </Row>
                </Col>
                <Col lg={5}>
                    <ListGroup>
                        {textNews}
                        <ListGroup.Item className="wrapper">
                            <div className='textCard'>
                                <Card.Body>
                                    <Card.Text className='moreText d-flex'>
                                        {itemsNew.length >= 10? (
                                        <a href="/">
                                            See all news     
                                            <img src="https://img.icons8.com/ios/30/null/circled-chevron-right.png" alt=''/>
                                        </a> )
                                        : (
                                            <span>That`s all news in category {props.category} for this moment.</span>    
                                        )}
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Tab.Pane>
    )
}

export default CategNewsRender;