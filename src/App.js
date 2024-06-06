import "./App.css";
import BackToTop from "./components/homepage/BackToTop";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <HomePage />
      {/* <LandingPage /> */}
      <BackToTop />
    </div>
  );
}

export default App;
