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
import { VideoAnalyzer } from "./VideoAnalyzer";
import { BlogCard } from "./BlogCard";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="grid bg-primary">
          <section>
            <Hero />
            <div className="cta-buttons"></div>
            <div
              className="sports bg-primary -mt-3"
              style={{ boxShadow: "3px -1.5em 55px 25px rgb(29,33,42)" }}
            >
              <IconCard iconName={MLB} leagueName="MLB" />
              <IconCard iconName={NFL} leagueName="NFL" />
              <IconCard iconName={NHL} leagueName="NHL" />
              <IconCard iconName={MLB} leagueName="MLB" />
              <IconCard iconName={MLB} leagueName="MLB" />
            </div>
            <div className="bg-secondary offers">
              <div className="stack">
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
              <div className="stack">
                <BlogCard
                  blogType="Tutorial"
                  title="Mastering Alternate Line Betting for Increased Sports Betting Profits"
                  blogUrl="https://hofbets.com/blog/tutorials/mastering-alternate-line-betting-for-increased-sports-betting-profits/"
                  date="06/11/24"
                />
                <BlogCard
                  blogType="Tutorial"
                  title="Round Robin Betting Explained: Mastering the Strategy"
                  blogUrl="https://hofbets.com/blog/tutorials/round-robin-betting-explained-mastering-the-strategy/"
                  date="06/07/24"
                />
                <BlogCard
                  blogType="Tutorial"
                  title="What Does Over Under Mean in Sports Betting?"
                  blogUrl="https://hofbets.com/blog/tutorials/what-does-over-under-mean-in-sports-betting/"
                  date="05/31/24"
                />
              </div>
              <div className="stack">
                <BlogCard
                  blogType="Daily Play"
                  title="Mastering Alternate Line Betting for Increased Sports Betting Profits"
                  blogUrl="https://hofbets.com/blog/tutorials/mastering-alternate-line-betting-for-increased-sports-betting-profits/"
                  date="06/11/24"
                />
                <BlogCard
                  blogType="Daily Play"
                  title="Mastering Alternate Line Betting for Increased Sports Betting Profits"
                  blogUrl="https://hofbets.com/blog/tutorials/mastering-alternate-line-betting-for-increased-sports-betting-profits/"
                  date="06/11/24"
                />
                <BlogCard
                  blogType="Daily Play"
                  title="Mastering Alternate Line Betting for Increased Sports Betting Profits"
                  blogUrl="https://hofbets.com/blog/tutorials/mastering-alternate-line-betting-for-increased-sports-betting-profits/"
                  date="06/11/24"
                />
              </div>
            </div>
            <div className="divider divider-primary"></div>
            <VideoAnalyzer />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
