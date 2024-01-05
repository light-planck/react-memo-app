import React, { useState } from "react";
import PropTypes from "prop-types";

export const Edit = ({
  items,
  selectedId,
  setLocalStorageValue,
  setSelectedId,
  toggleViewMode,
}) => {
  const [text, setText] = useState(selectedId ? items[selectedId].content : "");

  const handleEdit = () => {
    const newItems = [...items];
    newItems[selectedId] = {
      title: text.split("\n")[0],
      content: text,
    };
    setLocalStorageValue(newItems);
    toggleViewMode();
  };

  const handleDelete = () => {
    const newItems = [...items];
    newItems.splice(selectedId, 1);
    setLocalStorageValue(newItems);
    setSelectedId(null);
    toggleViewMode();
  };

  return (
    <div className="edit">
      <textarea
        className="edit-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="button-container">
        <button className="button-large" onClick={() => handleEdit()}>
          編集
        </button>
        <button className="button-small" onClick={() => handleDelete()}>
          削除
        </button>
      </div>
    </div>
  );
};

Edit.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedId: PropTypes.number,
  setLocalStorageValue: PropTypes.func.isRequired,
  setSelectedId: PropTypes.func.isRequired,
  toggleViewMode: PropTypes.func.isRequired,
};
