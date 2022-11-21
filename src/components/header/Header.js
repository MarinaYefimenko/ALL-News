import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './header.scss';

const Header = () => {
    return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand className="logo" href="#home">ALLNews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Form.Select id="country" size="sm">
                <option value="gb">Belgium</option>
                <option value="gb">Great Britain</option>
                <option value="fr">France</option>
                <option value="nl">Netherlands</option>
                <option value="ua">Ukraine</option>
            </Form.Select>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="keywords..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header;
