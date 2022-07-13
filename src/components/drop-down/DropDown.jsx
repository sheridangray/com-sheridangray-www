import React from "react";

const DropDown = ({handleChange,options, className, name, selected }) => {
  return (
    <>
      <select onChange={handleChange} className={className} name={name} value={selected}>
        {options.map((item) => (
          
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropDown;
