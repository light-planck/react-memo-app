import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useUser } from "./UserProvider";

export const Edit = ({ memo, onEdit, onDelete, toggleViewMode }) => {
  const { isLoggedIn } = useUser();

  const [text, setText] = useState(memo.content);
  useEffect(() => {
    setText(memo.content);
  }, [memo]);

  const handleEdit = () => {
    onEdit(memo.id, text);
    toggleViewMode();
  };

  const handleDelete = () => {
    onDelete(memo.id);
    toggleViewMode();
  };

  return (
    <div className="edit">
      <textarea
        className="edit-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {isLoggedIn && (
        <div className="button-container">
          <button className="button-large" onClick={handleEdit}>
            編集
          </button>
          <button className="button-small" onClick={handleDelete}>
            削除
          </button>
        </div>
      )}
    </div>
  );
};

Edit.propTypes = {
  memo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  toggleViewMode: PropTypes.func.isRequired,
};
