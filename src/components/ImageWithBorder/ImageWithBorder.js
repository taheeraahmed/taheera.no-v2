import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const ImageWithBorder = ({ src, width, alt}) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="image">
      <LazyLoadImage
        src={src}
        style={{
          border: "double 6px transparent",
          marginBottom: 20,
          backgroundRepeat: "no",
          background: themeContext.gradient,
          boxShadow: themeContext.boxShad,
          maxWidth: width,
        }}
        effect="blur"
        alt={alt}
      />
      </div>
  );
};

export default ImageWithBorder;
