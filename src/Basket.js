const Basket = ({ basket, handleDeleteBasket }) => {
  return (
    <div>
      { basket.length > 0 ? (
        <div>
          {basket.map((obj) => {
            return (
              <div>
                <img src={obj.url} />
                <h1>{obj.name}</h1>
                <p>£{obj.price}</p>
                <button onClick={handleDeleteBasket}>remove</button>
              </div>
            );
          })}
        </div>
      ) : (
        <h1> Your basket is empty </h1>
      )}
    </div>
  );
};

export default Basket;