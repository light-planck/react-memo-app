import React, { useState } from "react";

import "./App.css";

import { List } from "./components/List";
import { Edit } from "./components/Edit";
import { useViewMode } from "./hooks/useViewMode";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const { viewMode, toggleViewMode } = useViewMode();
  const [selectedId, setSelectedId] = useState("");
  const { storedValue: memos, setLocalStorageValue: setMemos } =
    useLocalStorage("memos", []);

  const title = viewMode === "list" ? "一覧" : "編集";
  const selectedMemo = memos.find((memo) => memo.id === selectedId);

  const editMemo = (id, text) => {
    setMemos(
      memos.map((memo) => (memo.id === id ? { ...memo, content: text } : memo))
    );
  };

  const deleteMemo = (id) => {
    setMemos(memos.filter((memo) => memo.id !== id));
  };

  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="app">
        <List
          memos={memos}
          viewMode={viewMode}
          setMemos={setMemos}
          toggleViewMode={toggleViewMode}
          setSelectedId={setSelectedId}
        />
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
}

export default App;
