export const PromoCard = (props) => {
  return (
    <div className="card bg-neutral w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.message}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};
