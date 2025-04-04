import React from "react";

import custom_logo from "./../../assets/logos/custom_logo.png";

export const Home = () => {
  return (
    <section
      id="home"
      className="h-fit flex-col justify-center items-center py-30"
    >
      <div className="mb-4">
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
      <div>
        <p className="text-3xl font-medium text-center">
          DIE DIGITALE MIETERAQUISE
        </p>
      </div>

      <div className="process-left flex justify-center my-8">
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col gap-2 justify-center">
            <div className="size-15">
              <img src={custom_logo} alt={`${custom_logo}_alt`} />
            </div>
            <div className="size-15">
              <img src={custom_logo} alt={`${custom_logo}_alt`} />
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <div className="size-15">
              <img src={custom_logo} alt={`${custom_logo}_alt`} />
            </div>{" "}
            <div className="size-15">
              <img src={custom_logo} alt={`${custom_logo}_alt`} />
            </div>{" "}
            <div className="size-15">
              <img src={custom_logo} alt={`${custom_logo}_alt`} />
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center lg:m-0">
            <div className="size-15">
              <img src={custom_logo} alt={`${custom_logo}_alt`} />
            </div>{" "}
            <div className="size-15">
              <img src={custom_logo} alt={`${custom_logo}_alt`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
