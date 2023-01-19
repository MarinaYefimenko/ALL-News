import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import CategNewsRender from './categNewsRender/CategNewsRender';
import { useState } from 'react';

import './categoryNews.scss';

const CategoryNews = (props) => {
    const [categoryName, setCategoryName] = useState("science");

    function changeCategory(name) {
        setCategoryName(name);
        props.updateCategory(name);
    }

    const _categoryNames = ['science', 'general', 'business', 'health', 'sports', 'entertainment', 'technology'];
    const tabs = _categoryNames.map((name, i) => {
        return (
            <Nav.Item key={i + 'tab'}>
                <Nav.Link
                eventKey={name}
                onClick={() => {changeCategory(name)}}
                >
                    {name.toUpperCase()}
                </Nav.Link>
            </Nav.Item>
        )
    })
    
    return (
        <section className='category'>
            <Container>
                <div  id="left-tabs">
                
                    <Tab.Container defaultActiveKey="science">
                        <Row>
                            <Col lg={2}>
                                <Nav variant="tabs" className="flex-column">
                                    <Nav.Item>
                                        <div className='navTitle'>CATEGORIES:</div>
                                    </Nav.Item>
                                        {tabs}
                                        <div className="height"></div>
                                </Nav>
                            </Col>
                            <Col lg={10}>
                                <Tab.Content>
                                    <CategNewsRender category={categoryName}/>
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