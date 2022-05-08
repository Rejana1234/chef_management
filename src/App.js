import React from 'react';

import { AboutUs, Chef, FindUs, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import { FooterOverlay } from './components';
import './App.css';

const App = () => (
  <div className="page-container">
    <div className="content-wrap">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <FooterOverlay />
    </div>
  </div>
);

export default App;
