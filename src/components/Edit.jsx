import React, { useState } from "react";
import PropTypes from "prop-types";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const Edit = ({ selectedId, setSelectedId, toggleViewMode }) => {
  const { storedValue, setLocalStorageValue } = useLocalStorage("memos", []);
  const [text, setText] = useState(
    selectedId ? storedValue[selectedId].content : ""
  );

  const handleEdit = () => {
    const newItems = [...storedValue];
    newItems[selectedId] = {
      title: text.split("\n")[0],
      content: text,
    };
    setLocalStorageValue(newItems);
    toggleViewMode();
  };

  const handleDelete = () => {
    const newItems = [...storedValue];
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
        <button className="large-button" onClick={() => handleEdit()}>
          編集
        </button>
        <button className="small-button" onClick={() => handleDelete()}>
          削除
        </button>
      </div>
    </div>
  );
};

Edit.propTypes = {
  selectedId: PropTypes.number,
  setSelectedId: PropTypes.func.isRequired,
  toggleViewMode: PropTypes.func.isRequired,
};
