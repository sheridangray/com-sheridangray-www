import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../pages/allRecipies/allRecipes.style.scss";
import star from "../../assets/food/star.svg";
import halfstar from "../../assets/food/halfstar.svg";
import facebook from "../../assets/food/facebook.svg";
import twitter from "../../assets/food/twitter.svg";
import pin from "../../assets/food/pin.svg";
import close from "../../assets/meals/close.svg";
import filter from "../../assets/food/filter.svg";
import share from "../../assets/food/share.svg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BASE_URI } from "../../Api/api";
import moment from "moment";
import { format } from "date-fns";

const RecipeDetail = () => {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [modalView, setModalView] = useState(false);
  const [mealPlannerModalView, setMealPlannerModalView] = useState(false);
  const [tdata, setData] = useState({
    checked: false,
    data: [],
  });

  const [isLoading, setLoading] = useState(true);
  const location = useLocation();

  //datepicker-//calendar
  const [date, setDate] = useState(new Date()); //. We created a state to store a date and
  //passed the current date as its initial value using JavaScript’s Date object
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayNumer = date.getDay();
  console.log(dayNumer);
  const dayName = days[dayNumer];
  console.log(dayName, "NAAAAM");

  //date format

  //  let time= date.split("T")[ 0]

  //let time= setDate.substring(0, 10)
  //let time= setDate.toGMTString()

  const pathName = location.pathname.split("/");
  let path = pathName[pathName.length - 1]; // to get the last segment of the URL
  //console.log(path);
  const fetchRecipeDetails = async () => {
    try {
      const res = await fetch(`${BASE_URI}/recipe/${path}`); //localhost:8080/recipe
      const result = await res.json();
      console.log(result);
      setRecipeDetails(result?.data[0]);
      setData({ ...tdata, data: result.data[0].ingredients });
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };
  console.log(recipeDetails);
  useEffect(() => {
    fetchRecipeDetails();
  }, []);

  const testFunction = (e,dayName) => {
    console.log(dayName);
    console.log("testfunction");
    let recipeInfo = JSON.stringify({
      day: dayName,
      date: format(e, "yyyy-MM-dd"),
      categoryId: recipeDetails.categories[0]._id,
      recipeId: recipeDetails._id,
    });
    console.log("Information", recipeInfo);
    fetch(`${BASE_URI}/meals`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: recipeInfo,
    }).then((result) => {
      console.log("DATA", result);
    });
  };

  if (isLoading) {
    return (
      <div>
        <h1>Loading......</h1>
      </div>
    );
  }

  const handleChange = (e) => {
    let itemName = e.target.name;
    let checked = e.target.checked;
    setData((p) => {
      let { allChecked, data } = p;
      //when all is selected then all the checkbox will be true
      if (itemName === "all") {
        allChecked = checked;
        data = data.map((item) => ({ ...item, checked: checked }));
      } else {
        data = data.map((e) =>
          e._id === itemName ? { ...e, checked: checked } : e
        );
        allChecked = data.every((item) => item.checked);
        if (allChecked === false) {
          setData((p) => {
            let { allChecked, data } = p;
            allChecked = false;
            data = data.map((e) => ({ ...e }));
            return { allChecked, data };
          });
        }
        console.log(allChecked, "checkAllChecked", "and data", data);
      }
      return { allChecked, data };
    });
  };
  const handleDate = (e,dayName) => {
    alert("Date Selected Succesfully");
    setDate(e);
    testFunction(e,dayName);
  };
  return (
    <div className="meal_planner_col">
      <div className="all_recippe_row">
        <div className="allrecipee-title">
          <h3>{recipeDetails.name}</h3>
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
          <img src={recipeDetails.image} />

          <div className="meals_btn">
            <button
              className="add_meal"
              onClick={() => setMealPlannerModalView(true)}
            >
              Add to Meal Planner
            </button>
            <button className="rate_meal">Rate Meal</button>
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
            <div>
              {recipeDetails.categories?.map((e) => (
                <ul>
                  <li>{e.name}</li>
                </ul>
              ))}
            </div>
          </div>
          <div className="recipee_prepration">
            <h5>Time</h5>
            <ul>
              <li>
                Prep: <strong>{recipeDetails?.prepTime} minutes</strong>
              </li>
              <li>
                Cook: <strong>{recipeDetails?.cookTime} minutes</strong>
              </li>
              <li>
                Total: <strong>{recipeDetails?.totalTime} minutes </strong>
              </li>
            </ul>
          </div>

          <div className="recipee_prepration">
            <h5>Visibility</h5>
            <ul>
              <li>{recipeDetails.visibility}</li>
            </ul>
          </div>
        </div>

        <div className="details_col">
          <h3>Ingredients</h3>
          <div className="ingredients">
            <input
              type="checkbox"
              name="all"
              value="all"
              onChange={(e) => handleChange(e)}
              checked={tdata.allChecked}
            />

            <span>Select All</span>
          </div>
          {tdata.data?.map((e) => (
            <div className="details_col">
              <div className="ingredients">
                <input
                  type="checkbox"
                  name={e._id}
                  checked={e.checked}
                  onChange={(e) => handleChange(e)}
                ></input>
                <span>
                  {e.quantity} {e.qType} of {e.ingredient}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="details_col ">
            <h3>Preparation</h3>
            {recipeDetails.preparation?.map((e) => (
              <div className="preprations">
                <div className="detail_step">
                  <h5>Step{e.step}</h5>
                  <p>{e.info}</p>
                </div>
              </div>
            ))}
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

      {mealPlannerModalView && (
        <div className="modal share_popup_row">
          <div className="modal-content">
            <div className="share_popup">
              <div className="search_bar">
                <div className="back_with_title">
                  <h3> Add to Meal Plan </h3>
                </div>
                <div className="filter_with_search">
                  <button onClick={() => setMealPlannerModalView(false)}>
                    <img src={close} />
                  </button>
                </div>
              </div>
              <div className="app">
                <h1 className="text-center"></h1>
                <div className="calendar-container">
                  <Calendar onChange={(e) => handleDate(e,dayName)} value={date} />
                </div>
                <p className="text-center">
                  <span className="bold">Selected Date:</span>{" "}
                  {/* {date.toDateString()}  */}
                  {JSON.stringify(dayName)}
                  {/* {JSON.stringify(time)} */}
                  {JSON.stringify(format(date, "yyyy-MM-dd"))}
                </p>
              </div>
            </div>
          </div>
          {/* <button onClick={() => testFunction()}>Dbaao Meko</button> */}
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
