import React from "react";

const styles = {
  backgroundColor: '#ffffe0',
  width: '400px',
  minHeight: '200px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px'
};

export const CompleteTodo = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div style={styles}>
    <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};