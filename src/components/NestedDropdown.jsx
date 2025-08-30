// NestedDropdown.jsx
import React from "react";
import DropdownItem from "./DropdownItem";

const NestedDropdown = ({ data, css1 }) => {
  return (
    <ul className={css1}>
      {data.map((item, index) => (
        <DropdownItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default NestedDropdown;
