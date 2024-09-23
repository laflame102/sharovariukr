import "./App.css";
import Cosacks from "./components/cosacks/cosacks";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Traditions from "./components/traditions/traditions";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Traditions />
      <Cosacks />
      <Footer />
    </div>
  );
}

export default App;
