import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
function App() {
  const nevigate = useNavigate();
  return (
    <div className="wrapper">
      <div className="innerwrapper">
        <h1>Please Select The Topics Below</h1>
      </div>

      <div onClick={() => nevigate("/Topic1")} className="innerwrapper">
        <h2>Politics</h2>
      </div>

      <div onClick={() => nevigate("/Topic2")} className="innerwrapper">
        <h2>Basic Computer</h2>
      </div>

      <div onClick={() => nevigate("/Topic3")} className="innerwrapper">
        <h2>React</h2>
      </div>

      <div onClick={() => nevigate("/Topic4")} className="innerwrapper">
        <h2>Random GK</h2>
      </div>
    </div>
  );
}

export default App;
