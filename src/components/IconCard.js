export const IconCard = (props) => {
  return (
    <div className="card bg-secondary w-50 shadow-xl">
      <figure className="px-15 pt-15">
        <img src={props.iconName} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{props.leagueName}</h2>
        <p>0 Games tonight</p>
      </div>
    </div>
  );
};
