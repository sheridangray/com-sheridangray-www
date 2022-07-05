import React from "react";

const DropDown = ({handleChange,options, className, name}) => {
  return (
    <>
      <select onChange={handleChange} className={className} name={name}>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropDown;
