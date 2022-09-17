import React from "react";

export const IncompleteTodo = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          )// 関数に引数を渡すとその時点で関数内が実行されるため、アロー関数で定義することで任意のタイミングで関数を実行できる。
        })}
      </ul>
    </div>
  );
};