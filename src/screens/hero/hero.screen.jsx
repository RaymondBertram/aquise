import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import laptop from "./../../assets/images/laptop_realistic.png";
import map from "../../assets/images/map-background.jpg";

// ============================================================================
//  MODULAR COMPONENTS
//  For clarity and reusability, the hero section is broken down into
//  smaller, self-contained components.
// ============================================================================

/**
 * Renders the "HELLO EXPANSION" logo text.
 * This would ideally be in `components/logo/hello-expansion-logo.component.jsx`
 */
const HelloExpansionLogo = () => {
  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="flex items-center text-2xl lg:text-3xl font-bold mb-8"
      variants={logoVariants}
    >
      <span className="tracking-wide text-gray-800">HELLO</span>
      <span className="bg-blue-900 text-white px-3 py-1 ml-1 tracking-wide">
        EXPANSION
      </span>
    </motion.div>
  );
};

/**
 * Renders a block of text with a solid background highlight.
 * This would ideally be in `components/text/header-span/header-span.component.jsx`
 */
const HeaderSpan = ({ text }) => {
  return (
    <span className="bg-blue-900 text-white px-4 py-2 inline-block">
      {text}
    </span>
  );
};

/**
 * Displays the main hero image (the laptop).
 * This would ideally be in `components/hero-image/hero-image.component.jsx`
 */
const HeroImage = () => {
  return (
    <motion.div
      className="lg:w-1/2 w-full flex justify-center items-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
    >
      <img
        src={laptop}
        alt="Laptop displaying location analysis software interface"
        className="w-full h-auto object-contain max-w-3xl"
      />
    </motion.div>
  );
};

/**
 * Contains all the textual content for the hero section.
 * This would ideally be in `components/hero-text/hero-text.component.jsx`
 */
const HeroText = () => {
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left py-12 lg:py-0"
      variants={textContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <HelloExpansionLogo />

      <motion.h2
        className="mb-8 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900"
        variants={textItemVariants}
      >
        SCHNELLE, EFFIZIENTE <br className="hidden md:block" /> STANDORTANALYSE
        &{" "}
        <span className="mt-3 block">
          <HeaderSpan text={"MIETERAKQUISE"} />
        </span>
      </motion.h2>

      <motion.p
        className="text-gray-700 max-w-xl text-lg text-justify"
        variants={textItemVariants}
      >
        Durch unser spezielles Standortanalysetool, KI und unserer Datenbank mit
        über 7.000 Expansionskriterien deutscher Filialisten, können wir mit
        unserem bewährten System und Eckdaten zu Ihren Gewerbeflächen, passende
        Filialisten und somit potenzielle Mieter selektieren.
      </motion.p>
    </motion.div>
  );
};

// ============================================================================
//  MAIN SCREEN COMPONENT
// ============================================================================

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-gray-50/50 overflow-hidden"
    >
      {/* Faint Map Background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${map})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8">
        {/* 
          On large screens (lg): Image on the left, Text on the right.
          On small screens: Image on top, Text on the bottom (default flex-col behavior).
        */}
        <HeroImage />
        <HeroText />
      </div>
    </section>
  );
};
