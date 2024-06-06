import { Route, Routes } from "react-router-dom";
import "./App.css";
import BackToTop from "./components/homepage/BackToTop";
import Preload from "./components/homepage/Preload";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
      <BackToTop />
      <Preload />
    </div>
  );
}

export default App;
