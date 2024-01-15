import { v4 as uuidv4 } from "uuid";

import { useLocalStorage } from "./useLocalStorage";

export const useMemos = () => {
  const { storedValue: memos, setLocalStorageValue: setMemos } =
    useLocalStorage("memos", []);

  const addMemo = () => {
    const newMemo = {
      id: uuidv4(),
      title: "新規メモ",
      content: "新規メモ",
    };
    setMemos([...memos, newMemo]);
    return newMemo.id;
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
    addMemo,
    editMemo,
    deleteMemo,
  };
};
