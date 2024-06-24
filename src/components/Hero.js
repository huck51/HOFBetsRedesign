import heroBgImg from "../assets/HOFHeroSectionBackground.jpg";

export const Hero = () => {
  return (
    <div
      className="hero bg-primary"
      style={{
        backgroundImage: `url(${heroBgImg})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "22em",
        boxShadow: "3px 3px 55px 25px rgb(24,30,45)"
      }}
    >
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="hero-content text-neutral-content text-center ml-9">
        <div className="max-w-md">
          <h5 className="mb-5 text-2xl font-bold text-base-100">Your go-to sports betting analytics platform</h5>
          <p className="mb-5 text-base-100">
            Get started with our quick tutorial or check out our premium package to unlock the full power of Hall of Fame Bets
          </p>
          <button className="btn btn-100 btn-xs sm:btn-sm md:btn-md rounded-full" style={{width: "15vw", marginRight: "1em"}}>
            Get Started
          </button>
          <button className="btn btn-100 btn-xs sm:btn-sm md:btn-md rounded-full" style={{width: "15vw", marginLeft: "1em"}}>
            Get Premium
          </button>
        </div>
      </div>
    </div>
  );
};
