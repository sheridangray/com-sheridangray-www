import React from "react";

import "./weekly-planner.styles.scss";

import not_yet from "../../assets/LinkedIn.png";
import { useEffect } from "react";
import { useState } from "react";
import { BASE_URI } from "../../Api/api";

const WeeklyPlannerPage = () => {
  const [mealData, setMealData] = useState();

  const fetchMealData = async () => {
    try {
      const res = await fetch(
      //  `https://smg-food-app-server.herokuapp.com/meals/getMealsByDate?startDate=2022-08-01&endDate=2022-08-11`
      `${BASE_URI}/recipe/`
      );
      const result = await res.json();
      console.log(result);
      setMealData(result?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMealData();
  }, []);

  return (
    <div className="weekly-planner">
      <h1 className="page-title">Weekly Planner</h1>

      <div className="days">
        <div className="day">
          <h3 className="day-of-week">Monday</h3>
          <div className="meals">
            <div className="meal">
              <div className="title not-yet">Breakfast</div>
            </div>
            <div className="meal">
              <div className="title">Lunch</div>
            </div>
            <div className="meal">
              <div className="title">Dinner</div>
            </div>
          </div>
        </div>
        <div className="day">
          <h3 className="day-of-week">Tuesday</h3>
          <div className="meals">
            <div className="meal">
              <div className="title">Breakfast</div>
            </div>
            <div className="meal">
              <div className="title">Lunch</div>
            </div>
            <div className="meal">
              <div className="title">Dinner</div>
            </div>
          </div>
        </div>
        <div className="day">
          <h3 className="day-of-week">Wednesday</h3>
          <div className="meals">
            <div className="meal">
              <div className="title">Breakfast</div>
            </div>
            <div className="meal">
              <div className="title">Lunch</div>
            </div>
            <div className="meal">
              <div className="title">Dinner</div>
            </div>
          </div>
        </div>
        <div className="day">
          <h3 className="day-of-week">Thursday</h3>
          <div className="meals">
            <div className="meal">
              <div className="title">Breakfast</div>
            </div>
            <div className="meal">
              <div className="title">Lunch</div>
            </div>
            <div className="meal">
              <div className="title">Dinner</div>
            </div>
          </div>
        </div>
        <div className="day">
          <h3 className="day-of-week">Friday</h3>
          <div className="meals">
            <div className="meal">
              <div className="title">Breakfast</div>
            </div>
            <div className="meal">
              <div className="title">Lunch</div>
            </div>
            <div className="meal">
              <div className="title">Dinner</div>
            </div>
          </div>
        </div>
        <div className="day">
          <h3 className="day-of-week">Saturday</h3>
          <div className="meals">
            <div className="meal">
              <div className="title">Breakfast</div>
            </div>
            <div className="meal">
              <div className="title">Lunch</div>
            </div>
            <div className="meal">
              <div className="title">Dinner</div>
            </div>
          </div>
        </div>
        <div className="day">
          <h3 className="day-of-week">Sunday</h3>
          <div className="meals">
            <div className="meal">
              <div className="title">Breakfast</div>
            </div>
            <div className="meal">
              <div className="title">Lunch</div>
            </div>
            <div className="meal">
              <div className="title">Dinner</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyPlannerPage;
