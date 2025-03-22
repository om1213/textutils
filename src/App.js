import About from "./Component/About";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="p-3 mb-2 bg-dark text-white" style={{ height: "100vh" }}>
      <BrowserRouter>
        <Navbar title="Text Utilities" aboutTxt="About" />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<TextForm heading="Enter text here to analyze: " />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
