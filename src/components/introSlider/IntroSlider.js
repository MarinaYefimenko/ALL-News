import Carousel from 'react-bootstrap/Carousel';

import Spinner from '../spinner/Spinner';
import ErrorGif from '../errorGif/ErrorGif';
import Request from '../../services/Request';
import { useState, useEffect } from 'react';

import './introSlider.scss';

const InroSlider  = () => {
    
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

    const slides = itemsNew.slice(0, 5).map((item, i) => {
        if(item.img === null) {
            item.img = './bg.jpg';
        }
        return (
        <Carousel.Item className="slide" key={i}>
            <img
                className="d-block w-100"
                src={item.img}
                alt={item.title}
            />
            <Carousel.Caption>
                <span><a href={item.link} className="newsLink">{item.title}</a></span>
            </Carousel.Caption>
        </Carousel.Item>
        )
    })

    return (
        <Carousel fade>
            {slides}
        </Carousel>
    );
}

export default InroSlider;