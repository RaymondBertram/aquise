import React from "react";
import { useMediaQuery } from "react-responsive";

import laptop from "./../../assets/images/laptop_realistic.png";

export const Hero = () => {
  const isTabletOrLarger = useMediaQuery({ minWidth: 425 });
  const isLaptopOrLarger = useMediaQuery({ minWidth: 1024 });

  return (
    <section
      id="hero"
      className="h-screen flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between md:items-start"
    >
      <div className="hero-header flex justify-center mb-4 flex-col lg:w-1/4 sm:items-center">
        <h2 className="text-center mb-8">
          SCHNELLE, EFFIZIENTE{" "}
          {isTabletOrLarger ? "STANDORTANALYSE" : "STANDORT-ANALYSE"} &{" "}
          {!isLaptopOrLarger ? <br /> : ""}
          <span>
            <h2 className="text-4xl font-semibold lg:text-6xl bg-[#0E1A54] text-white inline-block p-2">
              MIETERAQUISE
            </h2>
          </span>
        </h2>
        <div className="paragraph">
          <p className="text-center">
            Durch unser spezielles Standortanaylsetool KI und unserer Datenbank
            mit über 7.000 Expansionkriterien deutscher Finalisten, können wir
            mit unserem bewährten System und Eckdaten zu Ihren Gewerbeflächen,
            passende Finalisten und somit potenzielle Mieter selektieren.
          </p>
        </div>
      </div>

      <div className="hero-img lg:w-3/4">
        <img src={laptop} alt="logo" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};
