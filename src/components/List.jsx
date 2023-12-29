import React from "react";
import PropTypes from "prop-types";

export const List = ({ items, toggleViewMode }) => {
  return (
    <div className="list">
      {items.map((item, i) => (
        <div key={i}>{item.title}</div>
      ))}
      <button onClick={() => toggleViewMode()}>+</button>
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  toggleViewMode: PropTypes.func.isRequired,
};
