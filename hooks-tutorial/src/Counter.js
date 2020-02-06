// useReducer를 활용한 Counter 예제

import React, { useReducer } from "react";

function reducer(state, action) {
  //action.type 에 따라 다른 작업 수행

  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않으면 기존 상태 반환
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>현재 카운터 값{state.value}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;

/*
useState를 활용한 Counter 예제

import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>현재 카운트 수 : {value}</p>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setValue(value + -1);
        }}
      >
        -1
      </button>
    </div>
  );
};

export default Counter;
*/
