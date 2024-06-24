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
        <div className="grid bg-primary">
          <section>
            <Hero />
            <div className="cta-buttons"></div>
            <div className="sports bg-primary -mt-8" style={{boxShadow: "35px 25px 25px 15px"}}>
              <IconCard iconName={MLB} leagueName="MLB" />
              <IconCard iconName={NFL} leagueName="NFL" />
              <IconCard iconName={NHL} leagueName="NHL" />
              <IconCard iconName={MLB} leagueName="MLB" />
              <IconCard iconName={MLB} leagueName="MLB" />
            </div>
            <div className="bg-secondary offers">
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
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
