// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/navbar";
import Project from "./components/Project";
import About from "./pages/navbar/About";
import Contact from "./pages/navbar/Contact";
import Portfolio from "./pages/navbar/Portfolio";
import Resume from "./pages/navbar/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

      </Router>
      <Footer />
    </div>
  );
}

export default App;
