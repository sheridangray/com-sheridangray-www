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
  const [lunchMealData, setLunchMealData] = useState([]);
  const [dinnerMealData, setDinnerMealData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [resultt, setResult] = useState([]);

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

  function previousWeek(initialDate, FinalDate) {
    console.log("clicked");
    var firstDayOfNextWeek = add(weekStart, { weeks: -1 });

    setCurretWeek(firstDayOfNextWeek);

    // console.log(firstDayOfNextWeek,"Hey") //Tue Aug 09 2022 00:00:00 GMT+0530 (India Standard Time) 'Hey'
    // console.log(currentWeek); //Tue Aug 16 2022 00:00:00 GMT+0530 (India Standard Time)
    // console.log(weekStart); //Tue Aug 16 2022 00:00:00 GMT+0530 (India Standard Time)
    // console.log(weekEnd);//Mon Aug 22 2022 23:59:59 GMT+0530 (India Standard Time)

    //On the click of previous week arrow
  }
  useEffect(() => {
    fetchPrevMealData(weekStart, weekEnd);
  }, [currentWeek]);
  const fetchPrevMealData = async (initialDate, FinalDate) => {
    const a = format(initialDate, "yyyy/MM/dd ");
    const b = format(FinalDate, "yyyy/MM/dd ");
    console.log(a);
    console.log(b);
    try {
      const res = await fetch(
        `${BASE_URI}/meals/getMealsByDate?startDate=${a}&endDate=${b}` //startDate=2022-08-01&endDate=2022-08-11
      );
      const result = await res.json();
      console.log(result);

      setMealData(result?.data.breakFastMeals);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(weekStart);
  console.log(weekEnd);

  function nextWeek() {
    let firstDayOfNextWeek = add(weekStart, { weeks: 1 });
    setCurretWeek(firstDayOfNextWeek);

    // console.log(firstDayOfNextWeek);
    // console.log(currentWeek);
    // console.log(weekStart);
    // console.log(weekEnd);
    const nextWeekApi = () => {};
    nextWeekApi();
    // const fetchNextWeekMealData = async () => {
    //   const ab = format(firstDayOfNextWeek, "yyyy/MM/dd ");
    //   const cd = format(weekEnd, "yyyy/MM/dd ");
    //   console.log(ab);
    //   console.log(cd);
    //   try {
    //     const res = await fetch(
    //       `${BASE_URI}/meals/getMealsByDate?startDate=${ab}&endDate=${cd}` //startDate=2022-08-01&endDate=2022-08-11
    //     );
    //     const result = await res.json();
    //     console.log(result.data);
    //     setMealData(result?.data.breakFastMeals);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchNextWeekMealData();
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

  useEffect(() => {
    // if (mealCategories[2].checked == true) {
    //   setMealData([...resultt.dinnerMeals]);
    // } else if (mealCategories[2].checked == true) {
    //   setMealData([...resultt.lunchMeals]);
    // } else {
    //   setMealData([...resultt.breakFastMeals]);
    // }
  }, [mealCategory]);

  // const mine = mealData.breakFastMeals
  // console.log(mine);
  // console.log(("HEEELO"),mine);
  const handleChekBox = (e) => {
    let name = e.target.value;
    let checkedIItem = e.target.checked;
    console.log(name); //Breakfast/Lunch/Dinner
    console.log(checkedIItem); //true
    console.log(resultt, "asjkbkjbkjf");

    setMealCategory((p) =>
      p.map((el) => (el.type === name ? { ...el, checked: checkedIItem } : el))
    );
  };

  const fetchMealData = async () => {
    console.log(weekStart);
    console.log(weekEnd);
    const initialDate = format(weekStart, "yyyy/MM/dd ");
    const endDate = format(weekEnd, "yyyy/MM/dd ");
    console.log(initialDate, "Initial Date");
    console.log(endDate, "EndDate");

    try {
      const res = await fetch(
        `${BASE_URI}/meals/getMealsByDate?startDate=${initialDate}&endDate=${endDate}` //startDate=2022-08-01&endDate=2022-08-11
      );
      const result = await res.json();
      console.log(result);
      console.log(result.data, "API RESPONSE");
      setResult(result?.data);
      setMealData(result?.data.breakFastMeals);
      setLunchMealData(result?.data.lunchMeals);
      setDinnerMealData(result?.data.dinnerMeals);
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
            <button onClick={showTodayWeek}>Today</button>
            <div className="arrows">
              <button onClick={() => previousWeek(weekStart, weekEnd)}>
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
                  // onClick={() => console.log(el.type)}
                  // ^^ name of the radio button clicked
                ></input>
                <span></span>
                {el.type}
              </label>
            ))}
          </div>
        </div>
        <div className="mealsday_row">
          {mealData
            .sort(function (a, b) {
              const date1 = new Date(a.date);
              const date2 = new Date(b.date);
              return date1 - date2;
            })
            ?.map((day) => (
              <CalendarItems
                mealDay={day.day}
                mealDate={format(new Date(day.date), "dd")} //       {day.date}            //{new Date(day.date,day.getDay() )}
                setModalView={setModalView}
                //mealData={mealData}
                name={day.recipe.name}
                image={day.recipe.image}
              />
            ))}

          {modalView && <ChooseMealsPage setModalView={setModalView} />}
        </div>
        {/* {if(mealCategories[1].checked == true)
        
        }  */}

        {mealCategories[1].name == "Lunch" && (
          <div className="mealsday_row">
            {lunchMealData
              .sort(function (a, b) {
                const date1 = new Date(a.date);
                const date2 = new Date(b.date);
                return date1 - date2;
              })
              ?.map((day) => (
                <CalendarItems
                  mealDay={day.day}
                  mealDate={format(new Date(day.date), "dd")} //       {day.date}            //{new Date(day.date,day.getDay() )}
                  setModalView={setModalView}
                  //mealData={mealData}
                  name={day.recipe.name}
                  image={day.recipe.image}
                />
              ))}

            {modalView && <ChooseMealsPage setModalView={setModalView} />}
          </div>
        )}
        {mealCategories[2].name == "Dinner" && (
          <div className="mealsday_row">
            {dinnerMealData
              .sort(function (a, b) {
                const date1 = new Date(a.date);
                const date2 = new Date(b.date);
                return date1 - date2;
              })
              ?.map((day) => (
                <CalendarItems
                  mealDay={day.day}
                  mealDate={format(new Date(day.date), "dd")} //       {day.date}            //{new Date(day.date,day.getDay() )}
                  setModalView={setModalView}
                  //mealData={mealData}
                  name={day.recipe.name}
                  image={day.recipe.image}
                />
              ))}

            {modalView && <ChooseMealsPage setModalView={setModalView} />}
          </div>
        )}
      </div>
      {/* <CreateRecipee /> */}
    </div>
  );
};

export default FoodPage;
