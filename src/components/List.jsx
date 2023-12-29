import React from "react";
import PropTypes from "prop-types";

export const List = ({ items, toggleViewMode, setValue }) => {
  const handleAddMemo = () => {
    setValue((prev) => [...prev, { title: "新規メモ", content: "新規メモ" }]);
    toggleViewMode();
  };

  return (
    <div className="list">
      {items.map((item, i) => (
        <div key={i}>{item.title}</div>
      ))}
      <button onClick={handleAddMemo}>+</button>
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  toggleViewMode: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};
