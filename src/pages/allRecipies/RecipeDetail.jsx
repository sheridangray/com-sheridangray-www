import React, { useState } from "react";
import "../../pages/allRecipies/allRecipes.style.scss";
import star from "../../assets/food/star.svg";
import halfstar from "../../assets/food/halfstar.svg";
import media from "../../assets/food/media.png";
import facebook from "../../assets/food/facebook.svg";
import twitter from "../../assets/food/twitter.svg";
import pin from "../../assets/food/pin.svg";
import close from "../../assets/meals/close.svg";
import filter from "../../assets/food/filter.svg"
import share from "../../assets/food/share.svg"
const RecipeDetail = () => {
  const [modalView, setModalView] = useState(false);
  return (
    <div className="meal_planner_col">
      <div className="all_recippe_row">
        <div className="allrecipee-title">
          <h3>Pad Gra Prow</h3>
        </div>
        <div className="filter_btn">
          <div className="fillter_tab">
            <button>
              <img src={filter} />
              Edit
            </button>
          </div>
          <div className="recipee_tab">
            <button onClick={() => setModalView(true)}>
              <img src={share} /> Share
            </button>
          </div>
        </div>
      </div>
      <div className="all_recipee_details">
        <div className="details_col">
          <h3>General Information</h3>
          <img src={media} />

          <div className="meals_btn">
            <a className="add_meal" href="#">
              Add to Meal Planner
            </a>
            <a className="rate_meal" href="#">
              Rate Meal
            </a>
          </div>

          <div className="recipee_rating">
            <h4>
              Rating<span>134 Reviews</span>
            </h4>
          </div>
          <div className="recipee_star">
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={halfstar} />
          </div>
          <div className="recipee_prepration">
            <h5>Categories</h5>
            <ul>
              <li>Thai</li>
              <li>Beef</li>
              <li>Low Carb</li>
            </ul>
          </div>
          <div className="recipee_prepration">
            <h5>Time</h5>
            <ul>
              <li>
                Prep: <strong>15 minutes</strong>
              </li>
              <li>
                Cook: <strong>10 minutes</strong>
              </li>
              <li>
                Total: <strong>25 minutes</strong>
              </li>
            </ul>
          </div>

          <div className="recipee_prepration">
            <h5>Visibility</h5>
            <ul>
              <li>Public</li>
            </ul>
          </div>
        </div>
        <div className="details_col">
          <h3>Ingredients</h3>
          <div className="ingredients">
            <input type="checkbox"></input>
            <span>Select All</span>
          </div>
          <div className="ingredients">
            <input type="checkbox"></input>
            <span>2 tbsp of oil</span>
          </div>
          <div className="ingredients">
            <input type="checkbox"></input>
            <span>12 oz of beef</span>
          </div>
          <div className="ingredients">
            <input type="checkbox"></input>
            <span>5 cloves of garlic</span>
          </div>
          <div className="ingredients">
            <input type="checkbox"></input>
            <span>1/2 of a red bell pepper</span>
          </div>
          <div className="ingredients">
            <input type="checkbox"></input>
            <span>1 small onion</span>
          </div>
          <div className="ingredients">
            <input type="checkbox"></input>
            <span>2 tsp of soy sauce</span>
          </div>
          <div className="ingredients">
            <input type="checkbox"></input>
            <span>1 tsp of dark soy sauce</span>
          </div>
          <div className="ingredients">
            <input type="checkbox"></input>
            <span>1 tsp of oyster sauce</span>
          </div>
          <div className="ingredients">
            <input type="checkbox"></input>
            <span>1 tbsp of fish sauce</span>
          </div>
          <div className="ingredients">
            <input type="checkbox"></input>
            <span>1/2 tsp of sugar</span>
          </div>
          <div className="ingredients">
            <input type="checkbox"></input>
            <span>1 cup of Thai basil leaves</span>
          </div>
          <div className="ingredients">
            <input type="checkbox"></input>
            <span>1 bushel of cilantro</span>
          </div>
          <div className="ingredients">
            <input type="checkbox"></input>
            <span>1 cup of jasmine rice</span>
          </div>
        </div>
        <div className="details_col ">
          <h3>Preparation</h3>
          <div className="preprations">
            <div className="detail_step">
              <h5>Step 1</h5>
              <p>
                Heat your wok over high heat, and add the <strong>oil</strong>.
                Sear the <strong>beef</strong> until just browned, remove from
                the wok, and set aside.
              </p>
            </div>
            <div className="detail_step">
              <h5>Step 2</h5>
              <p>
                Add the <strong>garlic</strong> and{" "}
                <strong>red bell pepper</strong> to the wok and stir-fry for
                about 20 seconds. Add the <strong>onions </strong>and stir-fry
                until browned and slightly caramelized.
              </p>
            </div>

            <div className="detail_step">
              <h5>Step 3</h5>
              <p>
                Toss the <strong>beef</strong> back in, along with the
                <strong>
                  {" "}
                  soy sauce, dark soy sauce, oyster sauce, fish sauce
                </strong>
                , and <strong>sugar</strong>. Stir-fry for another few seconds,
                and then fold in the<strong> Thai basil leaves</strong> until
                it’s just wilted.
              </p>
            </div>
            <div className="detail_step">
              <h5>Step 4</h5>
              <p>
                Serve with <strong>jasmine rice</strong>, and garnish with
                <strong> cilantro</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {modalView && (
        <div className="modal share_popup_row">
          <div className="modal-content">
            <div className="share_popup">
              <div className="search_bar">
                <div className="back_with_title">
                  <h3> Share Recipe </h3>
                </div>
                <div className="filter_with_search">
                  <button onClick={() => setModalView(false)}>
                    <img src={close} />
                  </button>
                </div>
              </div>
              <div className="share_social">
                <button className="facebook">
                  <img src={facebook} />
                  Share on Facebook
                </button>
                <button className="twitter">
                  <img src={twitter} />
                  Share on Twitter
                </button>
                <button className="pint">
                  <img src={pin} />
                  Share on Pintrest
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
