import React from "react";
import fried from "../../assets/meals/fried.png";

const CalendarItems = ({ mealDate, mealDay, setModalView, image,name }) => {
  return (
    <>
      
        {/* { mealData.breakFastMeals.map((e)=>{ */}
          <div className="meals_col">
            <h6 className="meal_day">{mealDay}</h6>
            <h5 className="meals_date">{mealDate}</h5>
            <div className="dish_with_swap">              
              <img src={image} />

              <h4 className="dishname">{name}</h4>
              <div className="swap_rate">
                <span>Swap</span>
                <span onClick={() => setModalView(true)}>Choose</span>
                <span>Rate</span>
              </div>
            </div>
         
           
          </div>
      {/* })  
      } */}
      
    </>
  );
};

export default CalendarItems;
