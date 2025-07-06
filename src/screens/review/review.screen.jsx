import React from "react";
import { motion } from "framer-motion";

// ASSETS
import plan from "../../assets/images/plan.jpg";

// ============================================================================
//  MODULAR COMPONENTS (Refined for better visuals and readability)
// ============================================================================

/**
 * Renders a block of text with a solid background.
 * Styling is updated for a more modern, polished look.
 */
const HeaderSpan = ({ text, className = "" }) => (
  <span
    className={`bg-[#0E1A54] text-white font-bold px-4 py-2 inline-block leading-tight rounded-md shadow-sm ${className}`}
  >
    {text}
  </span>
);

/**
 * Renders a large, stylized ampersand.
 * Adjusted size for better balance with the header spans.
 */
const AndSpan = () => (
  <span className="text-4xl lg:text-5xl font-black text-[#0E1A54]/90 mx-3">
    &
  </span>
);

/**
 * Renders an informational block with a title and content.
 * Typography and spacing are enhanced for clarity.
 */
const InfoBlock = ({ title, children, variants }) => (
  <motion.div className="mb-8 max-w-xl" variants={variants}>
    <h3 className="text-lg font-bold text-slate-800 mb-3 tracking-wide">
      {title}
    </h3>
    <div className="text-slate-600 text-base leading-relaxed text-left">
      {children}
    </div>
  </motion.div>
);

/**
 * Displays the main review image with enhanced styling and animation.
 */
const ReviewImage = () => (
  <motion.div
    className="lg:w-5/12 w-full flex justify-center items-center p-4"
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <img
      src={plan}
      alt="Bebauungsplan und Baurecht Dokument"
      className="w-full h-auto object-contain rounded-lg shadow-xl border border-slate-200 max-h-[80vh] max-w-2xl"
    />
  </motion.div>
);

/**
 * Contains all textual content with improved typography and staggered animations.
 */
const ReviewText = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="lg:w-7/12 w-full flex flex-col items-start"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2
        className="mb-12 flex flex-col items-start text-4xl sm:text-5xl font-black text-slate-900 tracking-tight"
        variants={itemVariants}
      >
        <span className="leading-tight">BEBAUUNGSPLAN</span>
        <div className="flex items-center flex-wrap mt-3">
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
//  MAIN SCREEN COMPONENT (Polished and refined)
// ============================================================================

export const Review = () => {
  return (
    <section
      id="review"
      className="min-h-screen w-full bg-slate-50 flex items-center justify-center py-20 lg:py-28 overflow-hidden"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 px-4 sm:px-6 lg:px-8">
        {/*
          Layout: Image on left, Text on right (desktop).
          On mobile, Image is first, followed by Text.
          The order is swapped in the JSX for a right-to-left animation on desktop.
        */}
        <ReviewImage />
        <ReviewText />
      </div>
    </section>
  );
};
