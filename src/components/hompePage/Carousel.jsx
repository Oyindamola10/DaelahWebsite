import Carousel from 'react-bootstrap/Carousel';

import "./Carousel.css"
import Button from 'react-bootstrap/Button';


const CarouselCom = () => {
  return (
     <>
     <div>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.gq.com/photos/5d93b28c3304070008faa5a0/master/pass/watches.jpg"
          alt="First slide"  />
        <Carousel.Caption>
        <Button size='lg' active id='Btn'> <a href="/collection">Shop Now</a></Button>
         
        </Carousel.Caption> 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.gq.com/photos/5d93b28c3304070008faa5a0/master/pass/watches.jpg"
          alt="First slide"  />
        <Carousel.Caption>
        <Button size='lg' active id='Btn'><a href="/collection">Shop Now</a></Button>
         
        </Carousel.Caption> 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.gq.com/photos/5d93b28c3304070008faa5a0/master/pass/watches.jpg"
          alt="First slide"  />
        <Carousel.Caption>
        <Button size='lg' active id='Btn'><a href="/collection">Shop Now</a></Button>
         
        </Carousel.Caption> 
      </Carousel.Item>
    </Carousel>
    </div>
   

    </>
  )
}

export default CarouselCom;