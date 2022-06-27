import React, { useEffect, useState } from "react";
import recipee from "../../assets/meals/recipee.svg";
import meal from "../../assets/meals/meal.svg";
import arrow from "../../assets/meals/arrow.svg";
import rightarrow from "../../assets/meals/rightarrow.svg";
import fried from "../../assets/meals/fried.png";

import "./food.styles.scss";
import ChooseMealsPage from "../../components/choose-meals/choosemeals.component";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns'
const FoodPage = () => {
  const [currentNum,setCurrentNum] = useState(new Date().getDate());
  const [modalView, setModalView] = useState(false);
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  // let selectedDayMeetings = meetings.filter((meeting) =>
  //   isSameDay(parseISO(meeting.startDatetime), selectedDay)
  // )
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
              <button onClick={previousMonth}>
                <img src={arrow} />
              </button>
              <button onClick={nextMonth}>
                <img src={rightarrow} />
              </button>
            </div>
            <span className="time_between">
            {format(firstDayCurrentMonth, 'MMMM yyyy')}
            </span>
          </div>
          <div className="lunch_type">
            <label>
              <input type="radio" name="food" checked></input>
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
         {days.map((day)=>  <div className="meals_col">
              <h6 className="meal_day">{format(new Date(day), 'EEEE')}</h6>
              <h5 className="meals_date"><time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time></h5>
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
    </div>
  );
};

export default FoodPage;
