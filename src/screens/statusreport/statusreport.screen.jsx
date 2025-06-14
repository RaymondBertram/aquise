import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { HeaderSpan } from "../../components/text/header-span/header-span.component";
import smartphone from "./../../assets/images/smartphone.png";
import bubble1 from "./../../assets/images/bubble1.png";
import bubble2 from "./../../assets/images/bubble2.png";
import bubble3 from "./../../assets/images/bubble3.png";

export const Statusreport = () => {
  const isTabletOrLarger = useMediaQuery({ minWidth: 425 });
  console.log(isTabletOrLarger);

  return (
    <motion.section
      id="statusreport"
      className="min-h-screen flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between px-4 mt-8 md:mt-16 lg:mt-24 mb-8 md:mb-12 lg:mb-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div
        className="w-full max-w-[700px] grid grid-cols-[auto_1fr] gap-0 items-center relative"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        {/* Smartphone-Bild */}
        <div className="relative z-10 flex justify-end">
          <img
            src={smartphone}
            alt="Tablet Report"
            className="w-full max-w-[400px] h-auto object-contain max-h-[90vh]"
          />
        </div>

        {/* Chatbubbles */}
        <div className="flex flex-col gap-6 -ml-10 z-20">
          <img src={bubble1} alt="Bubble 1" className="w-50" />
          <img src={bubble2} alt="Bubble 2" className="w-50" />
          <img src={bubble3} alt="Bubble 3" className="w-50" />
        </div>
      </motion.div>

      <motion.div
        className="hero-header flex justify-center mb-4 flex-col lg:w-1/2 items-start text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h2 className="mb-8 text-start text-3xl lg:text-5xl">
          MIETERAQUISE {isTabletOrLarger ? <br></br> : " "}{" "}
          <HeaderSpan text={"STATUSREPORT"} />
        </h2>

        <div className="paragraph-1 mb-6 max-w-xl text-center">
          <h3 className="text-start mb-4">
            Transparente Kommunikation in Echtzeit – Ihr Vorteil in der
            Mieterakquise
          </h3>
          <p className="text-justify">
            Mit unserer digitalen und modernen Betreuung bleiben Sie stets auf
            dem neuesten Stand. Während des gesamten Prozesses der Mieterakquise
            informieren wir Sie fortlaufend über alle Entwicklungen.
          </p>
        </div>

        <div className="paragraph-2 mb-6 max-w-xl text-center">
          <p className="text-justify">
            Sobald wir Rückmeldungen von den kontaktierten Filialisten erhalten,
            stellen wir Ihnen einen kompakten Report zur Verfügung – per E-Mail
            oder auf Wunsch auch über WhatsApp. Dabei übermitteln wir Ihnen
            nicht nur den aktuellen Status, sondern auch konkrete Grund Standort
            ist zu nah an nächster Filiale und es fehlen ca. 200 m2 sowie 15
            Einstellplätze Rückmeldungen und Begründungen, sofern diese vom
            Filialisten mitgeteilt wurden.
          </p>
          <p className="mt-4 text-justify">
            So sorgen wir für maximale Transparenz und Effizienz in der
            Kommunikation, damit Sie jederzeit den Überblick behalten.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};
