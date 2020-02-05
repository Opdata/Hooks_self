import React, { useState, useEffect } from "react";

const UpdateTitle = init => {
  const [title, setTitle] = useState(init);
  const Update = () => {
    const htmltitle = document.querySelector("title");
    htmltitle.innerText = title;
  };
  useEffect(Update, [title]);
  return setTitle;
};

const App = () => {
  const title = UpdateTitle("Loading");
  console.log(title);
  setTimeout(() => title("home"), 5000);
  return (
    <div className="App">
      <h1>hi</h1>
    </div>
  );
};

export default App;
