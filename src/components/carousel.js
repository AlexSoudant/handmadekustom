import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


export function Carousel(props) {
  return (
        <AliceCarousel autoHeight mouseTracking items={props.items} />
  );
}