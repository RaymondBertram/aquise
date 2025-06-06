import React from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

import laptop from "./../../assets/images/laptop_realistic.png";
import { HeaderSpan } from "../../components/text/header-span/header-span.component";

export const Review = () => {
  const isTabletOrLarger = useMediaQuery({ minWidth: 425 });
  const isLaptopOrLarger = useMediaQuery({ minWidth: 1024 });

  return (
    <motion.section
      id="review"
      className="min-h-screen flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div
        className="hero-header flex justify-center mb-4 flex-col lg:w-1/2 items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h2 className="mb-8">
          BEBAUBUNGSPLAN PRÜFUNG{" "}
          {isTabletOrLarger ? "STANDORTANALYSE" : "STANDORT-ANALYSE"} &{" "}
          {!isLaptopOrLarger ? <br /> : ""}
          <span className="block">
            <HeaderSpan text={"BAURECHT"} />
          </span>
        </h2>

        <div className="paragraph-1 mb-6 max-w-xl text-center">
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

        <div className="paragraph-2 mb-6 max-w-xl text-center">
          <h3 className="text-start mb-4">WARUM IST DAS SO WICHTIG ?</h3>
          <p className="text-center md:text-justify">
            Baurecht und Bebauungsplan spielen eine entscheidende Rolle bei der
            Auswahl potenzieller Mieter. Sie legen fest, welche Arten von
            Filialisten oder Gewerben baurechtlich überhaupt zugelassen sind.
            Mit diesem Wissen können wir sicherstellen, dass nur geeignete
            Mieter in Frage kommen – ein wesentlicher Faktor für eine
            erfolgreiche und langfristige Standortplanung und eine erhebliche
            Zeitersparnis bei der Ansprache.
          </p>
          <p className="mt-4">
            Durch diese fundierte Prüfung schaffen wir Klarheit und vermeiden
            Fehlentscheidungen, bevor sie entstehen.
          </p>
        </div>

        <div className="paragraph-3 mb-6 max-w-xl text-center">
          <h3 className="text-start mb-4">UNSERE EXPERTISE, IHR VORTEIL.</h3>
          <p className="text-center md:text-justify">
            Durch diese fundierte Prüfung schaffen wir Klarheit, vermeiden
            Fehlentscheidungen sowie eine zeitintensive Ansprache nicht
            geeigneter Filialisten, bevor sie entstehen.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="hero-img lg:w-1/2 w-full max-w-[700px]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        <img
          src={laptop}
          alt="Laptop Review"
          className="w-full h-auto object-contain max-h-[90vh]"
        />
      </motion.div>
    </motion.section>
  );
};
