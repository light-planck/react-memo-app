import "./App.css";
import React from "react";
import { List } from "./components/List";
import { Edit } from "./components/Edit";
import { useViewMode } from "./hooks/useViewMode";

function App() {
  const { viewMode, viewHeader, toggleViewMode } = useViewMode({
    modes: ["list", "edit"],
    headers: ["一覧", "編集"],
  });

  return (
    <div className="container">
      <h1>{viewHeader}</h1>
      <div className="app">
        <List
          items={[
            { title: "memo1", content: "memo1\nhello\n" },
            { title: "memo2", content: "memo2\nworld\n" },
          ]}
          toggleViewMode={toggleViewMode}
        />
        {viewMode === "edit" && <Edit />}
      </div>
    </div>
  );
}

export default App;
