import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const List = ({ setSelectedId, toggleViewMode }) => {
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

  const handleViewItem = useCallback((i) => {
    setSelectedId(i);
    toggleViewMode();
  }, []);

  return (
    <div className="list">
      {storedValue.map((item, i) => (
        <div key={i} onClick={() => handleViewItem(i)}>
          {item.title}
        </div>
      ))}
      <button onClick={handleAddItem}>+</button>
    </div>
  );
};

List.propTypes = {
  setSelectedId: PropTypes.func.isRequired,
  toggleViewMode: PropTypes.func.isRequired,
};
