import React from "react";

const DropDown = ({handleChange,options, className, name, selected}) => {
  return (
    <>
      <select onChange={handleChange} className={className} name={name} value={selected}>
        {options.map((item, index) => (
          
          <option key={item._id} value={item._id} disabled={index ==0 ? true: false} selected={index==0} >
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropDown;
