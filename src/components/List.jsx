import React from "react";
import PropTypes from "prop-types";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const List = ({ toggleViewMode, setSelectedId }) => {
  const { storedValue, setLocalStorageValue } = useLocalStorage("memos", []);

  const handleAddItem = () => {
    const newMemo = "新規メモ";
    const newStoredValue = [
      ...storedValue,
      { title: newMemo, content: newMemo },
    ];
    setLocalStorageValue(newStoredValue);
    setSelectedId(newStoredValue.length - 1);
    toggleViewMode();
  };

  const handleViewItem = (i) => {
    setSelectedId(i);
    toggleViewMode();
  };

  return (
    <div className="list">
      {storedValue.map((item, i) => (
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
  toggleViewMode: PropTypes.func.isRequired,
  setSelectedId: PropTypes.func.isRequired,
};
