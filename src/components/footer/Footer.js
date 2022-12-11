import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import './footer.scss';

const Footer = () => {
    return (
        <Navbar className="footerWrapper" expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="logo" href="/">ALLNews</Navbar.Brand>
                <Navbar.Text className='footerText'>
                    Every day latest topical news for you!
                </Navbar.Text>
            </Container>
        </Navbar>
    )
}

export default Footer;