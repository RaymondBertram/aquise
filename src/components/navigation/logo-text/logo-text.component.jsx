import React from "react";

import custom_logo from "./../../assets/logos/custom_logo.png";
import { HeaderSpan } from "../../text/header-span/header-span.component";

export const LogoText = () => {
  return (
    <div>
      <img
        src={custom_logo}
        alt="Logo"
        className="w-[120px] h-auto mx-auto mb-4"
      />
      <h2 className="text-center font-bold">
        HELLO <HeaderSpan text={"EXPANSION"} />
      </h2>
    </div>
  );
};
