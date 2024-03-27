import React from "react";
import "./home.scss";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { increment, selectCount } from "../lib/features/counter/counterSlice";

function Home() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(selectCount);

  return (
    <>
      <div className="row mb-1">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">A Hackathon Template</h5>
              <p className="card-text">
                A simple React template with Bootstrap and Font Awesome (free)
                loaded in for you.
              </p>
              <a
                href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
                target="_blank"
                className="card-link"
              >
                Bootstrap
              </a>
              <a
                href="https://fontawesome.com/icons"
                target="_blank"
                className="card-link"
              >
                Font Awesome Free
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-1">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Redux</h5>
              <p>With react-redux for the redux store.</p>
              <p>
                Number of clicks: {counter} <br />
                <button
                  className="btn btn-secondary"
                  onClick={() => dispatch(increment())}
                >
                  Click me
                </button>
              </p>
              <a
                href="https://react-redux.js.org/"
                target="_blank"
                className="card-link"
              >
                react-redux
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-1">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Routing</h5>
              <p>With React Router for page routing.</p>
              <a
                href="https://reactrouter.com/en/main"
                target="_blank"
                className="card-link"
              >
                react router
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
