import React, { useEffect, useState } from "react";
import recipee from "../../assets/meals/recipee.svg";
import meal from "../../assets/meals/meal.svg";
import arrow from "../../assets/meals/arrow.svg";
import rightarrow from "../../assets/meals/rightarrow.svg";

import "./food.styles.scss";
import ChooseMealsPage from "../../components/choose-meals/choosemeals.component";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import startOfWeek from "date-fns/startOfWeek";
import CalendarItems from "../../components/CalendarItems/CalendarItems";
import CreateRecipee from "../../components/create-recipee/CreateRecipee.component";
import AllRecipes from "../allRecipies/AllRecipes";
import { BASE_URI } from "../../Api/api";
const FoodPage = () => {
  let today = startOfToday();
  const [modalView, setModalView] = useState(false);
  let [currentWeek, setCurretWeek] = useState(today);
  const dayNum = getDay(today);
  const [mealData, setMealData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const weekStart = startOfWeek(
    currentWeek,
    { weekStartsOn: dayNum },
    { days: 7 }
  );
  const weekEnd = endOfWeek(currentWeek, { weekStartsOn: dayNum }, { days: 7 });

  let days = eachDayOfInterval({
    start: weekStart,
    end: weekEnd,
  });

  function previousWeek() {
    let firstDayOfNextWeek = add(weekStart, { weeks: -1 });
    setCurretWeek(firstDayOfNextWeek);
  }

  function nextWeek() {
    let firstDayOfNextWeek = add(weekStart, { weeks: 1 });
    setCurretWeek(firstDayOfNextWeek);
  }

  function showTodayWeek() {
    setCurretWeek(today);
  }

  // Meal Category Array
  const mealCategories = [
    { type: "Breakfast", checked: true },
    { type: "Lunch", checked: false },
    { type: "Dinner", checked: false },
  ];

  const [mealCategory, setMealCategory] = useState(mealCategories);
  console.log(mealCategory);
  // const mine = mealData.breakFastMeals
  // console.log(mine);
  // console.log(("HEEELO"),mine);
  const handleChekBox = (e) => {
    let name = e.target.value;
    let checkedIItem = e.target.checked;
    
    setMealCategory((p) =>
      p.map((el) => (el.type === name ? { ...el, checked: checkedIItem } : el))
    );
  
  
  };

  const fetchMealData = async () => {
    console.log(weekStart);
    console.log(weekEnd);
    const initialDate = format(weekStart, "yyyy/MM/dd ");
    const endDate = format(weekEnd, "yyyy/MM/dd ");

    try {
      const res = await fetch(
        `${BASE_URI}/meals/getMealsByDate?startDate=${initialDate}&endDate=${endDate}` //startDate=2022-08-01&endDate=2022-08-11
      );
      const result = await res.json();
      console.log(result.data);
      setMealData(result?.data.breakFastMeals)
      
    } catch (error) {
      console.log(error);
    }
   
     setLoading(false);
  };

  useEffect(() => {
    fetchMealData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading......</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="meal_planner_col">
        <div className="meal_planner_row">
          <div className="meals_today">
            <h4>Meal Planner</h4>
            <button onClick={() => showTodayWeek()}>Today</button>
            <div className="arrows">
              <button onClick={previousWeek}>
                <img src={arrow} />
              </button>
              <button onClick={nextWeek}>
                <img src={rightarrow} />
              </button>
            </div>
            <span className="time_between">
              {format(weekStart, "MMMM d")} -{" "}
              {format(weekStart, "MMMM") !== format(weekEnd, "MMMM")
                ? format(weekEnd, "MMMM d")
                : format(weekEnd, "d")}
            </span>
          </div>
          <div className="lunch_type">
            {mealCategory.map((el, i) => (
              <label>
                <input
                  type="radio"
                  name="food"
                  value={el.type}
                  checked={el.checked}
                  onChange={(e) => handleChekBox(e, el.checked)}
                ></input>
                <span></span>
                {el.type}
              </label>
            ))}
          </div>
        </div>
        <div className="mealsday_row">
          {mealData?.map((day) => (
            <CalendarItems
              mealDay= {day.day}
              mealDate=   {format(new Date(day.date), 'dd')}        //       {day.date}            //{new Date(day.date,day.getDay() )}
              setModalView={setModalView}
              //mealData={mealData}
              name={day.recipe.name}
              image={day.recipe.image}
            />
          ))}

          {modalView && <ChooseMealsPage setModalView={setModalView} />}

          {/* <div className="meals_col">
            <h6 className="meal_day">SAT</h6>
            <h5 className="meals_date">18</h5>
            <div className="dish_with_swap">
              <img src={fried} />

              <h4 className="dishname">Fried Eggs</h4>
              <div className="swap_rate">
                <span>Swap</span>
                <span>Choose</span>
                <span>Rate</span>
              </div>
            </div>
          </div>
          <div className="meals_col">
            <h6 className="meal_day">SUN</h6>
            <h5 className="meals_date">19</h5>
            <div className="dish_with_swap">
              <img src={fried} />

              <h4 className="dishname">Fried Eggs</h4>
              <div className="swap_rate">
                <span>Swap</span>
                <span>Choose</span>
                <span>Rate</span>
              </div>
            </div>
          </div>
          <div className="meals_col">
            <h6 className="meal_day">MON</h6>
            <h5 className="meals_date">20</h5>
            <div className="dish_with_swap">
              <img src={fried} />

              <h4 className="dishname">Fried Eggs</h4>
              <div className="swap_rate">
                <span>Swap</span>
                <span>Choose</span>
                <span>Rate</span>
              </div>
            </div>
          </div>

          <div className="meals_col">
            <h6 className="meal_day">TUE</h6>
            <h5 className="meals_date">21</h5>
            <div className="dish_with_swap">
              <img src={fried} />

              <h4 className="dishname">Fried Eggs</h4>
              <div className="swap_rate">
                <span>Swap</span>
                <span>Choose</span>
                <span>Rate</span>
              </div>
            </div>
          </div>
          <div className="meals_col">
            <h6 className="meal_day">WED</h6>
            <h5 className="meals_date">22</h5>
            <div className="dish_with_swap">
              <img src={fried} />

              <h4 className="dishname">Fried Eggs</h4>
              <div className="swap_rate">
                <span>Swap</span>
                <span>Choose</span>
                <span>Rate</span>
              </div>
            </div>
          </div>
          <div className="meals_col"> 
            <h6 className="meal_day">THU</h6>
            <h5 className="meals_date">23</h5>
            <div className="dish_with_swap">
              <img src={fried} />

              <h4 className="dishname">Fried Eggs</h4>
              <div className="swap_rate">
                <span>Swap</span>
                <span>Choose</span>
                <span>Rate</span>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
      {/* <CreateRecipee /> */}
    </div>
  );
};

export default FoodPage;
