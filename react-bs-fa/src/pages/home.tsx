import React from "react";
import logo from "./logo.svg";
import "./home.scss";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { increment, selectCount } from "../lib/features/counter/counterSlice";

function Home() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(selectCount);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A simple create react app with Bootstrap, Font Awesome free and
          React-redux.
        </p>
        <p>
          Simple store demo - Clicked {counter} times <br />
          <button onClick={() => dispatch(increment())}>Click</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
