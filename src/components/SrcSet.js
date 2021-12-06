import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
 
const SrcSet = ({ image }) => (
    <LazyLoadImage
     effect="blur"
      src={image.src} // use normal <img> attributes as props
      className="img"
   />
);
 
export default SrcSet;