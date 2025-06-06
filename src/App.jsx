import { useState, useEffect } from "react";
import { Navigation } from "./components";
import {
  Home,
  Hero,
  Steps,
  Analysis,
  Review,
  Draftreport,
  Statusreport,
  Footer,
} from "./screens";

import "./App.css";

function App() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const nav = document.getElementById("navigation");
    if (nav) {
      setNavHeight(nav.offsetHeight);
    }
  }, []);

  return (
    <div className="xl:container-8xl xl:mx-auto">
      <Navigation />
      <div className="relative" style={{ marginTop: `${navHeight}px` }}>
        <Home />
        <Hero />
        <Steps />
        <Review />
        {/* <Analysis />  */}
        <Draftreport />
        <Statusreport />
        <Footer />
      </div>
    </div>
  );
}

export default App;
