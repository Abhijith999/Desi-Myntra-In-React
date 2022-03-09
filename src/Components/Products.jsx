import React from "react";

class Products extends React.Component {
  render() {
    return (
      <div className="product">
        <span>{this.props.product["product_name"]}</span>
        <img src={this.props.product["product_image"]} />
      </div>
    );
  }
}
export default Products;
