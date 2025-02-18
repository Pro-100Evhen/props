import React from "react";
import "./Card.css";

const Card = ({ title, image, description }) => {
   return (
      <div>
         <h2>{title}</h2>
         <img src={image} alt={title} />
         <p>{description}</p>
      </div>
   );
};

export default Card;
