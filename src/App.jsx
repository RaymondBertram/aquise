import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home.page";
import { AGB } from "./pages/agb.page";
import { Impress } from "./pages/impress.page";
import { DataProtectionPage } from "./pages/dataprotection.page";
import { Footer } from "./screens";

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
    <Router>
      <div className="xl:container-8xl xl:mx-auto">
        <main style={{ paddingTop: `${navHeight}px` }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/agb" element={<AGB />} />
            <Route path="/impressum" element={<Impress />} />
            <Route path="/datenschutz" element={<DataProtectionPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
