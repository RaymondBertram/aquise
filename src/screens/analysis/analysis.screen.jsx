import React from "react";
import { motion } from "framer-motion";

// ASSETS
import laptop from "../../assets/images/laptop_realistic.png";
import mcdonalds from "../../assets/logos/mc.svg";
import wurth from "../../assets/logos/wurth.svg";
import kfc from "../../assets/logos/kfc.svg";
import rewe from "../../assets/logos/rewe.svg";

// ============================================================================
//  MODULAR COMPONENTS
// ============================================================================

/**
 * Reusable component for a highlighted header text.
 * This would ideally be in `components/text/header-span/header-span.component.jsx`
 */
const HeaderSpan = ({ text, className = "" }) => (
  <span
    className={`bg-[#0E1A54] text-white font-bold px-4 py-2 inline-block leading-tight ${className}`}
  >
    {text}
  </span>
);

/**
 * Reusable component for a stylized ampersand.
 * This would ideally be in `components/text/and-span/and-span.component.jsx`
 */
const AndSpan = () => (
  <span className="text-5xl lg:text-6xl font-black text-[#0E1A54]/90">&</span>
);

/**
 * An animated bubble displaying a brand logo and its local presence count.
 * This would ideally be in `components/logo-bubble/logo-bubble.component.jsx`
 */
const LogoBubble = ({ logo, alt, count, status, position, variants }) => {
  const statusClasses = {
    present: "bg-green-100/80 text-green-900",
    absent: "bg-gray-100/80 text-gray-700",
  };

  return (
    <motion.div
      className={`absolute ${position} flex items-center justify-center w-24 h-24 rounded-full shadow-lg backdrop-blur-sm ${statusClasses[status]}`}
      variants={variants}
      whileHover={{ scale: 1.1, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex flex-col items-center">
        <img src={logo} alt={alt} className="h-8 w-auto" />
        <span className="text-xs font-bold mt-1">{count}</span>
      </div>
    </motion.div>
  );
};

/**
 * The visual column containing the laptop and floating logo bubbles
 * with new asymmetrical positions.
 * This would ideally be in `components/analysis-visual/analysis-visual.component.jsx`
 */
const AnalysisVisual = () => {
  // Updated asymmetrical positions for a more dynamic layout
  const logos = [
    {
      logo: rewe,
      alt: "REWE Logo",
      count: "0x",
      status: "absent",
      position: "top-10 -left-2 sm:top-12 sm:-left-4",
    },
    {
      logo: wurth,
      alt: "Würth Logo",
      count: "2x",
      status: "present",
      position: "top-0 right-10 sm:top-2 sm:right-16",
    },
    {
      logo: mcdonalds,
      alt: "McDonald's Logo",
      count: "2x",
      status: "present",
      position: "bottom-12 left-10 sm:bottom-16 sm:left-12",
    },
    {
      logo: kfc,
      alt: "KFC Logo",
      count: "0x",
      status: "absent",
      position: "bottom-4 -right-2 sm:bottom-2 sm:-right-4",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="lg:w-1/2 w-full flex justify-center items-center py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants}
    >
      <div className="relative max-w-2xl w-full">
        <img
          src={laptop}
          alt="Laptop showing location analysis map"
          className="w-full h-auto"
        />
        {logos.map((item) => (
          <LogoBubble key={item.alt} {...item} variants={bubbleVariants} />
        ))}
      </div>
    </motion.div>
  );
};

/**
 * The text column containing headings and descriptive paragraphs.
 * This would ideally be in `components/analysis-text/analysis-text.component.jsx`
 */
const AnalysisText = () => {
  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="lg:w-1/2 w-full flex flex-col justify-center items-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2
        className="mb-10 text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight"
        variants={textItemVariants}
      >
        POTENZIALANALYSE
        <div className="flex items-center gap-4 mt-2">
          <AndSpan />
          <HeaderSpan text={"STANDORTCHECK"} />
        </div>
      </motion.h2>

      <motion.div className="max-w-xl space-y-8" variants={textItemVariants}>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            GEZIELTE STANDORTANALYSE
          </h3>
          <p className="text-gray-700 text-base text-justify">
            Eine fundierte Standortanalyse ist essenziell, um vakante
            Gewerbeflächen optimal zu vermarkten. Wir analysieren die
            Filialisten-Landschaft vor Ort, um Potenziale zu identifizieren und
            eine erste Auswahl passender Mieter zu erstellen.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            VERMIETUNGSQUOTE STEIGERN
          </h3>
          <p className="text-gray-700 text-base text-justify">
            Zudem bewerten wir die Umzugsbereitschaft bestehender Filialisten,
            etwa bei ungünstiger Lage oder unzureichender Fläche. Diese Aspekte
            fließen in die Selektion ein, um Ihre Vermietungschancen zu
            maximieren.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ============================================================================
//  MAIN SCREEN COMPONENT
// ============================================================================

export const Analysis = () => {
  return (
    <section
      id="analysis"
      className="min-h-screen w-full bg-gray-50 flex items-center justify-center py-16 lg:py-24"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8">
        {/* On mobile, visual is on top. On desktop, text is on the left. */}
        <AnalysisText />
        <AnalysisVisual />
      </div>
    </section>
  );
};
