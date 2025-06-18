import React from 'react';
import './Ex01_count.css';
import { useState } from 'react';

let i = 0;
const Ex01_Count = () => {
    const [count, setCount] = useState(0);
    const minus = () => {
        setCount(count - 1);
        i--;
        console.log("Minus button clicked");
    };

    const plus = () => {
        setCount(count + 1);
        i++;
        console.log("Plus button clicked");
    };

    return (
        <div className ="ex01-count">
            <button onClick={minus}>-</button>
            <span>{count}/{i}</span>
            <button onClick={plus}>+</button>
            <p>State Count Test 1</p>
        </div>
    );
};

export default Ex01_Count;