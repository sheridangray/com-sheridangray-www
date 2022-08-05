import React, { useState } from "react";
import filter from "./imges/filter.svg";
import star from "./imges/star.svg";
import halfstar from "./imges/halfstar.svg";
import turkey from "./imges/turkey.png";
import salad from "./imges/salad.png";
import ginger from "./imges/ginger.png";
import beef from "./imges/beef.png";
import salmon from "./imges/salmon.png";
import rose from "./imges/rose.png";
import hasse from "./imges/hasse.png";
import curry from "./imges/curry.png";
import "./allRecipes.style.scss";
import CreateRecipee from "../../components/create-recipee/CreateRecipee.component";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { BASE_URI } from "../../Api/api";
function AllRecipes() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);

  const getAllRecipes = async () => {
    try {
      const res = await fetch(`${BASE_URI}/recipe/`); //localhost:8080/recipe
      const result = await res.json();
      console.log(result);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <div className="meal_planner_col">
      <div className="all_recippe_row">
        <div className="allrecipee-title">
          <h3>All Recipes</h3>
        </div>
        <div className="filter_btn">
          <div className="fillter_tab">
            <button>
              <img src={filter} />
              Filter
            </button>
          </div>
          <div className="recipee_tab">
            <button onClick={() => navigate(`/food/recipies/create`)}>
              Create Recipie
            </button>
          </div>
        </div>
      </div>

      <div className="all_recippe_rows all_recipe_main">
        {data?.map((e) => (
          <div
            className="all_recipee_col"
            onClick={() => navigate(`/food/recipies/${e._id}`)}
          >
            <img src={e.image} alt="No Image Found" />
            <h4>{e.name}</h4>
            <div className="star_rating">
              <span>
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={halfstar} />
                <img src={halfstar} />
              </span>
              <span>128 reviews</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllRecipes;
