import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./TopNav.css";
// import ShoppingCart from '../shoppingCart/ShoppingCart';


const TopNavBar = ({size, setShow}) => {
  
  
  return (
   <div>
      <Navbar expand="lg"  id='navItem'>
        <Container className='navItem2' id='navitem'>
        
            <Nav >
              <Nav.Link href="/" id='myLink'>Home</Nav.Link>
              <Nav.Link href="/about" id='myLink'>About Us</Nav.Link>
              {/* <Nav.Link href="/SignUp" id='myLink'>My Account</Nav.Link> */}
              <Nav.Link href="/contact" id='myLink'>Contact Us</Nav.Link>
              <Nav.Link href="/blog" id='myLink'>Blog</Nav.Link>
              </Nav>
            <Navbar.Brand href="#home" id='brandName'><b>DAELAHCOLLECTIBLES</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
        </Container>
       <div className='brandCart' onClick={() =>setShow(true)}>
        <a href='/signUp'> <i className="fa fa-user" id='user'></i> </a>
        <span>
       <a href='/shopping'><i className="fa fa-shopping-cart" id='brandCart2' onClick={()=>setShow(false)} ></i></a>
       </span>
       <span id='size'>{size}</span>
       </div> 
       
      </Navbar>
       
    </div>
    
  )
}

export default TopNavBar;