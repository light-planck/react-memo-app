import React from "react";

import "./App.css";

import { List } from "./components/List";
import { Edit } from "./components/Edit";
import { useViewMode } from "./hooks/useViewMode";
import { useLocalStorage } from "./hooks/userLocalStorage";

function App() {
  const { viewMode, viewHeader, toggleViewMode } = useViewMode({
    modes: ["list", "edit"],
    headers: ["一覧", "編集"],
  });

  const { storedValue: memos, setValue } = useLocalStorage("memos", []);

  return (
    <div className="container">
      <h1>{viewHeader}</h1>
      <div className="app">
        <List
          items={memos}
          toggleViewMode={toggleViewMode}
          setValue={setValue}
        />
        {viewMode === "edit" && <Edit />}
      </div>
    </div>
  );
}

export default App;
