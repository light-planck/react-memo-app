import { useState } from "react";

export const useViewMode = ({ modes, headers }) => {
  const [viewMode, setViewMode] = useState(modes[0]);
  const isDefault = viewMode === modes[0];
  const viewHeader = isDefault ? headers[0] : headers[1];
  const toggleViewMode = () => {
    setViewMode(isDefault ? modes[1] : modes[0]);
  };

  return {
    viewMode,
    viewHeader,
    toggleViewMode,
  };
};
