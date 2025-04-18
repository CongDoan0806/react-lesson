const Product = ({ title, image, name, price }) => {
  return (
    <div className="product">
      <div className="text">
        <div className="p-name">
          <a href="item.html">{title}</a>
        </div>
      </div>
      <div className="p-img">
        <img src={image} width={200} height={200} />
      </div>
      <div className="text">
        <div className="p-cat">{name}</div>
        <div className="p-price">{price}</div>
        <input
          type="button"
          className="button"
          name="add"
          defaultValue="Add to cart"
        />
      </div>
      <div className="clear" />
    </div>
  );
};


export default Product;