import React from 'react';
import './App.css';
import Profile from './components/Profile';
import LinkButton from './components/LinkButton';
import Footer from './components/Footer';
import SocialIcons from './components/SocialIcons';

const App = () => {
  return (
    <div className='App'>
      <Profile />
      <LinkButton />
      <SocialIcons />
      <Footer />
    </div>
  )
}

export default App