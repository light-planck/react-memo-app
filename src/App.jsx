import React, { useState } from "react";

import "./App.css";

import { List } from "./components/List";
import { Edit } from "./components/Edit";
import { useViewMode } from "./hooks/useViewMode";

function App() {
  const { viewMode, viewHeader, toggleViewMode } = useViewMode();
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="container">
      <h1>{viewHeader}</h1>
      <div className="app">
        <List setSelectedId={setSelectedId} toggleViewMode={toggleViewMode} />
        {viewMode === "edit" && (
          <Edit
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            toggleViewMode={toggleViewMode}
          />
        )}
      </div>
    </div>
  );
}

export default App;
