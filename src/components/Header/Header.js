import React, { useState } from "react";
import "./Header.css";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { RestaurantContext } from "../RestaurantContext";

export default function Header({ loggedUser }) {
  const [header, setHeader] = useState(false);
  const { handleLogoutClick } = useContext(RestaurantContext);

  // checks vertical scroll position of the window
  // if the scroll position is greater than or equal to 80
  // it calls setHeader function and passing in a value of true
  // if the scroll position is less than 80, it calls setHeaderfunction and 
  // passes the value of false 
  function changeBackground() {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }

  window.addEventListener("scroll", changeBackground);

  return (
    <header className={header ? "header active" : "header"}>
      {/* takes the user to the page located by the URL when user clicks on restaurant */}
      <Link to={"/"}>
        <h3> Restaurants </h3>
      </Link>
      <Search />
      {loggedUser ? (
        <button className="header-login" onClick={handleLogoutClick}>
          Log out
        </button>
      ) : (
        //directs to login 
        <Link to={"/login"}>
          <button className="header-login">Login</button>
        </Link>
      )}
      {/* creates a signup button and a button with the first letter of the username of a
       logged in user. If no logged user, nothing is rendered in place of button */}
      <Link to={"/signup"}>
        <button className="header-sign">Sign Up</button>
      </Link>

      {loggedUser?.username ? (
        <button className="user-profile">
          {loggedUser.username.charAt(0)}
        </button>
      ) : null}
    </header>
  );
}

//This code renders a header component with a link to "Restaurants",
//a search bar, a log in button, a sign up button, and a user profile button.
// It also uses useContext to handle the log out click and useState to change the 
//background color of the header when the user scrolls.
