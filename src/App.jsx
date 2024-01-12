import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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

  const addMemo = () => {
    const newMemo = {
      id: uuidv4(),
      title: "新規メモ",
      content: "新規メモ",
    };
    setMemos([...memos, newMemo]);

    toggleMemo(newMemo.id);
  };

  const editMemo = (id, text) => {
    setMemos(
      memos.map((memo) =>
        memo.id === id
          ? { id: id, title: text.split("\n")[0], content: text }
          : memo
      )
    );
  };

  const toggleMemo = (id) => {
    setSelectedId(id);
    if (viewMode === "list") toggleViewMode();
  };

  const deleteMemo = (id) => {
    setMemos(memos.filter((memo) => memo.id !== id));
  };

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
}

export default App;
