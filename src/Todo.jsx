import { useState } from "react";
import "./App.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  // 入力欄に入力された値を取得する
  const onChangeTodoText = (e) => setInputText(e.target.value);
  // 未完了のTODOに追加
  const onClickAdd = () => {
    // 入力欄が空の場合は何もしない
    if (inputText === "") return;

    const newIncompleteTodos = [...incompleteTodos, inputText];
    setIncompleteTodos(newIncompleteTodos);
    setInputText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    // 未完了のTODOから指定された項目を削除
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    // 完了のTODOに指定された項目を追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    // 完了のTODOから指定された項目を削除
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    // 未完了のTODOに指定された項目を追加
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

  return (
    <>
      <InputTodo
        disabled={isMaxLimitIncompleteTodos}
        inputText={inputText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      {isMaxLimitIncompleteTodos && (
        <p style={{ color: "red" }}>注意：登録できるTODOは5個までです!!</p>
      )}
      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
