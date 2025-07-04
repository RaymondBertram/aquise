import React from "react";
import { motion } from "framer-motion";

// ASSETS
// The image of the construction/zoning plan.
import plan from "../../assets/images/plan.jpg";

// ============================================================================
//  MODULAR COMPONENTS
// ============================================================================

/**
 * Renders a block of text with the new solid background color.
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
 * Renders a large, stylized ampersand for the horizontal header layout.
 * This would ideally be in `components/text/and-span/and-span.component.jsx`
 */
const AndSpan = () => (
  <span className="text-5xl lg:text-6xl font-black text-[#0E1A54]/90 mx-2">
    &
  </span>
);

/**
 * Renders an informational block with a title and condensed content.
 * This would ideally be in `components/info-block/info-block.component.jsx`
 */
const InfoBlock = ({ title, children, variants }) => (
  <motion.div className="mb-6 max-w-lg" variants={variants}>
    <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-wide">
      {title}
    </h3>
    <div className="text-gray-700 text-base text-justify">{children}</div>
  </motion.div>
);

/**
 * Displays the main review image (the construction plan).
 * This component now takes up half the screen width on large displays.
 * This would ideally be in `components/review-image/review-image.component.jsx`
 */
const ReviewImage = () => (
  <motion.div
    className="lg:w-1/2 w-full flex justify-center items-center p-4"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1, ease: "circOut" }}
  >
    <img
      src={plan}
      alt="Bebauungsplan und Baurecht Dokument"
      className="w-full h-auto object-contain rounded-lg shadow-2xl max-h-[85vh] max-w-2xl"
    />
  </motion.div>
);

/**
 * Contains all the textual content for the review section.
 * The h2 element is updated to display the header spans side-by-side.
 * This would ideally be in `components/review-text/review-text.component.jsx`
 */
const ReviewText = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="lg:w-1/2 w-full flex flex-col items-start"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="mb-10 flex flex-col items-start text-4xl lg:text-[2.8rem] font-extrabold text-gray-900 tracking-tight"
        variants={itemVariants}
      >
        <span>BEBAUUNGSPLAN</span>
        <div className="flex items-center flex-wrap mt-2">
          <HeaderSpan text={"PRÜFUNG"} />
          <AndSpan />
          <HeaderSpan text={"BAURECHT"} />
        </div>
      </motion.h2>

      <InfoBlock title="PRÄZISION, DIE WEITERGEHT" variants={itemVariants}>
        <p>
          Wir gehen über die üblichen Kennzahlen hinaus. Unsere Analyse umfasst
          das Baurecht und den Bebauungsplan, um eine präzise und fundierte
          Bewertung Ihres Standorts sicherzustellen.
        </p>
      </InfoBlock>

      <InfoBlock title="WARUM DAS ENTSCHEIDEND IST" variants={itemVariants}>
        <p>
          Diese Dokumente legen fest, welche Mieter für einen Standort zulässig
          sind. Unsere Prüfung stellt sicher, dass wir nur passende
          Interessenten ansprechen – das spart Zeit und legt den Grundstein für
          eine langfristig erfolgreiche Partnerschaft.
        </p>
      </InfoBlock>

      <InfoBlock
        title="IHR VORTEIL: KLARHEIT & EFFIZIENZ"
        variants={itemVariants}
      >
        <p>
          Unsere Expertise schafft von Anfang an Klarheit. So vermeiden Sie
          zeitintensive Gespräche mit unpassenden Filialisten und beschleunigen
          den gesamten Vermietungsprozess.
        </p>
      </InfoBlock>
    </motion.div>
  );
};

// ============================================================================
//  MAIN SCREEN COMPONENT
// ============================================================================

export const Review = () => {
  return (
    <section
      id="review"
      className="min-h-screen w-full bg-white flex items-center justify-center py-16 lg:py-24"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8">
        {/*
          Layout matches PDF: Image on the left, Text on the right for large screens.
          On mobile, Image appears first, followed by Text.
        */}
        <ReviewImage />
        <ReviewText />
      </div>
    </section>
  );
};
