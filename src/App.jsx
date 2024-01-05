import React, { useState } from "react";

import "./App.css";

import { List } from "./components/List";
import { Edit } from "./components/Edit";
import { useViewMode } from "./hooks/useViewMode";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const { viewMode, viewHeader, toggleViewMode } = useViewMode();
  const [selectedId, setSelectedId] = useState(null);
  const { storedValue, setLocalStorageValue } = useLocalStorage("memos", []);

  return (
    <div className="container">
      <h1>{viewHeader}</h1>
      <div className="app">
        <List
          items={storedValue}
          setLocalStorageValue={setLocalStorageValue}
          toggleViewMode={toggleViewMode}
          setSelectedId={setSelectedId}
        />
        {viewMode === "edit" && (
          <Edit
            items={storedValue}
            selectedId={selectedId}
            setLocalStorageValue={setLocalStorageValue}
            setSelectedId={setSelectedId}
            toggleViewMode={toggleViewMode}
          />
        )}
      </div>
    </div>
  );
}

export default App;
