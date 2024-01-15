import { v4 as uuidv4 } from "uuid";

import { useLocalStorage } from "./useLocalStorage";
import { useState } from "react";
import { useViewMode } from "./useViewMode";

export const useMemo = () => {
  const { storedValue: memos, setLocalStorageValue: setMemos } =
    useLocalStorage("memos", []);
  const [selectedId, setSelectedId] = useState("");
  const { viewMode, toggleViewMode } = useViewMode();

  const toggleMemo = (id) => {
    setSelectedId(id);
    if (viewMode === "list") toggleViewMode();
  };

  const addMemo = () => {
    const newMemo = {
      id: uuidv4(),
      title: "新規メモ",
      content: "新規メモ",
    };
    setMemos([...memos, newMemo]);

    toggleMemo(newMemo.id);
  };

  const editMemo = (id, text) => {
    setMemos(
      memos.map((memo) =>
        memo.id === id
          ? { id: id, title: text.split("\n")[0], content: text }
          : memo,
      ),
    );
  };

  const deleteMemo = (id) => {
    setMemos(memos.filter((memo) => memo.id !== id));
  };

  return {
    memos,
    selectedId,
    viewMode,
    toggleMemo,
    addMemo,
    editMemo,
    deleteMemo,
    toggleViewMode,
  };
};
