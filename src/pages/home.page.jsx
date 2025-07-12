import React from "react";
import {
  Home,
  Hero,
  Steps,
  Review,
  Analysis,
  Draftreport,
  Statusreport,
} from "../screens";
import { Navigation } from "../components";

export const HomePage = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Navigation />
        <Home />
        <Hero />
        <Steps />
        <Review />
        <Analysis />
        <Draftreport />
        <Statusreport />
      </div>
    </>
  );
};
