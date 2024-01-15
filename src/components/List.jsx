import React from "react";
import PropTypes from "prop-types";

export const List = ({ memos, addMemo, toggleMemo }) => {
  const handleAddItem = () => {
    const id = addMemo();
    toggleMemo(id);
  };

  const handleViewItem = (id) => {
    toggleMemo(id);
  };

  return (
    <div className="list">
      {memos.map((item) => (
        <div
          className="list-item"
          key={item.id}
          onClick={() => handleViewItem(item.id)}
        >
          {item.title}
        </div>
      ))}
      <button className="button-add" onClick={handleAddItem}>
        +
      </button>
    </div>
  );
};

List.propTypes = {
  memos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  addMemo: PropTypes.func.isRequired,
  toggleMemo: PropTypes.func.isRequired,
};
