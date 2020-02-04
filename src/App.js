import React, { useState, useEffect } from "react";

const App = () => {
  const Hello = () => {
    console.log("hello");
  };
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  useEffect(Hello);
  /*
    useEffect(callback, deps)
    본래 기능은 componentDidmount, componentWillUnmount, componentDidupdate 이다.
    dpes 에 리스트가 들어가면 그 리스트의 값이 변화가 있을때만 useEffect 실행된다.
    ex) useEffect(Hello, [number1]) // number1 의 값 변화가 있을때만 실행된다.

    그냥 실행방지는
    useEffect(Hello, [])
  */
  return (
    <div className="App">
      <div>hi</div>
      <button onClick={() => setNumber1(number1 + 1)}>{number1}</button>
      <button onClick={() => setNumber2(number2 + 1)}>{number2}</button>
    </div>
  );
};

export default App;
