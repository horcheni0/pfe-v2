import React from 'react';
import './hero.css';

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>new arrival only</h2>
        <div>
          <div className='hero-hand-icon'>
            <p>New</p>  
          </div>
          <div>
            <a href="#" className="hero-link" target="_blank">Thismanslife</a>
          </div>
        </div>
        <div className='hero-hand-icon'>
          <p>For Everyone</p>
        </div>

        <div className="hero-lastest-btn" >
          <span>Last Collection</span>
        </div>
      </div>
      <div className="hero-right">
        
      </div>
    </div>
  );
}

export default Hero;
