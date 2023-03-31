import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import RestaurantContainer from "./components/RestaurantContainer/RestaurantContainer";
import RestaurantPage from "./components/RestaurantPage/RestaurantPage";
import LoginForm from "./components/Login/Login ";
import SignUp from "./components/SignUp/SignUp";
import { RestaurantContext } from "./components/RestaurantContext";

function App() {
  const { user, setUser } = useContext(RestaurantContext);
  useEffect(() => {
    const payload = async () => {
      const response = await fetch("/me");

      const loggedUser = await response.json();

      if (response.ok) {
        setUser(loggedUser);
      }
    };
    payload();
  }, [setUser]);
  return (
    <>
      <div ClassName="App">
        <Header loggedUser={user} />
      </div>{" "}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h3 id="bookList-heading"> Popular Restaurants </h3>
              <RestaurantContainer />
            </>
          }
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/restaurants/:id" element={<RestaurantPage />} />
      </Routes>
    </>
  );
}

export default App;
