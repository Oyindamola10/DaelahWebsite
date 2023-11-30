import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import "./BottomNav.css"

const BottomNavBar = () => {
  return (
    <Navbar id="navItem3" >
    <Container>
    
      <Nav className="me-auto">
        <Nav.Link href="/men">Men</Nav.Link>
        <Nav.Link href="/women">Women</Nav.Link>
        <Nav.Link href="/accessories">Accessories</Nav.Link>
        <Nav.Link href="/collections">Collections</Nav.Link>
        <Nav.Link href="/designs">Designs</Nav.Link>
        <Nav.Link href="/new arrivals">New Arrivals</Nav.Link>
      </Nav>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            
          </Form>
    </Container>
  </Navbar>


  )
}

export default BottomNavBar