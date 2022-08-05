import React from "react";
import "./layout.styles.scss";
import recipee from "../assets/meals/recipee.svg";
import meal from "../assets/meals/meal.svg";
import { useLocation, useNavigate } from "react-router";
const Layout = ({ children }) => {
  let navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className="meal_plan_row">
      <div className="recipee_sidebar">
        <h3>Food</h3>
        <ul>
          <li
            to="/food/recipies"
            className={
              ["/food/recipies", "/food/recipies/create"].includes(pathname)
                ? "active"
                : ""
            }
            onClick={() => navigate("/food/recipies")}
          >
            <img src={recipee} /> Recipies
          </li>
          <li
            to="/food/mealplan"
            className={pathname == "/food" ? "active" : ""}
            onClick={() => navigate("/food")}
          >
            <img src={meal} /> Meal Planner
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
};

export default Layout;