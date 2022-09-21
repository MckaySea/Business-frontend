import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact/contact";
function App() {
  return (
    <Router>
      <div className="scrollbarRemove">
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
