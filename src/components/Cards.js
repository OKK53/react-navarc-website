import React from "react";
import { projectcards } from "assets/volsterImages/data";
import { useLanguage } from "context/LanguageContext";

function Cards() {
  const { language } = useLanguage();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 ">
      {projectcards &&
        projectcards.map((card) => (
          <div
            key={card.id}
            className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-center text-lg"
          >
            <img className="rounded mb-2" src={card.image} alt={card.title} />
            <h6>{card.title}</h6>
            <p>{language === "tr" ? card.descriptionTr : card.descriptionEn}</p>
            {(language === "en" && (
              <div className="grid grid-cols-2 gap-x-5 text-lg mt-3">
                <p>Range: {card.range}</p>
                <p>Cruising Speed: {card.cruisingSpeed}</p>
                <p>Passenger: {card.passenger}</p>
                <p>Electricity Consumption: {card.ElectricityConsumption}</p>
              </div>
            )) || (
              <div className="grid grid-cols-2 gap-x-5 text-lg mt-3">
                <p>Menzil: {card.range}</p>
                <p>Seyir Hızı: {card.cruisingSpeed}</p>
                <p>Yolcu: {card.passenger}</p>
                <p>Elektrik Tüketimi: {card.ElectricityConsumption}</p>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default Cards;
