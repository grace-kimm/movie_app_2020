import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("potato")
); // render 할 때는 1개(App)만 Render 해야 함 -> Potato는 App.js 안에 넣어주기
