import React, { useState } from "react";

const content = [
  {
    name: "section1",
    content: "The text of the section1"
  },
  {
    name: "section2",
    content: "The text of the section2"
  }
];

const useInput = (init, tabs) => {
  const [index, setindex] = useState(init);
  return {
    contentText: tabs[index],
    changeitem: setindex
  };
};

const App = () => {
  const { contentText, changeitem } = useInput(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button
          onClick={() => {
            changeitem(index);
          }}
        >
          {section.name}
        </button>
      ))}
      <div>{contentText.content}</div>
    </div>
  );
};

export default App;
