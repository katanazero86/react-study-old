import React, {useState} from 'react';
import './App.scss';


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
      </div>
    )
}
