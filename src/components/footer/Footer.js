import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import './footer.scss';

const Footer = () => {
    return (
        <Navbar className="footerWrapper" expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="logo" href="#home">ALLNews</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className='footerText'>
                Every day latest topical news for you!
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        // <Navbar className="footerWrapper" expand="lg" >
        //     <Container>
        //             <span className="footerLine"></span>
        //             <Navbar.Brand className="logo" href="#home">ALLNews</Navbar.Brand>
        //             <div className='footerText'>Every day latest topical news for you!</div>
        //     </Container>

        // </Navbar>
    )
}

export default Footer;