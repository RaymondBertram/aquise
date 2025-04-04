import React from "react";

import custom_logo from "./../../assets/logos/custom_logo.png";

export const LogoText = () => {
  return (
    <div>
      <img
        src={custom_logo}
        alt="Logo"
        className="w-[120px] h-auto mx-auto mb-4"
      />
      <h2 className="text-center font-bold">
        HELLO{" "}
        <span className="text-4xl font-semibold lg:text-6xl bg-[#0E1A54] text-white inline-block p-2">
          EXPANSION
        </span>
      </h2>
    </div>
  );
};
