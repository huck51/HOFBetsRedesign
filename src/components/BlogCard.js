import hofLogoBlk from "../assets/hofbets-logo-black.png";

export const BlogCard = (props) => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={hofLogoBlk} alt="HOF Logo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.blogType}</h2>
        <p>{props.title}</p>
        <p>{props.date}</p>
        <div className="card-actions justify-end">
          <a href={props.blogUrl} target="_blank">
            <button className="btn btn-primary">Read</button>
          </a>
        </div>
      </div>
    </div>
  );
};
