import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <Router basename="/<repository-name>">
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HeroSection} />
          <Route path="/portfolio" component={PortfolioSection} />
          <Route path="/about" component={AboutSection} />
          <Route path="/contact" component={ContactSection} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
