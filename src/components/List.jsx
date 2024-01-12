import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

export const List = ({
  memos,
  viewMode,
  setMemos,
  toggleViewMode,
  setSelectedId,
}) => {
  const handleAddItem = () => {
    const newMemo = {
      id: uuidv4(),
      title: "新規メモ",
      content: "新規メモ",
    };
    const newStoredValue = [...memos, newMemo];
    setMemos(newStoredValue);
    setSelectedId(newMemo.id);
    if (viewMode === "list") toggleViewMode();
  };

  const handleViewItem = (id) => {
    setSelectedId(id);
    if (viewMode === "list") toggleViewMode();
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
      <button className="button-add" onClick={() => handleAddItem()}>
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
    })
  ).isRequired,
  viewMode: PropTypes.string.isRequired,
  setMemos: PropTypes.func.isRequired,
  toggleViewMode: PropTypes.func.isRequired,
  setSelectedId: PropTypes.func.isRequired,
};
