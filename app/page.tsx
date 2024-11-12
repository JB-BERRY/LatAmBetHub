// app/page.tsx
import React from 'react';
import './globals.css'; // Global styles
import BoxContainer from './components/MenuItem';
import CasinoAffiliateTable from './components/CasinoAffiliateTable';

const HomePage = () => {
  // Exemple de liste de casinos
  const casinos = [
    {
      logoFileName: '22betlogo.png',
      affiliateLink: 'https://exemple.com/affiliation-casino1',
      bonus: '100 % jusqu\'à 600 €',
      paymentMethods: 'Visa, PayPal, Bitcoin',
      wageringRequirements: '5x sur 7 jours',
      rating: '4.5/5'
    },
    {
      logoFileName: 'apuesta.png',
      affiliateLink: 'https://exemple.com/affiliation-casino1',
      bonus: '100 % jusqu\'à 600 €',
      paymentMethods: 'Visa, PayPal, Bitcoin',
      wageringRequirements: '5x sur 7 jours',
      rating: '4.5/5'
    },
    {
      logoFileName: 'bet7.png',
      affiliateLink: 'https://exemple.com/affiliation-casino1',
      bonus: '100 % jusqu\'à 600 €',
      paymentMethods: 'Visa, PayPal, Bitcoin',
      wageringRequirements: '5x sur 7 jours',
      rating: '4.5/5'
    },
    {
      logoFileName: 'br4.png',
      affiliateLink: 'https://exemple.com/affiliation-casino1',
      bonus: '100 % jusqu\'à 600 €',
      paymentMethods: 'Visa, PayPal, Bitcoin',
      wageringRequirements: '5x sur 7 jours',
      rating: '4.5/5'
    },
    {
      logoFileName: 'luva_bet_logo.png',
      affiliateLink: 'https://exemple.com/affiliation-casino1',
      bonus: '100 % jusqu\'à 600 €',
      paymentMethods: 'Visa, PayPal, Bitcoin',
      wageringRequirements: '5x sur 7 jours',
      rating: '4.5/5'
    },
    {
      logoFileName: 'f12.png',
      affiliateLink: 'https://exemple.com/affiliation-casino1',
      bonus: '100 % jusqu\'à 600 €',
      paymentMethods: 'Visa, PayPal, Bitcoin',
      wageringRequirements: '5x sur 7 jours',
      rating: '4.5/5'
    },{
      logoFileName: 'nossabet.png',
      affiliateLink: 'https://exemple.com/affiliation-casino1',
      bonus: '100 % jusqu\'à 600 €',
      paymentMethods: 'Visa, PayPal, Bitcoin',
      wageringRequirements: '5x sur 7 jours',
      rating: '4.5/5'
    }
  ];  

  return (
    <div className="ag-section-bg homepage-lp-pattern center-top">
      <h1>Welcome to LatAmBetHub!</h1>
      <p className="justified-text">
        With dedicated expertise in Latin American online gambling, LatamBetHub is your go-to source for reliable and up-to-date betting information...
      </p>
      <br />
      
      {/* Menu items */}
      <BoxContainer />
      
      <br />
      
      {/* Tableau des liens d'affiliation des casinos */}
      
      <CasinoAffiliateTable casinos={casinos} />
    </div>
  );
};

export default HomePage;