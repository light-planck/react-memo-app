import { useState } from "react";

export const useViewMode = () => {
  const [viewMode, setViewMode] = useState("list");
  const toggleViewMode = () => {
    setViewMode((nowMode) => (nowMode === "list" ? "edit" : "list"));
  };

  return {
    viewMode,
    toggleViewMode,
  };
};
