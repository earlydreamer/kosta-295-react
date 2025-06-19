import React, { useContext } from 'react';
import { GlobalContext } from './Ex04_context01';

const Child03 = () => {
    const { btnClick02 } = useContext(GlobalContext);
    return (
        <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
            <h3>Child03 Component</h3>
            <button onClick={btnClick02}>Click Me</button>
        </div>
    );
};

export default Child03;