import { Component } from "react";

const SidebarMenu = () => {
    return (
      <ul className="aside-menu">
          <li>
            <a href={`/page/product/type`}>Hello</a>
          </li>
          <li>
            <a href={`/page/product/type`}>Hello</a>
          </li>
          <li>
            <a href={`/page/product/type`}>Hello</a>
          </li>
          <li>
            <a href={`/page/product/type`}>Hello</a>
          </li>
      </ul>
    );
};

const ProductItem = () => {
    return (
      <div className="col-sm-4 d-flex align-items-stretch row-gap-4">
        <div className="single-item d-flex flex-column">
          <div className="single-item-header">
            <a href={`/page/detail/}`}>
              <img
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJPsgopRTxXRncyLuUAy6iwOToemXcHazmgg&s`}
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="single-item-body flex-grow-1">
            <p className="single-item-title"></p>
            <p className="single-item-price">
              <span>100 VND</span>
            </p>
          </div>
          <div className="single-item-caption">
            <a className="add-to-cart btn btn-primary btn-sm" href="shopping_cart.html">
              <i className="fa fa-shopping-cart"></i> Add to cart
            </a>
            <a
              className="beta-btn primary btn btn-outline-primary btn-sm"
              href={`/page/detail/`}
            >
              Details <i className="fa fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  const ProductList = ({ products = [], categoryName = "Default Category" }) => {
    return (
      <div className="beta-products-list">
        <h4>{categoryName}</h4>
        <div className="beta-products-details">
          <p className="pull-left">{products.length} styles found</p>
          <div className="clearfix"></div>
        </div>
  
        <div className="row">
          {Array.from({ length: 5 }).map((_, index) => (
            <ProductItem key={index} />
          ))}
        </div>
      </div>
    );
  };


  class Four extends Component {
    handleClick = () => {
        alert('hello');
      };
    render(){
        return (
            <div><button onClick = {this.handleClick}>Hello guys</button></div>
        )
    }
  }
  const ProductPage = () => {
    return (
       
      <div className="container">
        <div id="content" className="space-top-none">
            <Four />
          <div className="main-content">
            <div className="space60">&nbsp;</div>
            <div className="row">
              <div className="col-sm-3">
                <SidebarMenu />
              </div>
              <div className="col-sm-9">
                <ProductList />
                <div className="space40">&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ProductPage;