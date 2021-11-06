import React, { useState } from 'react';
import './App.css';
import { InputTodo } from './components/InputTodo';

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
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} onKeyPress={onKeyPressAdd} />
      <div className="input-area">
        <p>未完了のTODO</p>
        <ul>
          { incompleteTodos.map((todo ,index) => {
            return (
              <li key={todo}>
                <div className="list-text">{ todo }</div>
                <div className="list-buttons">
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="input-area">
        <p>完了のTODO</p>
        <ul>
          { completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-text">{todo}</div>
                <div className="list-buttons">
                  <button onClick={() => onClickUndo(index)}>戻す</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
}
