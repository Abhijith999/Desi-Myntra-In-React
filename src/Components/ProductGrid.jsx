import React from "react";
import { products } from "../Constants";
import Products from "./Products";
class ProductGrid extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        {this.props.productsList.map((product) => {
          return <Products product={product} />;
        })}
      </>
    );
  }
}
export default ProductGrid;
