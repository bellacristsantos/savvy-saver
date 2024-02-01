import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import TimeTravel from './components/TimeTravel/TimeTravel';
import InvestmentsOptions from './components/InvestmentsOptions/InvestmentsOptions';
import LearnMore from './components/LearnMore/LearnMore';
import './App.css';

function App() {
  return (
   <Router>
      <div className="app-container">
      <Navigation />
      <Routes>
      <Route path='/' element={<Navigate to='/time-travel' replace />} />
      <Route path='/time-travel' element={<TimeTravel />} />
      <Route path='/investments-options' element={<InvestmentsOptions />} />
      <Route path='/learn-more' element={<LearnMore />} />
      </Routes>
      </div>
   </Router>
  );
}

export default App;
