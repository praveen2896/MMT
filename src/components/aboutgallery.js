import React from 'react'
import Carousel from 'react-image-carousel'
import image1 from '../images/Apj.jpeg'
import image2 from '../images/peace.jpg'
import image3 from '../images/bike.jpeg'
import image4 from '../images/Logo.jpg'
import './aboutgallery.css'
let images = [image1, image2, image3, image4, image3, image3, image3]
class CarouselImage extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className="my-carousel">
        <Carousel images={images} thumb={true} loop={true} autoplay={0} />
      </div>
    )
  }
}

export default CarouselImage
