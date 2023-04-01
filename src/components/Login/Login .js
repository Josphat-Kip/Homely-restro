import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { RestaurantContext } from "../RestaurantContext";
import "./LoginForm.css";

export default function LoginForm() {
  const {
    loginData,
    handleLoginChange,
    handleSubmitLoginDetails,
    loginError,
    isLoading,
  } = useContext(RestaurantContext);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <div className="row align-items-center mb-4">
                <div className="col-4">
                  <img
                    src="./images/img1.jpg"
                    alt="restaurant table"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-8">
                  <h3 className="mb-0">Homely-Delicacies</h3>
                  <p className="text-muted mb-0">
                    Your happy place is our happy place! Welcome to the best
                    restaurant in town serving everything from burgers and ries
                    to pasta and pizza, and the hottest deserts.
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmitLoginDetails}>
                <div className="form-group mb-3">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    autoComplete="off"
                    value={loginData.username}
                    onChange={handleLoginChange}
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    autoComplete="current-password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                  />
                </div>
                {loginError?.map((error, index) => (
                  <p className="alert alert-danger" key={index}>
                    {error}!
                  </p>
                ))}
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-3"
                >
                  {isLoading ? " Loading..." : "Login"}{" "}
                </button>
              </form>
              <div className="text-center">
                <Link to="#" className="text-decoration-none">
                  Don't have an account? Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
