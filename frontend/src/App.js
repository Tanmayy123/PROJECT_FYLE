import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./components/Page1";
import Contact from "./components/Contact";
// import OurProjects from "./components/OurProjects";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/Contact" element={<Contact />} />
        {/* <Route path="/" element={<OurProjects />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
