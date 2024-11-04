// app/page.tsx
import React from 'react';
import './globals.css'; // Global styles
import BoxContainer from './components/MenuItem';

const HomePage = () => (
  <div className="ag-section-bg homepage-lp-pattern center-top">
    <h1>Welcome to LatAmBetHub!</h1>
    <p className="justified-text">
      With dedicated expertise in Latin American online gambling, LatamBetHub is your go-to source for reliable and up-to-date betting information...
    </p>
    <br/>
    {/* Menu items */}
    <BoxContainer />
  </div>
);

export default HomePage;