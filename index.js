import React, { memo, useCallback, useState, useEffect, useRef } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import moment from 'moment';
import './style.css';

const App = () => {
  const [count, setCount] = useState(10);
  const countRef = useRef(null);
  const [clickstate, setClickstate] = useState(false);

  useEffect(() => {
    if (count <= 0) {
      setClickstate(false);
      clearTimeout(countRef.current);
      setCount(10);
    } else {
      if (clickstate) handleDecremnetfun();
    }
  }, [count]);

  const handleDecremnet = () => {
    countRef.current = setInterval(() => {
      if (count >= 0) {
        setCount((x) => x - 1);
      } else {
        console.log('less');
        clearInterval(countRef.current);
      }
    }, 1000);
  };

  const handleDecremnetfun = () => {
    countRef.current = setTimeout(() => {
      setCount((x) => x - 1);
    }, 1000);
    setClickstate(true);
  };

  return (
    <>
      <div>
        <p>{count}</p>
        <button disabled={clickstate} onClick={handleDecremnetfun}>
          Send otp
        </button>
      </div>
    </>
  );
};

render(<App />, document.getElementById('root'));
