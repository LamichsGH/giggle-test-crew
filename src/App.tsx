import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Load external stylesheets
    const stylesheets = [
      "/font-awesome.min.css",
      "/themify-icons.css", 
      "/bootstrap.min.css",
      "/theme.css",
      "/lightbox.min.css",
      "/custom.css"
    ];

    stylesheets.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    });

    // Load external scripts
    const scripts = [
      "/jquery-3.3.1.min.js",
      "/bootstrap.min.js",
      "/flexslider.min.js",
      "/lightbox.min.js",
      "/masonry.min.js",
      "/twitterfetcher.min.js",
      "/spectragram.min.js",
      "/ytplayer.min.js",
      "/countdown.min.js",
      "/smooth-scroll.min.js",
      "/parallax.js",
      "/scripts.js"
    ];

    const loadScriptsSequentially = async () => {
      for (const src of scripts) {
        await new Promise<void>((resolve) => {
          const script = document.createElement('script');
          script.src = src;
          script.onload = () => resolve();
          script.onerror = () => resolve(); // Continue even if script fails
          document.body.appendChild(script);
        });
      }
    };

    loadScriptsSequentially();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
