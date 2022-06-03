import React, { useState } from "react";
import Content from "./Components/Content/Content";
import Drawer from "./Components/Drawer/Drawer";
import "./App.css";
const App = () => {
  const [minimized, setMinimized] = useState(false);
  return (
    <div className={`app ${minimized ? "app-minimize" : ""}`}>
      <Drawer minimized={minimized} setMinimized={setMinimized} />
      <Content />
    </div>
  );
};

export default App;
