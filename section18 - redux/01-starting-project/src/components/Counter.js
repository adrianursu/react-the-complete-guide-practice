import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const [digit, setDigit] = useState(0);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseBy5Handler = () => {
    dispatch(counterActions.increase(Number(digit)));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseBy5Handler}>Increase by {digit}</button>
        <button onClick={decrementHandler}>Decrement</button>
        <input
          onChange={(e) => {
            setDigit(e.target.value);
          }}
        />
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
