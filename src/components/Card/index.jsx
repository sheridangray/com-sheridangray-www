import React from "react";
import fried from "../../assets/meals/fried.png";
import "./card.styles.scss";
const Card = ({img,name}) => {
  return (
    <div className="card-inner">
      <img src={img} width="220px"/>

      <h4 className="dishname">{name}</h4>
      <div className="swap_rate">
        {/* <span>Swap</span> */}
        <span>Choose</span>
        {/* <span>Rate</span> */}
      </div>
    </div>
  );
};

export default Card;