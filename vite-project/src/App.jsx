import { useContext, useState } from "react";
import "./App.css";
import Content from "./components/content";
import Context from "./components/Context";

function App() {
  return (
    <div>
      <Context>
        <Content />
      </Context>
    </div>
  );
}

export default App;
