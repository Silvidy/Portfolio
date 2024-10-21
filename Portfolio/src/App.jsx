import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';           // Import HomePage
import AboutPage from './pages/AboutPage';         // Import AboutPage
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <div>
        {/* Home button placed here */}
        
        <NavBar/>
        

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;