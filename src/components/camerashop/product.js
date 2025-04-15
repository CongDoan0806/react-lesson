const Product = () => {
    return (

<div className="product">
        <div className="text">
          <div className="p-name">
            <a href="item.html">LUMIX DMC-G2</a>
          </div>
        </div>
        <div className="p-img">
          <img src="http://127.0.0.1:5501/images/mayanh2.jpg" width={200} height={200} />
        </div>
        <div className="text">
          <div className="p-cat">DIGITAL CAMERA </div>
          <div className="p-price">Please Call </div>
          <input type="button" className="button" name="add" defaultValue="Add to cart" />
        </div>
        <div className="clear" />
      </div>
    )
};

export default Product;