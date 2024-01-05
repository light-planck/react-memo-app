import { useState } from "react";

export const useViewMode = () => {
  const [viewMode, setViewMode] = useState("list");
  const viewHeader = viewMode === "list" ? "一覧" : "編集";
  const toggleViewMode = () => {
    setViewMode((nowMode) => (nowMode === "list" ? "edit" : "list"));
  };

  return {
    viewMode,
    viewHeader,
    toggleViewMode,
  };
};
