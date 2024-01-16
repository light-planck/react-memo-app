import React, { useState } from "react";

import "./App.css";

import { AuthButton } from "./components/AuthButton";
import { Edit } from "./components/Edit";
import { List } from "./components/List";
import { useMemos } from "./hooks/useMemos";
import { useViewMode } from "./hooks/useViewMode";
import { useUser } from "./hooks/useUser";

const App = () => {
  const { memos, addMemo, editMemo, deleteMemo } = useMemos();
  const { isLoggedIn } = useUser();

  const { viewMode, toggleViewMode } = useViewMode();
  const [selectedId, setSelectedId] = useState("");
  const toggleMemo = (id) => {
    setSelectedId(id);
    if (viewMode === "list") toggleViewMode();
  };

  const title = isLoggedIn ? "ログイン済" : "未ログイン";
  const selectedMemo = memos.find((memo) => memo.id === selectedId);

  return (
    <>
      <h1 className="title">{title}</h1>
      <div className="container">
        <AuthButton />
        <div className="app">
          <List memos={memos} onAdd={addMemo} toggleMemo={toggleMemo} />
          {viewMode === "edit" && (
            <Edit
              memo={selectedMemo}
              onEdit={editMemo}
              onDelete={deleteMemo}
              toggleViewMode={toggleViewMode}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default App;
