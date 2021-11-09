import React, { useState } from 'react';
import './App.css';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === '') return
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  }

  const onKeyPressAdd = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onClickAdd();
    }
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    const targetTodoText = newIncompleteTodos[index]
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, targetTodoText];
    setCompleteTodos(newCompleteTodos);
  }

  const onClickUndo = (index) => {
    const newCompleteTodos = [...completeTodos];
    const targetTodoText = newCompleteTodos[index];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompleteTodos, targetTodoText]
    setIncompleteTodos(newIncompleteTodos);
  }

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} onKeyPress={onKeyPressAdd} disabled={incompleteTodos.length >= 5} />
      {incompleteTodos.length >= 5 && <p style={{ color: 'crimson', textAlign: 'center', fontWeight: 600 }}>todoは5件までです</p>}
      <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
      <CompleteTodos  todos={completeTodos} onClickUndo={onClickUndo} />
    </>
  );
}
