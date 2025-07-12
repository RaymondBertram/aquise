import React from "react";
import { motion } from "framer-motion";

// ASSETS
import smartphone from "./../../assets/images/smartphone.png";

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
 * A styled chat bubble component with responsive sizing.
 * It's now smaller on mobile and scales up for larger screens.
 * This would ideally be in `components/chat-bubble/chat-bubble.component.jsx`
 */
const ChatBubble = ({ sender = "app", position, children, variants }) => {
  const baseClasses =
    // Responsive width: smaller on mobile, larger on desktop
    "w-48 sm:w-60 lg:w-64 p-4 rounded-2xl shadow-xl backdrop-blur-md text-sm";
  const senderClasses =
    sender === "user"
      ? "bg-green-200/80 text-green-950"
      : "bg-gray-200/80 text-gray-900";

  return (
    <motion.div
      className={`absolute z-20 ${position}`} // z-20 places it in front of the phone (z-10)
      variants={variants}
    >
      <div className={`${baseClasses} ${senderClasses}`}>{children}</div>
    </motion.div>
  );
};

/**
 * The visual column containing the smartphone and chat bubbles.
 * The bubble positions are now responsive to match their adjusted size.
 * This would ideally be in `components/status-visual/status-visual.component.jsx`
 */
const StatusVisual = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.2,
      },
    },
  };

  const bubbleVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      className="lg:w-1/2 w-full flex justify-center items-center py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      <div className="relative w-full max-w-[22rem] sm:max-w-md">
        <motion.img
          src={smartphone}
          alt="Smartphone displaying a status report"
          className="relative z-10 w-full h-auto" // z-10 sets the base layer
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        {/* Bubbles have responsive positions to match their new sizes */}
        <ChatBubble
          sender="app"
          // Closer on mobile, further on desktop
          position="top-12 -left-4 sm:-left-8 lg:-left-12"
          variants={bubbleVariants}
        >
          Moin Herr Meyer, wir haben ein neues Feedback eines Filialisten
          erhalten!
        </ChatBubble>
        <ChatBubble
          sender="user"
          position="top-1/3 -right-4 sm:-right-8 lg:-right-12"
          variants={bubbleVariants}
        >
          Guten Tag Herr Keller, vielen Dank, schade, aber bald haben wir den
          passenden! 👍
        </ChatBubble>
        <ChatBubble
          sender="app"
          position="bottom-20 -left-2 sm:-left-6 lg:-left-10"
          variants={bubbleVariants}
        >
          Selbstverständlich! Unser Team arbeitet unermüdlich daran! 💪
        </ChatBubble>
      </div>
    </motion.div>
  );
};

/**
 * The text column containing headings and descriptive paragraphs.
 * This would ideally be in `components/status-text/status-text.component.jsx`
 */
const StatusText = () => {
  const textItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="lg:w-1/2 w-full flex flex-col justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2
        className="mb-8 text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight"
        variants={textItemVariants}
      >
        MIETERAQUISE <br className="hidden lg:block" />
        <HeaderSpan text={"STATUSREPORT"} />
      </motion.h2>

      <motion.div className="max-w-xl space-y-6" variants={textItemVariants}>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Transparente Kommunikation in Echtzeit
          </h3>
          <p className="text-gray-700 text-base">
            Mit unserer digitalen Betreuung bleiben Sie stets auf dem neuesten
            Stand. Wir informieren Sie fortlaufend über alle Entwicklungen im
            Prozess der Mieterakquise.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Direktes Feedback, klare Entscheidungen
          </h3>
          <p className="text-gray-700 text-base">
            Sobald wir Rückmeldungen von kontaktierten Filialisten erhalten,
            stellen wir Ihnen einen kompakten Report zur Verfügung – per E-Mail
            oder WhatsApp. Sie erhalten nicht nur den Status, sondern auch
            konkrete Begründungen, um maximale Transparenz und Effizienz zu
            gewährleisten.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ============================================================================
//  MAIN SCREEN COMPONENT
// ============================================================================

export const Statusreport = () => {
  return (
    <section
      id="statusreport"
      className="w-full flex items-center justify-center bg-slate-50" // min-h-screen
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8">
        <StatusText />
        <StatusVisual />
      </div>
    </section>
  );
};
