const RestroCard = ({ resData }) => {
  return (
    <div className="restro-card">
      <img className="restro-logo" src={resData.img} />
      <h3>{resData.restroName}</h3>
      <div className="rating">
        <h4>⭐{resData.rating} </h4>
        <h4>⏱️{resData.deliveryTime} mins</h4>
      </div>
      <h4 className="cusion">{resData.cuisine}</h4>
    </div>
  );
};

export default RestroCard;
