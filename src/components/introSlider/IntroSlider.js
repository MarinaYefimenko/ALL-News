import Carousel from 'react-bootstrap/Carousel';
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

    const slides = itemsNew.map((item, i) => {
        if(item.img === null) {
            item.img = './bg.jpg';
        }
        return (
        <Carousel.Item className="slide" key={i}>
            <img
                className="d-block w-100"
                src={item.img}
                alt="news preview"
            />
            <Carousel.Caption>
                <h3><a href={item.link}>{item.title}</a></h3>
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