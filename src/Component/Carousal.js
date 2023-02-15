import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const Carousal = () => {
  return (
    <div>
       <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0045/4701/8801/articles/5_Great_Men_Trending_Cloths_1024x1024.jpg?v=1645441781"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/ff/b9/ed/ffb9ed98c693ab0cd988b08b2624086c.jpg"
          alt="Second slide"
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.livemint.com/img/2022/03/17/1600x900/oneplusTV1_1647546626604_1647546646715.jpeg"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
      
    </div>
  )
}

export default Carousal
