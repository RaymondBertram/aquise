import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { HeaderSpan } from "../../components/text/header-span/header-span.component";
import { AndSpan } from "../../components/text/and-span/and-span.component";

import laptop from "../../assets/images/laptop_realistic.png";

export const Analysis = () => {
  return (
    <motion.section
      id="analysis"
      className="min-h-screen flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div
        className="flex justify-center mb-4 flex-col lg:w-1/2 items-start"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h2 className="mb-8 font-semibold text-3xl lg:text-5xl">
          POTENTIALANALYSE
          <div className="flex items-center gap-4 mt-1">
            <AndSpan />
            <HeaderSpan text={"STANDORTCHECK"} />
          </div>
        </h2>

        <div className="paragraph-1 mb-6 max-w-xl text-center">
          <h3 className="text-start mb-4">
            GEZIELTE STANDORTANALYSE - DIE BASIS EINER ERFOLGREICHEN
            MIETERAQUISE
          </h3>
          <p className="text-justify">
            Eine fundierte Standortanalyse ist essenziell, um vakante
            Gewerbeflächen optimal zu vermarkten. Zunächst analysieren wir die
            aktuelle Filialisten- Landschaft vor Ort, um herauszufinden, welche
            Marken bereits vertreten sind und welche fehlen. So erstellen wir
            eine erste Auswahl potenzieller Mieter.
          </p>
        </div>

        <div className="paragraph-2 mb-6 max-w-xl text-center">
          <h3 className="text-start mb-4">
            POTENZIALE ERKENNEN - VERMIETUNGSQUOTE STEIGERN
          </h3>
          <p className="text-justify">
            Zudem bewerten wir die Umzugsbereitschaft bestehender Filialisten,
            etwa bei unzureichender Flächengröße, ungünstiger Lage oder
            fehlender Parkplätze. Diese Aspekte fließen in die Selektion ein, um
            alle relevanten Optionen zu berücksichtigen.
          </p>
          <p className="mt-4 text-justify">
            Mit präzisen Standortdaten und einer individuell abgestimmten
            Ansprache an Expansionsteams erhöhen wir die Wahrscheinlichkeit
            einer schnellen internen Prüfung und einer positiven Rückmeldung.
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
          alt="Laptop Review"
          className="w-full h-auto object-contain max-h-[90vh]"
        />
      </motion.div>
    </motion.section>
  );
};
