import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { HeaderSpan } from "../../components/text/header-span/header-span.component";
import tablet from "./../../assets/images/tablet.jpg";
import laptop from "./../../assets/images/laptop_realistic.png";

export const Draftreport = () => {
  const isTabletOrLarger = useMediaQuery({ minWidth: 425 });
  console.log(isTabletOrLarger);

  return (
    <motion.section
      id="draftreport"
      className="bg-slate-50 flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between px-4 py-16" // min-h-screen
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div
        className="hero-header flex justify-center mb-4 flex-col lg:w-1/2 items-start text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h2 className="mb-8 text-start text-3xl lg:text-5xl">
          BEBAUBUNGSPLAN / BAURECHT {isTabletOrLarger ? <br></br> : " "}{" "}
          <HeaderSpan text={"MUSTERREPORT"} />
        </h2>

        <div className="paragraph-1 mb-6 max-w-xl text-center">
          <p>
            Dieses Beispiel verdeutlicht, wie entscheidend die gründliche
            Prüfung von Baurecht und Bebauungsplan für die erfolgreiche
            Mieterakquise ist.
          </p>
        </div>

        <div className="paragraph-2 mb-6 max-w-xl text-center">
          <p>
            Ohne diese Analyse besteht die Gefahr, wertvolle Zeit in die
            Ansprache vermeintlich passender Filialisten zu investieren – von
            der Recherche über die Kontaktaufnahme bis hin zum Nachfassen – nur
            um letztendlich eine Absage zu erhalten.
          </p>
          <p className="mt-4">
            Durch diese fundierte Prüfung schaffen wir Klarheit und vermeiden
            Fehlentscheidungen, bevor sie entstehen.
          </p>
          <p className="mt-4">
            Fehlende oder unzureichende Standortinformationen, insbesondere zum
            Baurecht, führen oft dazu, dass Expansionsabteilungen gar nicht
            reagieren. Eine präzise Vorbereitung ermöglicht es hingegen, direkt
            relevante Filialisten anzusprechen und den Entscheidungsprozess zu
            beschleunigen.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="hero-img lg:w-1/2 w-full max-w-[700px]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        <img
          src={laptop}
          alt="Tablet Report"
          className="w-full h-auto object-contain max-h-[90vh]"
        />
      </motion.div>
    </motion.section>
  );
};
