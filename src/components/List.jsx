import React from "react";
import PropTypes from "prop-types";

export const List = ({ items, toggleViewMode, setValue }) => {
  const handleClick = (e) => {
    setValue((prev) => [
      ...prev,
      { title: "新規メモ", content: e.target.value },
    ]);
    toggleViewMode();
  };

  return (
    <div className="list">
      {items.map((item, i) => (
        <div key={i}>{item.title}</div>
      ))}
      <button onClick={handleClick}>+</button>
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  toggleViewMode: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};
