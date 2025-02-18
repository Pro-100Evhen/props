import React from "react";
import "./CardList.css";
import Card from "../Card/Card";
import { cardsData } from "../../data";

const CardList = () => {
   const cards = cardsData;

   return (
      <div>
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
         <Card />
      </div>
   );
};

export default CardList;
