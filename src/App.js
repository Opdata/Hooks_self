import React, { useState } from "react";
import "./styles.css";

const useInput = (init, valid) => {
  const [value, setValue] = useState(init);
  const onChange = e => {
    const {
      target: { value }
    } = e;
    let update = true;
    if (typeof valid === "function") {
      update = valid(value);
    }
    if (update) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const Maxlength = value => value.length <= 10;
  const name = useInput("Mr.", Maxlength);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
