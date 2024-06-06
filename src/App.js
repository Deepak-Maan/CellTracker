import "./App.css";
import Preload from "./components/homepage/Preload";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <Preload/>
      <HomePage />
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
