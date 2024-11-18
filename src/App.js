import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          {/* <Route path="/protection" element={<Protection />} />
          <Route path="/gallery" element={<Gallery />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
