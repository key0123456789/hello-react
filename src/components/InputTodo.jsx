import React from 'react';

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, onKeyPress, disabled } = props;

  return (
    <div className="input-area">
      <input disabled={disabled} placeholder="TODOを入力" value={todoText} onChange={onChange} onKeyPress={onKeyPress} />
      <button disabled={disabled} onClick={onClick}>追加</button>
    </div>
  );
};