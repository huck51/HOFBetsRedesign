import hofLogoBlk from "../assets/hofbets-logo-black.png";

export const BlogCard = (props) => {
  return (
    <div className="card card-compact bg-base-100 w-72 h-72 shadow-xl m-10 p-5">
      <figure className="w-48 p-5">
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
          <button className="btn btn-secondary w-16" onClick={props.next}>Next</button>
        </div>
      </div>
    </div>
  );
};
