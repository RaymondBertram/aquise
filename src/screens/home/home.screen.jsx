import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import InfiniteCarousel from "../../components/image-slider/image-slider";
import { HeaderSpan } from "../../components/text/header-span/header-span.component";

import customer_3 from "./../../assets/logos/customer_3.png";
import logoipsum_1 from "./../../assets/logos/logoipsum_1.svg";
import logoipsum_2 from "./../../assets/logos/logoipsum_2.svg";
import logoipsum_3 from "./../../assets/logos/logoipsum_3.svg";
import logoipsum_4 from "./../../assets/logos/logoipsum_4.svg";

export const Home = () => {
  const logos = [logoipsum_1, logoipsum_2, logoipsum_3, logoipsum_4];
  return (
    <motion.section
      id="home"
      className="h-fit flex-col justify-center items-center pt-30" // pt-30 is likely a custom utility, kept as is.
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="mb-8">
        <img
          src={customer_3}
          alt="Logo"
          className="w-[120px] h-auto mx-auto mb-6" // Increased margin for better spacing
        />
        {/* === ENHANCED HEADING === */}
        <h1 className="text-center flex flex-col lg:flex-row items-center lg:items-baseline justify-center gap-x-4 -tracking-tight">
          <span className="text-xl mt-2 lg:mt-0 text-slate-800">
            "BY" HELLO
          </span>
          <HeaderSpan
            text={"EXPANSION"}
            className="text-xl mt-2 lg:mt-0" // Proportional font size and responsive margin
          />
        </h1>
      </div>
      <div>
        <h1 className="text-5xl font-medium text-center text-slate-800">
          DIE DIGITALE MIETERAQUISE
        </h1>
        <p className="text-center text-lg text-gray-600 mt-4 max-w-xl mx-auto">
          Wir verbinden datenbasierte Standortanalyse mit innovativer
          Akquise-Software für nachhaltige Expansionserfolge.
        </p>

        <div className="relative flex max-w-full w-full h-35 lg:rounded-[64px] overflow-hidden bg-white border-0 mt-12">
          <InfiniteCarousel images={logos} />
        </div>
        <div className="mt-8 text-center">
          <a
            href="#hero"
            className="inline-block px-8 py-3 bg-[#0E1A54] text-white font-semibold rounded-lg shadow-lg hover:bg-[#1a287d] transition-transform hover:scale-105"
          >
            Mehr erfahren
          </a>
        </div>
        <div className="mt-12 animate-bounce text-center">
          <span className="text-gray-500 text-sm">Scrollen</span>
          <div className="text-2xl text-gray-400">↓</div>
        </div>
      </div>
    </motion.section>
  );
};
