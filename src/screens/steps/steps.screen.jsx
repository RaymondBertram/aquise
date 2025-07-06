import React from "react";
import { motion } from "framer-motion";
import { HeaderSpan } from "../../components/text/header-span/header-span.component";

import laptop from "../../assets/images/laptop_realistic.png";

export const Steps = () => {
  const steps = [
    {
      step: "STEP 1",
      color: "text-green-600",
      bg: "bg-green-100", // New background for consistency
      border: "border-green-400",
      title: "Prüfung",
      desc: "Prüfung des Baurechts, welche Nutzung ist am Standort zulässig oder gar ausgeschlossen?",
      img: laptop,
    },
    {
      step: "STEP 2",
      color: "text-blue-600",
      bg: "bg-blue-100",
      border: "border-blue-400",
      title: "Analyse",
      desc: "Welcher Filialist ist bereits ansässig und welcher nicht? Welcher Filialist ist ein potenzieller Mieter aufgrund weiterer Standortkriterien?",
      img: laptop,
    },
    {
      step: "STEP 3",
      color: "text-pink-500", // Adjusted for better contrast
      bg: "bg-pink-100",
      border: "border-pink-400", // Adjusted for better contrast
      title: "Selektion",
      desc: "Nach Prüfung des Baurechts und der Nutzungsmöglichkeiten sowie Prüfung des Standortes, werden potenzielle Mieter selektiert.",
      img: laptop,
    },
    {
      step: "STEP 4",
      color: "text-yellow-600", // Adjusted for better contrast
      bg: "bg-yellow-100",
      border: "border-yellow-500", // Adjusted for better contrast
      title: "Ansprache",
      desc: "Die Expansionsleiter der potenziell passenden Filialisten erhalten das detaillierte Standortangebot.",
      img: laptop,
    },
  ];

  // Framer Motion variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Each child will animate 0.3s after the previous one
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="steps"
      className="bg-slate-50 flex flex-col items-center justify-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <motion.div
        className="hero-header flex flex-col items-center text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="mb-6 font-extrabold text-3xl text-slate-900 sm:text-4xl lg:text-5xl">
          VOM STANDORTCHECK ZUR EFFEKTIVEN
          <div className="mt-2">
            <HeaderSpan text={"MIETERAQUISE"} />
          </div>
        </h2>
        <p className="text-lg text-slate-600">
          SCHRITT FÜR SCHRITT ZUM NEUEN MIETER
        </p>
      </motion.div>

      {/* Steps Container */}
      <div className="relative w-full max-w-7xl mx-auto mt-8">
        <motion.div
          className="relative w-full flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.step}
              variants={stepVariants}
              className="relative z-10 flex flex-row lg:flex-col items-center w-full gap-6 lg:gap-0"
            >
              {/* Icon Circle with Hover Effect */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-28 h-28 rounded-full flex items-center justify-center border-4 ${step.border} bg-white shadow-lg mb-0 lg:mb-6 flex-shrink-0 cursor-pointer`}
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-20 h-20 object-contain"
                />
              </motion.div>

              {/* Text Content */}
              <div className="flex flex-col items-start text-left lg:items-center lg:text-center">
                <h4
                  className={`text-sm font-semibold uppercase tracking-wider mb-2 ${step.color}`}
                >
                  {step.step}
                </h4>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Connecting Lines */}
        {/* Horizontal Line for Desktop */}
        <motion.div
          className="absolute left-0 right-0 top-14 h-1 bg-gradient-to-r from-green-400 via-blue-400 via-pink-400 to-yellow-500 rounded-full z-0 hidden lg:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
        />
        {/* Vertical Line for Mobile/Tablet */}
        <motion.div
          className="absolute left-14 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-blue-400 via-pink-400 to-yellow-500 rounded-full z-0 lg:hidden"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </div>
    </section>
  );
};
