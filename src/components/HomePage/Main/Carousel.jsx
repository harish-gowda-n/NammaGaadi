import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "./carouselimages/i1.jpg";
import img2 from "./carouselimages/i2.jpg";
import img3 from "./carouselimages/i3.jpg";
import img4 from "./carouselimages/i4.jpg";

<<<<<<< HEAD
export default function CarouselEl(props) {
  return (
    <Carousel id={props.id}
=======
export default function CarouselEl() {
  return (
    <Carousel
>>>>>>> 0043c2635bbaf8b2a7826539cc9492064447d222
      interval="4000"
      controls={false}
      pause={false}
      slide={true}
      nextIcon={null}
      prevIcon={null}
      indicators={false}
    >
      <Carousel.Item>
<<<<<<< HEAD
        <img className="d-block w-100" src={img1} alt="First slide"  height="600rem" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" height="600rem"  />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide"  height="600rem" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="Fourth slide" height="600rem"  />
=======
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="Fourth slide" />
>>>>>>> 0043c2635bbaf8b2a7826539cc9492064447d222
      </Carousel.Item>
    </Carousel>
  );
}
