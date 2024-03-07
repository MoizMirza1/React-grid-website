import React from 'react';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutPage/>} />
          {/* Add more routes here if needed */}
        </Routes>
      </div>
      <Footer/>
    </Router>

  );
};

export default App;
