import React from "react";
import PropTypes from "prop-types";
import { useUser } from "./UserProvider";

export const List = ({ memos, onAdd, toggleMemo }) => {
  const { isLoggedIn } = useUser();

  const handleAddItem = () => {
    const id = onAdd();
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
      {isLoggedIn && (
        <button className="button-add" onClick={handleAddItem}>
          +
        </button>
      )}
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
  onAdd: PropTypes.func.isRequired,
  toggleMemo: PropTypes.func.isRequired,
};
