export const CompleteTodos = (props) => {
  const {todos, onClickUndo} = props;
  return (
    <div className="input-area">
    <p>完了のTODO</p>
    <ul>
      { todos.map((todo, index) => {
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
  )
}