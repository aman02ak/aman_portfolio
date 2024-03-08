import React from 'react';
import './styles/LandingPage.css';

function LandingPage() {
  return (
    <div className='landingPage-container'>
        <div className='landingPage-header'></div>
        <div className='landingPage-section'>
            <div className='landingPage-sectionLeft'>
                <span className='landingPage-firstName'>Aman</span>
                <span className='landingPage-borderLine'></span>
                <span className='landingPage-lastName'>Kumar</span>
            </div>
            <div className='landingPage-sectionRight'></div>
        </div>
    </div>
  );
}

export default LandingPage