import "./App.css";
import Benefits from "./components/Benefits";
import Count from "./components/Count";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import Sectors from "./components/Sectors";
import Services from "./components/Services";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <Sectors />
      <Benefits />
      <Count />
      <Footer />
    </div>
  );
}

export default App;
