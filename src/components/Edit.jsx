import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const Edit = ({
  items,
  selectedId,
  setLocalStorageValue,
  setSelectedId,
  toggleViewMode,
}) => {
  const [text, setText] = useState(
    items.find((item) => item.id === selectedId).content
  );
  useEffect(() => {
    const newText = items.find((item) => item.id === selectedId).content;
    setText(newText);
  }, [selectedId]);

  const handleEdit = () => {
    const newItems = items.map((item) =>
      item.id === selectedId
        ? { id: selectedId, title: text.split("\n")[0], content: text }
        : item
    );
    setLocalStorageValue(newItems);
    toggleViewMode();
  };

  const handleDelete = () => {
    const newItems = [...items].filter((item) => item.id !== selectedId);
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
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedId: PropTypes.string,
  setLocalStorageValue: PropTypes.func.isRequired,
  setSelectedId: PropTypes.func.isRequired,
  toggleViewMode: PropTypes.func.isRequired,
};
