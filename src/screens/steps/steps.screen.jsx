import React from "react";
import { motion } from "framer-motion";
import laptop from "../../assets/images/laptop_realistic.png"; // Using the provided import for all images
import { img } from "framer-motion/client";

/**
 * Renders the decorative wavy connecting line for desktop
 * and a straight vertical line for mobile.
 */
const WavyLine = () => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 4, ease: "easeInOut" },
    },
  };

  // A significantly rounder and smoother path for more visual space.
  const desktopPath =
    "M 0 250 C 80 50, 160 50, 240 250 S 320 450, 480 250 S 560 50, 720 250 S 800 450, 960 250 S 1040 50, 1200 250 S 1280 450, 1440 250";

  return (
    <>
      {/* Desktop Wavy Line SVG */}
      <motion.svg
        className="absolute top-0 left-0 w-full h-full hidden lg:block"
        preserveAspectRatio="none"
        viewBox="0 0 1440 500"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
      >
        <defs>
          <linearGradient
            id="lineGradientModern"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#43b4a2" />
            <stop offset="25%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="75%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <motion.path
          d={desktopPath}
          fill="none"
          stroke="url(#lineGradientModern)"
          strokeWidth="6"
          strokeLinecap="round"
          variants={pathVariants}
        />
      </motion.svg>

      {/* Mobile Vertical Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-full lg:hidden z-0">
        <motion.div
          className="h-full w-full bg-gradient-to-b from-[#43b4a2] via-[#e879f9] via-[#f59e0b] to-[#8b5cf6] rounded-full"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </div>
    </>
  );
};

export const Steps = () => {
  // Data updated to match the PDF content and design
  const steps = [
    {
      step: "STEP 1",
      borderColor: "border-teal-400", // Green from PDF
      title: "Bebauungsplan- und Baurecht Prüfung",
      desc: "Prüfung des Baurechts, welche Nutzung am Standort zulässig oder gar ausgeschlossen ist?",
      img: laptop,
    },
    {
      step: "STEP 2",
      borderColor: "border-sky-500", // Blue from PDF
      title: "Standortanalyse",
      desc: "Welcher Filialist ist bereits ansässig und welcher nicht? Welcher Filialist ist ein potenzieller Mieter aufgrund weiterer Standortkriterien?",
      img: laptop,
    },
    {
      step: "STEP 3",
      borderColor: "border-pink-500", // Pink from PDF
      title: "Mieter / Filialist selektieren",
      desc: "Nach Prüfung des Baurechts und der Nutzungsmöglichkeiten sowie Prüfung des Standortes, werden potenzielle Mieter selektiert.",
      img: laptop,
    },
    {
      step: "STEP 4",
      borderColor: "border-amber-500", // Orange from PDF
      title: "Ansprache der passenden Filialisten",
      desc: "Die Expansionsleiter der potenziell passenden Filialisten, erhalten das detaillierte Standortangebot.",
      img: laptop,
    },
    {
      step: "STEP 5",
      borderColor: "border-blue-600", // Color from gradient
      title: "Verhandlung",
      desc: "Führung der Mietvertragsverhandlungen mit den interessierten Filialisten bis zur Einigung.",
      img: laptop,
    },
    {
      step: "STEP 6",
      borderColor: "border-violet-500", // Purple from end of gradient
      title: "Vertragsabschluss",
      desc: "Koordination der finalen Vertragsunterzeichnung und erfolgreicher Abschluss des Prozesses.",
      img: laptop,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="steps"
      className="bg-white flex flex-col items-center justify-center gap-12 py-20 lg:py-28 overflow-hidden"
    >
      <motion.div
        className="hero-header flex flex-col items-center text-center max-w-4xl px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-6 font-extrabold text-3xl text-slate-900 sm:text-4xl lg:text-5xl uppercase">
          Vom Standortcheck zur effektiven
          <div className="mt-2">
            <span className="bg-[#1E2A53] text-white px-4 py-1.5 rounded-md inline-block">
              Mieterakquise
            </span>
          </div>
        </h2>
        <p className="text-lg text-slate-600 tracking-wide">
          SCHRITT FÜR SCHRITT ZUM NEUEN MIETER
        </p>
      </motion.div>

      {/* Steps Container */}
      <div className="w-full max-w-7xl mx-auto mt-12 lg:mt-20 px-4 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
        >
          {/* DESKTOP LAYOUT (CSS GRID) */}
          <div className="relative hidden lg:grid grid-cols-6 min-h-[500px]">
            <div className="absolute inset-0">
              <WavyLine />
              {/* Start & End Circles adjusted for new path */}
              <div className="absolute top-[240px] left-[-10px] w-5 h-5 bg-[#0B2545] rounded-full" />
              <div className="absolute top-[240px] right-[-10px] w-5 h-5 bg-violet-500 rounded-full" />
            </div>

            {steps.map((step, index) => {
              const isAbove = index % 2 === 0; // Steps 1, 3, 5 are above
              return (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  // Using self-start/end and padding to push content into curves
                  className={`relative flex flex-col items-center w-full ${
                    isAbove ? "self-start pt-4" : "self-end pb-4"
                  }`}
                >
                  {/* Content container with CORRECTED flex ordering */}
                  <div
                    className={`flex items-center text-center gap-4 ${
                      isAbove ? "flex-col" : "flex-col-reverse"
                    }`}
                  >
                    {/* Image Circle */}
                    <div
                      className={`relative w-40 h-40 flex-shrink-0 rounded-full border-4 ${step.borderColor} bg-white p-1 shadow-lg`}
                    >
                      <div className="w-full h-full rounded-full bg-slate-100 overflow-hidden flex items-center justify-center p-4">
                        <img
                          src={laptop}
                          alt={step.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="max-w-[200px]">
                      <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-slate-800">
                        {step.step}
                      </h4>
                      <h3 className="text-base font-bold text-slate-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed px-4">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* MOBILE LAYOUT */}
          <div className="relative lg:hidden">
            <WavyLine />
            <div className="relative z-10 flex flex-col items-center gap-20 py-12">
              {steps.map((step) => (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  className="w-full max-w-sm flex flex-col items-center text-center gap-6"
                >
                  {/* Image Circle */}
                  <div
                    className={`relative w-44 h-44 flex-shrink-0 rounded-full border-4 ${step.borderColor} bg-white p-1 shadow-lg`}
                  >
                    <div className="w-full h-full rounded-full bg-slate-100 overflow-hidden flex items-center justify-center p-4">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  {/* Text Content */}
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-slate-800">
                      {step.step}
                    </h4>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
