import React from "react";
import "./homepage.scss";
import meg from "../../assets/meg.jpeg";
import ImageWithBorder from "../../components/ImageWithBorder/ImageWithBorder";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="text">
      <h1>Taheera Ahmed</h1>
      <br/>
      
      <p>24 år | 4. klasse datateknologi | Trondheim</p>
      </div>
      <ImageWithBorder src={meg} alt="Taheera Ahmed" width="20%" />
    </div>
  );
};

export default Homepage;
