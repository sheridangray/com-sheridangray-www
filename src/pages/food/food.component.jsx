import React, { useEffect, useState } from "react";
import recipee from "../../assets/meals/recipee.svg";
import meal from "../../assets/meals/meal.svg";
import arrow from "../../assets/meals/arrow.svg";
import rightarrow from "../../assets/meals/rightarrow.svg";
import fried from "../../assets/meals/fried.png";

import "./food.styles.scss";
import ChooseMealsPage from "../../components/choose-meals/choosemeals.component";

const FoodPage = () => {
  
  const currentYear = new Date().getFullYear();
  const currnetMonth = new Date().getMonth()   
  function getDaysArray(year, month) {
    var numDaysInMonth, daysInWeek, daysIndex, index, i, l, daysArray;

    numDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    daysInWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    daysIndex = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    index = daysIndex[new Date(year, month - 1, 1).toString().split(" ")[0]];
    daysArray = [];

    for (i = 0, l = numDaysInMonth[month - 1]; i < l; i++) {
      daysArray.push({ date: i + 1, day: daysInWeek[index++] });
      if (index == 7) index = 0;
    }

    return daysArray;
  }
  function getWeekDates(currentNum) {

    let now = new Date(currentNum);
    let dayOfWeek = now.getDay(); //0-6
    let numDay = now.getDate();
  
    let start = new Date(now); //copy
    start.setDate(numDay - dayOfWeek);
    start.setHours(0, 0, 0, 0);
  
  
    let end = new Date(now); //copy
    end.setDate(numDay + (7 - dayOfWeek));
    end.setHours(0, 0, 0, 0);
  
    return [start.getDate(), end.getDate()];
  }

  const [currentNum,setCurrentNum] = useState(new Date().getDate());
  const [startDate,setStartDate] = useState(new Date().getDate());
  const [endDate,setEndDate] = useState(new Date().getDate());
  const [modalView,setModalView] = useState(false);

  useEffect(() => {
    let [start, end] = getWeekDates(currentNum);
    setStartDate(start);
    setEndDate(end)
  },[currentNum])
  
  


  const paginate = () => {

    setCurrentNum((p) => p+7);
    // getWeekDates(currentNum);

  }

  const paginateNeg = () => {

    setCurrentNum((p) => p-7);

  }
  
//   console.log(start.toLocaleString(), end.toLocaleString());


  const monthData = getDaysArray(currentYear, currnetMonth+1);
  console.log(monthData)

  
  return (
    <div className="meal_plan_row">
      <div className="recipee_sidebar">
        <h3>Food</h3>
        <ul>
          <li>
            <img src={recipee} /> Recipies
          </li>
          <li className="active">
            <img src={meal} /> Meal Planner
          </li>
        </ul>
      </div>
      <div className="meal_planner_col">
        <div className="meal_planner_row">
          <div className="meals_today">
            <h4>Meal Planner</h4>
            <button>Today</button>
            <div className="arrows">
              <span>
                <img src={arrow} onClick={() => paginateNeg()}/>{" "}
              </span>
              <span>
                <img src={rightarrow}  onClick={() => paginate()}/>{" "}
              </span>
            </div>
            <span className="time_between">June {startDate} - {endDate}</span>
          </div>
          <div className="lunch_type">
            <label>
              <input type="radio" name="food"></input>
              <span></span>
              Breakfast
            </label>
            <label>
              <input type="radio" name="food"></input>
              <span></span>
              Lunch
            </label>
            <label>
              <input type="radio" name="food"></input>
              <span></span>
              Dinner
            </label>
          </div>
        </div>
        <div className="mealsday_row">
          {monthData.slice(currentNum,currentNum+7).map((e) => <div className="meals_col">
            <h6 className="meal_day">{e.date}</h6>
            <h5 className="meals_date">{e.day}</h5>
            <div className="dish_with_swap">
              <img src={fried} />

              <h4 className="dishname">Fried Eggs</h4>
              <div className="swap_rate">
                <span>Swap</span>
                <span onClick={() => setModalView(true)}>Choose</span>
                <span>Rate</span>
              </div>
            </div>
          </div>)}

          {
              modalView && <ChooseMealsPage setModalView={setModalView}/>
          }  
          
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
    </div>
  );
};

export default FoodPage;
