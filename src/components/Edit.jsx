import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const Edit = ({
  memos,
  selectedId,
  setMemos,
  setSelectedId,
  toggleViewMode,
}) => {
  const [text, setText] = useState(
    memos.find((item) => item.id === selectedId).content
  );
  useEffect(() => {
    const newText = memos.find((item) => item.id === selectedId).content;
    setText(newText);
  }, [selectedId]);

  const handleEdit = () => {
    const newItems = memos.map((item) =>
      item.id === selectedId
        ? { id: selectedId, title: text.split("\n")[0], content: text }
        : item
    );
    setMemos(newItems);
    toggleViewMode();
  };

  const handleDelete = () => {
    const newItems = [...memos].filter((item) => item.id !== selectedId);
    setMemos(newItems);
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
  memos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedId: PropTypes.string,
  setMemos: PropTypes.func.isRequired,
  setSelectedId: PropTypes.func.isRequired,
  toggleViewMode: PropTypes.func.isRequired,
};
