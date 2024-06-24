export const IconCard = (props) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={props.iconName} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{props.leagueName}</h2>
        <p>0 Games tonight</p>
      </div>
    </div>
  );
};
