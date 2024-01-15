import React from "react";

import "./App.css";

import { List } from "./components/List";
import { Edit } from "./components/Edit";
import { useMemo } from "./hooks/useMemo";

const App = () => {
  const {
    memos,
    selectedId,
    viewMode,
    toggleMemo,
    addMemo,
    editMemo,
    deleteMemo,
    toggleViewMode,
  } = useMemo();

  const title = viewMode === "list" ? "一覧" : "編集";
  const selectedMemo = memos.find((memo) => memo.id === selectedId);

  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="app">
        <List memos={memos} addMemo={addMemo} toggleMemo={toggleMemo} />
        {viewMode === "edit" && (
          <Edit
            memo={selectedMemo}
            editMemo={editMemo}
            deleteMemo={deleteMemo}
            toggleViewMode={toggleViewMode}
          />
        )}
      </div>
    </div>
  );
};

export default App;
