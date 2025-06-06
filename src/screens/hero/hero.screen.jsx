import React from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

import laptop from "./../../assets/images/laptop_realistic.png";
import { HeaderSpan } from "../../components/text/header-span/header-span.component";

export const Hero = () => {
  const isTabletOrLarger = useMediaQuery({ minWidth: 425 });
  const isLaptopOrLarger = useMediaQuery({ minWidth: 1024 });

  return (
    <motion.section
      id="hero"
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
          SCHNELLE, EFFIZIENTE{" "}
          {isTabletOrLarger ? "STANDORTANALYSE" : "STANDORT-ANALYSE"} &{" "}
          {!isLaptopOrLarger ? <br /> : ""}
          <span className="block">
            <HeaderSpan text={"MIETERAQUISE"} />
          </span>
        </h2>
        <p className="text-gray-600 max-w-xl">
          Durch unser spezielles Standortanaylsetool KI und unsere Datenbank mit
          über 7.000 Expansionkriterien deutscher Finalisten, können wir mit
          unserem bewährten System und Eckdaten zu Ihren Gewerbeflächen passende
          Finalisten und somit potenzielle Mieter selektieren.
        </p>
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
          alt="Laptop Hero"
          className="w-full h-auto object-contain max-h-[90vh]"
        />
      </motion.div>
    </motion.section>
  );
};
