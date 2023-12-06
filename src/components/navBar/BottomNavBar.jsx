import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import SideBar from '../sidebar/SideBar';
// import useState from 'react'
import Navbar from 'react-bootstrap/Navbar';
import "./BottomNav.css"

   const BottomNavBar = () => {
//   const[selectedCategory, setSelectedCategory] = useState(null);

//   //search filter
//   const[query, setQuery] =("");

//   //handle search bar
//   const handleInputChange=event=>{
//     setQuery(event.target.value)
//   }
//    const filteredItems = men.filter()

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