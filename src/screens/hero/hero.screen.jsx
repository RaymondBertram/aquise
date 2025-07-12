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
      <span className="tracking-wide text-gray-800"> "BY" HELLO</span>
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
        className="text-gray-700 max-w-xl text-lg"
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
//  MAIN SCREEN COMPONENT (IMPROVED)
// ============================================================================

export const Hero = () => {
  return (
    // IMPROVEMENT:
    // 1. Set a strict height of one viewport (h-screen).
    // 2. Use `relative` to be the positioning context for its children.
    // 3. Add `rounded-3xl` for the curved edges.
    // 4. Use `overflow-hidden` to clip the inner background to the rounded corners.
    <section
      id="hero"
      className="relative min-h-screen w-full bg-slate-50 rounded-t-3xl overflow-hidden py-16"
    >
      {/* 
        IMPROVEMENT: Background Map Image
        - Positioned absolutely to fill the parent `section`.
        - `z-0` places it behind the content.
        - `bg-cover` and `bg-center` ensure the image fills the container responsively.
        - The `style` attribute is the standard way in React to apply a background
          image from an imported variable.
      */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${map})` }}
      />

      {/* 
        IMPROVEMENT: Content Container
        - `relative z-10` ensures this container is layered above the background.
        - `h-full` makes it take up the full height of the parent section.
        - `flex` with `items-center` and `justify-center` centers the content vertically and horizontally.
        - Flex direction changes based on screen size (`flex-col lg:flex-row`) for responsiveness.
      */}
      <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8">
        <HeroImage />
        <HeroText />
      </div>
    </section>
  );
};
