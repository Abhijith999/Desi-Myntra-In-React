import React from "react";
import "./styles.css";
import ProductGrid from "./Components/ProductGrid";
import Search from "./Components/Search";
import { products } from "./Constants";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productsList: products,
      backupList: products
    };
  }
  updateProducts = (Newproducts) => {
    this.setState({
      backupList: Newproducts
    });
  };
  render() {
    return (
      <>
        <h1>Desi Myntra</h1>
        <div className="product_container">
          <Search
            productsList={this.state.productsList}
            updateProducts={this.updateProducts}
          />
          <h2>Product List</h2>
          <div className="container">
            <ProductGrid productsList={this.state.backupList} />
          </div>
        </div>
      </>
    );
  }
}
export default App;
