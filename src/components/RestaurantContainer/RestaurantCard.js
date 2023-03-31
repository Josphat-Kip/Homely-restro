import React, { useContext } from "react";
import "./RestaurantContainer.css";
import { RestaurantContext } from "../RestaurantContext";

function RestaurantCard({
  restaurant,
  restaurantName,
  restaurantRating,
  restaurantImage,
  restaurantAddress,
}) {
  const { handleRestaurant } = useContext(RestaurantContext);
  return (
    <div className="restaurant-card">
      <div className="restaurant-img">
        <img src={restaurantImage} alt={restaurantName} />
      </div>
      <div className="restro-info">
        <h3 onClick={() => handleRestaurant(restaurant)}>{restaurantName}</h3>
        <h4> {restaurantAddress} </h4>
        {[...Array(restaurantRating)].map((star, index) => {
          return (
            <span key={index} className="star" style={{ color: "#e1f52c" }}>
              &#9733;
            </span>
          );
        })}
      </div>
    </div>
  );
}
// restaurantcard
export default RestaurantCard;

//This code snippet is a React component that renders a restaurant card.
//The card displays the restaurant name, address, rating, and image.
//The handleRestaurant function from the RestaurantContext is used as an
// onClick event handler to allow the user to click on the restaurant name and access more information.

//The restaurant rating is also rendered as stars which are displayed
