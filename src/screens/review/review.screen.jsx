import React from "react";
import { useMediaQuery } from "react-responsive";

import laptop from "./../../assets/images/laptop_realistic.png";

export const Review = () => {
  const isTabletOrLarger = useMediaQuery({ minWidth: 425 });
  const isLaptopOrLarger = useMediaQuery({ minWidth: 1024 });
  return (
    <section
      id="review"
      className="h-auto flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between md:items-start"
    >
      <div className="hero-header flex justify-center mb-4 flex-col lg:w-1/3 sm:items-center">
        <h2 className="text-center mb-8">
          BEBAUBUNGSPLAN PRÜFUNG{" "}
          {isTabletOrLarger ? "STANDORTANALYSE" : "STANDORT-ANALYSE"} &{" "}
          {!isLaptopOrLarger ? <br /> : ""}
          <span>
            <h2 className="text-4xl font-semibold lg:text-6xl bg-[#0E1A54] text-white inline-block p-2">
              BAURECHT
            </h2>
          </span>
        </h2>
        <div className="paragraph-1 mb-6">
          <h3 className="text-start mb-4">
            PRÄZISION DER MIETERAQUISE - ÜBER KEY FACTS HINAUSDENKEN
          </h3>
          <p className="text-center md:text-justify">
            Durch unser spezielles Standortanaylsetool KI und unserer Datenbank
            mit über 7.000 Expansionkriterien deutscher Finalisten, können wir
            mit unserem bewährten System und Eckdaten zu Ihren Gewerbeflächen,
            passende Finalisten und somit potenzielle Mieter selektieren.
          </p>
        </div>
        <div className="paragraph-2 mb-6">
          <h3 className="text-start mb-4">WARUM IST DAS SO WICHTIG ?</h3>
          <p className="text-center md:text-justify">
            Baurecht und Bebauungsplan spielen eine entscheidende Rolle bei der
            Auswahl potenzieller Mieter. Sie legen fest, welche Arten von
            Filialisten oder Gewerben baurechtlich überhaupt zugelassen sind.
            Mit diesem Wissen können wir sicherstellen, dass nur geeignete
            Mieter in Frage kommen – ein wesentlicher Faktor für eine
            erfolgreiche und langfristige Standortplanung und eine erhebliche
            Zeitersparnis bei der Ansprache
          </p>
          <p className="mt-4">
            Durch diese fundierte Prüfung schaffen wir Klarheit und vermeiden
            Fehlentscheidungen, bevor sie entstehen.
          </p>
        </div>
        <div className="paragraph-3 mb-6">
          <h3 className="text-start mb-4">UNSERE EXPERTISE, IHR VORTEIL.</h3>
          <p className="text-center md:text-justify">
            Durch diese fundierte Prüfung schaffen wir Klarheit, vermeiden
            Fehlentscheidungen sowie eine zeitintensive Ansprache nicht
            geeigneter Filialisten , bevor sie entstehen.
          </p>
        </div>
      </div>

      <div className="hero-img lg:w-2/3">
        <img src={laptop} alt="logo" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};
