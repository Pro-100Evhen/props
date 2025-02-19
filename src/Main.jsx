import React from "react";
import CardList from "./components/CardList/CardList";
import Title from "./components/Title/Title";
import { cardsData } from "./data";

const Main = () => {
   const cards = cardsData;

   return (
      <div>
         <Title />
         <CardList cards={cards} />
      </div>
   );
};

export default Main;
