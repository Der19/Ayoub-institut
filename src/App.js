import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ChatButton from './components/ChatButton';
import BackgroundMusic from './components/BackgroundMusic';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
      <ChatButton />
      <BackgroundMusic />
    </div>
  );
}

export default App;

