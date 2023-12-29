import React from "react";

export const Edit = () => {
  return (
    <div className="edit">
      <textarea className="edit-textarea" />
      <div className="button-container">
        <button className="large-button">編集</button>
        <button className="small-button">削除</button>
      </div>
    </div>
  );
};
