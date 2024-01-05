import React from "react";
import PropTypes from "prop-types";

export const List = ({
  items,
  viewMode,
  setLocalStorageValue,
  toggleViewMode,
  setSelectedId,
}) => {
  const handleAddItem = () => {
    const newMemo = "新規メモ";
    const newStoredValue = [...items, { title: newMemo, content: newMemo }];
    setLocalStorageValue(newStoredValue);
    setSelectedId(newStoredValue.length - 1);
    if (viewMode === "list") toggleViewMode();
  };

  const handleViewItem = (i) => {
    setSelectedId(i);
    if (viewMode === "list") toggleViewMode();
  };

  return (
    <div className="list">
      {items.map((item, i) => (
        <div className="list-item" key={i} onClick={() => handleViewItem(i)}>
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  viewMode: PropTypes.string.isRequired,
  setLocalStorageValue: PropTypes.func.isRequired,
  toggleViewMode: PropTypes.func.isRequired,
  setSelectedId: PropTypes.func.isRequired,
};
