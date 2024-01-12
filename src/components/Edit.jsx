import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const Edit = ({ memo, editMemo, deleteMemo, toggleViewMode }) => {
  const [text, setText] = useState(memo.content);

  useEffect(() => {
    setText(memo.content);
  }, [memo]);

  const handleEdit = () => {
    editMemo(memo.id, text);
    toggleViewMode();
  };

  const handleDelete = () => {
    deleteMemo(memo.id);
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
        <button className="button-large" onClick={handleEdit}>
          編集
        </button>
        <button className="button-small" onClick={handleDelete}>
          削除
        </button>
      </div>
    </div>
  );
};

Edit.propTypes = {
  memo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  editMemo: PropTypes.func.isRequired,
  deleteMemo: PropTypes.func.isRequired,
  toggleViewMode: PropTypes.func.isRequired,
};
