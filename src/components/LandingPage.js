import React, { useState } from "react";
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
import { featured, tutorials, dailyPlays } from "../data/blogData";

const LandingPage = () => {
    const [featuredArr, setFeaturedArr] = useState(featured)
    const [tutorialsArr, setTutorialsArr] = useState(tutorials)
    const [dailyPlaysArr, setDailyPlaysArr] = useState(dailyPlays)
    const cycleBlog = (blogArr, setter) => {
        const current = blogArr.shift()
        blogArr.push(current)
        setter([...blogArr])
    }
    console.log(featured)
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
              {/* <div className="stack">
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
              </div> */}
              <div className="stack">
                {
                    featuredArr.map(blog => (
                        <BlogCard
                            blogType={blog.blogType}
                            title={blog.title}
                            blogUrl={blog.blogUrl}
                            date={blog.date}
                            next={() => cycleBlog(featuredArr, setFeaturedArr)}
                        />
                    ))
                }
              </div>
              <div className="stack">
                {
                    tutorialsArr.map(blog => (
                        <BlogCard
                            blogType={blog.blogType}
                            title={blog.title}
                            blogUrl={blog.blogUrl}
                            date={blog.date}
                            next={() => cycleBlog(tutorialsArr, setTutorialsArr)}
                        />
                    ))
                }
              </div>
              <div className="stack">
                {
                    dailyPlaysArr.map(blog => (
                        <BlogCard
                            blogType={blog.blogType}
                            title={blog.title}
                            blogUrl={blog.blogUrl}
                            date={blog.date}
                            next={() => cycleBlog(dailyPlaysArr, setDailyPlaysArr)}
                        />
                    ))
                }
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
