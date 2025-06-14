import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { HeaderSpan } from "../../components/text/header-span/header-span.component";

import laptop from "../../assets/images/laptop_realistic.png";

export const Steps = () => {
  const steps = [
    {
      step: "STEP 1",
      color: "text-green-600",
      border: "border-green-400",
      title: "Prüfung",
      desc: "Prüfung des Baurechts, welche Nutzung ist am Standort zulässig oder gar ausgeschlossen?",
      img: laptop,
    },
    {
      step: "STEP 2",
      color: "text-blue-600",
      border: "border-blue-400",
      title: "Analyse",
      desc: "Welcher Filialist ist bereits ansässig und welcher nicht? Welcher Filialist ist ein potenzieller Mieter aufgrund weiterer Standortkriterien?",
      img: laptop,
    },
    {
      step: "STEP 3",
      color: "text-pink-400",
      border: "border-pink-300",
      title: "Selektion",
      desc: "Nach Prüfung des Baurechts und der Nutzungsmöglichkeiten sowie Prüfung des Standortes, werden potenzielle Mieter selektiert.",
      img: laptop,
    },
    {
      step: "STEP 4",
      color: "text-yellow-500",
      border: "border-yellow-400",
      title: "Ansprache",
      desc: "Die Expansionsleiter der potenziell passenden Filialisten erhalten das detaillierte Standortangebot.",
      img: laptop,
    },
  ];

  return (
    <motion.section
      id="steps"
      className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 pt-10 pb-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div
        className="hero-header flex justify-center mb-4 flex-col lg:w-1/2  text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h2 className="mb-8 font-semibold text-3xl lg:text-5xl">
          VOM STANDORTCHECK ZUR EFFEKTIVEN
          <div className="mt-1">
            <HeaderSpan text={"MIETERAQUISE"} />
          </div>
        </h2>
        <p className="text-center">SCHRITT FÜR SCHRITT ZUM NEUEN MIETER</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="relative w-full flex flex-col lg:flex-row items-start justify-start gap-12 lg:gap-0">
          {steps.map((step, idx) => (
            <div
              key={step.step}
              className="relative z-10 flex flex-row items-center gap-4 max-w-full lg:flex-col lg:items-center lg:max-w-[260px] mx-2"
            >
              {/* Bild */}
              <div
                className={`w-32 h-32 rounded-full flex items-center justify-center border-4 ${step.border} bg-white shadow-md mb-0 lg:mb-4 flex-shrink-0`}
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-24 h-24 object-contain"
                />
              </div>
              {/* Step & Titel & Beschreibung */}
              <div className="flex flex-col items-start text-left lg:items-center lg:text-center mt-1">
                <h4 className={`font-bold uppercase mb-1 ${step.color}`}>
                  {step.step}
                </h4>
                <h3 className="font-black text-lg text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-700">{step.desc}</p>
              </div>
            </div>
          ))}

          {/* Linie für Desktop */}
          <div className="absolute left-0 right-0 top-20 lg:top-1/2 transform lg:-translate-y-1/2 h-0 lg:h-0.5 w-full flex justify-between z-0 pointer-events-none">
            <div className="hidden lg:block w-full h-2 bg-gradient-to-r from-green-400 via-blue-400 via-pink-300 to-yellow-400 rounded-full"></div>
          </div>
          {/* Vertikale Linie für Mobile/Tablet */}
          <div className="absolute left-16 sm:left-20 md:left-24 top-1/2 -translate-y-1/2 w-1 h-[70%] bg-gradient-to-b from-green-400 via-blue-400 via-pink-300 to-yellow-400 rounded-full lg:hidden z-0"></div>
        </div>
      </motion.div>
    </motion.section>
  );
};
