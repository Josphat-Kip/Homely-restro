import React, { useContext } from "react";
import { RestaurantContext } from "../RestaurantContext";
import "./RestaurantPage.css";

export default function RestaurantPage() {
  const { restaurant, restaurantError } = useContext(RestaurantContext);

  return (
    <>
      {restaurantError?.length > 0
        ? restaurantError?.map((error, index) => (
            <span key={index} className="error">
              {error}
            </span>
          ))
        : null}
      <div className="restaurant-page">
        <div className="restaurant-info ">
          <div className="intro">
            <h2> {restaurant.name} </h2>
            <p> {restaurant.description} </p>
            <a href="#food-container">
              <button className="menu-btn">View Menu</button>
            </a>
          </div>
          <div className="restaurant-page-img">
            <img src={restaurant.image_url} alt={restaurant.name} />
          </div>
        </div>
      </div>
    </>
  );
}

// This code imports the React and RestaurantContext components from the respective modules
// and uses the useContext hook to pull data from the RestaurantContext.
//Then it uses a ternary operator to check if an error exists and map it to the span element if it does. Finally, it renders the restaurant name, description, and image to the DOM.
