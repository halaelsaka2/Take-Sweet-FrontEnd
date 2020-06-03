import React from 'react';
import { Zoom } from 'react-slideshow-image';
 
const images = [
  'assets/images/1.jpeg',
  'assets/images/2.jpeg',
  'assets/images/3.jpeg',
  'assets/images/4.jpeg',
];
 
const zoomOutProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: false
}
 
const Slideshow = (props) => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties} style={{width:`${props.width}`}} >
          {
            images.map((each, index) => <img key={index} alt="img"style={{width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
    )
}
export default Slideshow 