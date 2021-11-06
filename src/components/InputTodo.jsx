import React from 'react';

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, onKeyPress } = props;

  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} onKeyPress={onKeyPress} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};