import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import { RestaurantContext } from "../RestaurantContext";

export default function Search() {
  const { search, handleSearchChange } = useContext(RestaurantContext);

  return (
    <form className="search-form">
      <Icon icon="material-symbols:search" className="search-icon" />
      <input
        type="text"
        placeholder="Search"
        id="search"
        value={search}
        onChange={handleSearchChange}
      />
    </form>
  );
}

//This code renders a search bar that includes a search icon and an input field.
//The useContext hook is used to access the search term,
// as well as the handleSearchChange function, from the RestaurantContext.
