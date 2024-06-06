import { Route, Routes } from "react-router-dom";
import "./App.css";
import BackToTop from "./components/homepage/BackToTop";
import Preload from "./components/homepage/Preload";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 2000 });
  }, []);

  const [data, setdata] = useState(true);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 3000);
  }, []);
  return (
    <>
      {data ? (
        <>
          <Preload />
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/landing" element={<LandingPage />} />
          </Routes>
          <BackToTop />
        </>
      )}
    </>
  );
}

export default App;
