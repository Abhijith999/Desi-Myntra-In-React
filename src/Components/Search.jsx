import React from "react";
let inputValue = "";
class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
  }

  handleChange = (event) => {
    const filterValue = event.target.value;
    const filteredProduct = this.props.productsList.filter((product) => {
      return product["product_name"].includes(filterValue);
    });
    this.props.updateProducts(filteredProduct);
  };

  render() {
    return (
      <>
        <input
          placeholder="Search Product"
          value={this.state.inputValue}
          onChange={(event) => {
            this.handleChange(event);
            this.setState({
              inputValue: event.target.value
            });
          }}
        />
        <button>Search</button>
      </>
    );
  }
}
export default Search;
