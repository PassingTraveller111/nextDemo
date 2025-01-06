// pages/counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import counterActionsType from "../store/actions/counterActions";

const CounterPage = () => {
    const count = useSelector((state) => {
        return state.rootReducer.counterReducer.count;
    });
    const dispatch = useDispatch();
    const increment = () => {
        dispatch({ type: counterActionsType.INCREMENT });
    };
    const decrement = () => {
        dispatch({ type: counterActionsType.DECREMENT });
    };
    const reset = () => {
        dispatch({ type: counterActionsType.RESET });
    };
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}

export default CounterPage;