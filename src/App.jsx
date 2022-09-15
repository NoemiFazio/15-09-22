import "./App.css";

import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

export const CounterContext = createContext(0);

function App() {
  const [state, setState] = useState(0);

  return (
    // <CounterContext.Provider value={{ state, setState }}>
    <CounterContext.Provider value={{ state, setState }}>
      <Navbar />
      <Outlet />
    </CounterContext.Provider>
  );
}

export default App;
