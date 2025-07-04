import { useState, useEffect } from "react";
import { Navigation } from "./components";
import {
  Home,
  Hero,
  Steps,
  Review,
  Analysis,
  Draftreport,
  Statusreport,
  Footer,
} from "./screens";

import "./App.css";

function App() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    // A slight delay to ensure the nav is fully rendered, especially with custom fonts
    const timer = setTimeout(() => {
      const nav = document.getElementById("navigation");
      if (nav) {
        setNavHeight(nav.offsetHeight);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="xl:container-8xl xl:mx-auto">
      <Navigation />
      <main style={{ paddingTop: `${navHeight}px` }}>
        <Home />
        <Hero />
        <Steps />
        <Review />
        <Analysis />
        <Draftreport />
        <Statusreport />
      </main>
      <Footer />
    </div>
  );
}

export default App;
