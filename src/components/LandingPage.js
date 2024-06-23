import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      <nav className="container-fluid">
        <ul>
          <li><strong>HEATS</strong></li>
        </ul>
        <ul>
          <li><a href="#">Features</a></li>
          <li><a href="#">Beta</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#" role="button">Get Started</a></li>
        </ul>
      </nav>
      <main className="container">
        <div className="grid">
          <section>
            <hgroup>
              <h2>HALL OF FAME BETS</h2>
              <h3>Your Go-to Sports Betting Analytics Platform</h3>
            </hgroup>
            <div className="cta-buttons">
              <button>Get Started</button>
              <button className="secondary">Get Support</button>
            </div>
            <div className="sports">
              <div className="sport">
                <img src="path_to_nba_image" alt="NBA" />
                <p>NBA</p>
              </div>
              <div className="sport">
                <img src="path_to_nhl_image" alt="NHL" />
                <p>NHL</p>
              </div>
              <div className="sport">
                <img src="path_to_mhl_image" alt="MHL" />
                <p>MHL</p>
              </div>
              <div className="sport">
                <img src="path_to_soccer_image" alt="Soccer" />
                <p>Soccer</p>
              </div>
              <div className="sport">
                <img src="path_to_nfl_image" alt="NFL" />
                <p>NFL</p>
              </div>
              <div className="sport">
                <img src="path_to_nbl_image" alt="NBL" />
                <p>NBL</p>
              </div>
            </div>
            <div className="offers">
              <div className="offer">
                <p>NBA</p>
                <p>Get 1st month</p>
                <p>$14.99</p>
                <p>with code: 50FF</p>
              </div>
              <div className="offer">
                <p>Get Started</p>
                <p>1st month</p>
                <p>$14.99</p>
                <p>with code: 50FF</p>
              </div>
              <div className="offer">
                <p>Soccer</p>
                <p>Sign up</p>
                <p>$4.99</p>
                <p>with code: 50FF</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="container">
        <small><a href="#">Terms</a> • <a href="#">Privacy</a></small>
      </footer>
    </div>
  );
};

export default LandingPage;
