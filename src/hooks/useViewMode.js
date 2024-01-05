import { useCallback, useState } from "react";

export const useViewMode = () => {
  const [viewMode, setViewMode] = useState("list");
  const viewHeader = viewMode === "list" ? "一覧" : "編集";
  const toggleViewMode = useCallback(() => {
    setViewMode((viewMode) => (viewMode === "list" ? "edit" : "list"));
  }, []);

  return {
    viewMode,
    viewHeader,
    toggleViewMode,
  };
};
