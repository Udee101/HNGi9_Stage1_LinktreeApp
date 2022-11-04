import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App