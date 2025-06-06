import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import InfiniteCarousel from "../../components/image-slider/image-slider";

import customer_3 from "./../../assets/logos/customer_3.png";
import logoipsum_1 from "./../../assets/logos/logoipsum_1.svg";
import logoipsum_2 from "./../../assets/logos/logoipsum_2.svg";
import logoipsum_3 from "./../../assets/logos/logoipsum_3.svg";
import logoipsum_4 from "./../../assets/logos/logoipsum_4.svg";
import { HeaderSpan } from "../../components/text/header-span/header-span.component";

export const Home = () => {
  const logos = [logoipsum_1, logoipsum_2, logoipsum_3, logoipsum_4];
  return (
    <motion.section
      id="home"
      className="h-fit flex-col justify-center items-center pt-30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="mb-4">
        <img
          src={customer_3}
          alt="Logo"
          className="w-[120px] h-auto mx-auto mb-4"
        />
        <h1 className="text-center font-bold">
          HELLO <HeaderSpan text={"EXPANSION"} />
        </h1>
      </div>
      <div>
        <p className="text-3xl font-medium text-center">
          DIE DIGITALE MIETERAQUISE
        </p>
        <p className="text-center text-lg text-gray-600 mt-4 max-w-xl mx-auto">
          Wir verbinden datenbasierte Standortanalyse mit innovativer
          Akquise-Software für nachhaltige Expansionserfolge.
        </p>

        <div className="relative flex max-w-full w-full h-35 lg:rounded-[64px] overflow-hidden bg-white border-0">
          <InfiniteCarousel images={logos} />
        </div>
        <div className="mt-8 text-center">
          <a
            href="#hero"
            className="inline-block px-6 py-3 bg-[#0E1A54] text-white rounded-lg shadow-md hover:bg-[#1a287d] transition"
          >
            Mehr erfahren
          </a>
        </div>
        <div className="mt-12 animate-bounce text-center">
          <span className="text-gray-500 text-sm">Scrollen</span>
          <div className="text-2xl">↓</div>
        </div>
      </div>
    </motion.section>
  );
};
