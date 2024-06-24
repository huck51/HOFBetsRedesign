import heroBgImg from "../assets/HOFHeroSectionBackground.jpg";

export const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${heroBgImg})`,
        backgroundPosition: "top",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">HALL OF FAME BETS</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-neutral btn-xs sm:btn-sm md:btn-md rounded-full">
            Get Started
          </button>
          <button className="btn btn-neutral btn-xs sm:btn-sm md:btn-md rounded-full">
            Get Premium
          </button>
        </div>
      </div>
    </div>
  );
};
