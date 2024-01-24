import { Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import TrackRecord from "./pages/TrackRecord";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track-record" element={<TrackRecord />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
