import react from "react";
import { useOrders } from "../contexts/OrderContext";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const { orders } = useOrders();

  //getting input from the user
  const onSub = (e) => {
    onSearch(e.target.value.toLowerCase());
    console.log(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search the order..."
        onChange={onSub}
        className="search"
      />
    </div>
  );
};

export default SearchBar;
