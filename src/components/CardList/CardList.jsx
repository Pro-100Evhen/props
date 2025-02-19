import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

const CardList = ({ cards }) => {
   return (
      <div className="card-list">
         {cards.map((card) => {
            return (
               <Card
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  image={card.image}
               />
            );
         })}
      </div>
   );
};

export default CardList;
