import React from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import IntroSection from './components/IntroSection/IntroSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <TopBar />
      <IntroSection />
      <Footer />
    </div>
  );
}

export default App;
