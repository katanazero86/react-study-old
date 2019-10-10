import React, {useState} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.scss';

import AppChild from './AppChild.js';
import About from "./About.js";
import About2 from "./About2.js";
import PersonComponent from "./class-base/PersonComponent";


export default function App() {

    // useState
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    function incrementCount() {
        setCount(count + 1);
    }

    function decrementCount() {
        setCount(count - 1);
    }

    return (
      <div className="app">
          <header>
              <p>ROUTE TEST</p>
              <Link to="/about">
                  <button>About</button>
              </Link>
              <Link to="/about2">
                  <button>About2</button>
              </Link>
          </header>
          <main>
              <p>
                  React useState Hooks
              </p>
              <div className="button-wrap">
                  <button onClick={incrementCount}> 값 증가 </button>
                  <button onClick={decrementCount}> 값 감소 </button>
                  <button onClick={() => {setFlag(!flag)}}>flag 변경</button>
              </div>
              <p>
                  결과 : {count} / {flag.toString()}
              </p>
              <div>
                  <AppChild msg="부모 props에서 준 Msg" />
              </div>
              <div>
                  <PersonComponent/>
              </div>
              <hr/>
              <Switch>
                  <Route exact path="/about" component={About} />
                  <Route exact path="/about2" component={About2} />
              </Switch>
          </main>
      </div>
    )
}
