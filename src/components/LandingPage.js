import React from "react";
import "./LandingPage.css";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { IconCard } from "./IconCard";
import NFL from "../assets/NFL_converted.png";
import NHL from "../assets/NHL_converted.png";
import MLB from "../assets/MLB_converted.png";
import { PromoCard } from "./PromoCard";
import { Footer } from "./Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="grid">
          <section>
            <Hero />
            <div className="cta-buttons"></div>
            <div className="sports bg-secondary">
              <IconCard iconName={MLB} leagueName="MLB" />
              <IconCard iconName={NFL} leagueName="NFL" />
              <IconCard iconName={NHL} leagueName="NHL" />
              <IconCard iconName={MLB} leagueName="MLB" />
              <IconCard iconName={MLB} leagueName="MLB" />
            </div>
            <div className="offers">
              <PromoCard
                title="JOIN NOW AND GET FIRST MONTH FREE"
                message="OFFER CODE: FRESHBETS"
              />
              <PromoCard
                title="JOIN NOW AND GET FIRST MONTH FREE"
                message="OFFER CODE: FRESHBETS"
              />
              <PromoCard
                title="JOIN NOW AND GET FIRST MONTH FREE"
                message="OFFER CODE: FRESHBETS"
              />
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
      <Footer />
    </div>
  );
};

export default LandingPage;
