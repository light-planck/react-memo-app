import React, { useState } from "react";

import "./App.css";

import { List } from "./components/List";
import { Edit } from "./components/Edit";
import { useViewMode } from "./hooks/useViewMode";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const { viewMode, toggleViewMode } = useViewMode();
  const title = viewMode === "list" ? "一覧" : "編集";
  const [selectedId, setSelectedId] = useState("");
  const { storedValue: memos, setLocalStorageValue: setMemos } =
    useLocalStorage("memos", []);

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
            memos={memos}
            selectedId={selectedId}
            setMemos={setMemos}
            setSelectedId={setSelectedId}
            toggleViewMode={toggleViewMode}
          />
        )}
      </div>
    </div>
  );
}

export default App;
