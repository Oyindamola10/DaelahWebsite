import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import SideBar from '../sidebar/SideBar';
// import useState from 'react'
import Navbar from 'react-bootstrap/Navbar';
import "./BottomNav.css"

   const BottomNavBar = () => {
    // const [addItem, setAddItem] =useState({
    //   product_id
    //  });
  
    //  const handleAddItem = async(e) => {
    //   e.preventDefault();
  
    //   await fetch("http://localhost:8000/api/cart", {
    //     method: "POST",
    //     headers: {
    //        "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(addItem),
    //   });
    // }

  return (
    <>
    
    <Navbar id="navItem3" >
    <SideBar></SideBar>
    <Container>
    
      <Nav className="me-auto">
        <Nav.Link href="/men">Men</Nav.Link>
        <Nav.Link href="/women">Women</Nav.Link>
        <Nav.Link href="/accessories">Accessories</Nav.Link>
        <Nav.Link href="/collections">Collections</Nav.Link>
        <Nav.Link href="/new arrivals">New Arrivals</Nav.Link>
      </Nav>
      <Form className="d-flex">
            <Form.Control type="text" placeholder="Search" className="me-2" aria-label="Search"/>
      </Form>
    </Container>
  </Navbar>
  </>

  )
}

export default BottomNavBar;