
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Team from './components/Team';
import Events from './components/Events';
import './App.css';
import Image from './components/Image';
import Text from './components/Text';
import Buttons from './components/Buttons';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/App" element={<Home />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Events" components={Events} />
        </Routes>
        <div className="content-container">
          <div className="text-container">
            <Text />
            <Buttons />
          </div>
          <div className='image-section'>
            <Image />
          </div>
        </div>
      </div>
    </Router>
  );
};
export default App;

