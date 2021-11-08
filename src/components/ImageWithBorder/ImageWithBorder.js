import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const ImageWithBorder = ({ src, width, alt}) => {
  return (
    <div className="image">
      <LazyLoadImage
        src={src}
        style={{
          border: "double 6px transparent",
          marginBottom: 20,
          backgroundRepeat: "no",
          background: "linear-gradient(#FE6B8B 30%, #FF8E53 90%)",
          boxShadow: "0 1px 7px 3px rgba(255, 105, 135, .3)",
          width: width
        }}
        effect="blur"
        alt={alt}
      />
      </div>
  );
};

export default ImageWithBorder;
