import React from "react";
import "./Card.css";

const Card = ({ title, image, description }) => {
   return (
      <div className="card__item">
         <h2>{title}</h2>
         <img src={image} alt={title} />
         <p>{description}</p>
         <button
            className="card__button"
            onClick={() => {
               alert(title);
            }}
         >
            дізнатись більше
         </button>
      </div>
   );
};

export default Card;
