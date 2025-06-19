import React from 'react';
import Child03 from './Child03';

const Child02 = () => {
    return (
        <div style={{border: "1px solid blue", padding: "10px", margin: "10px"}}>
            <h3>Child02 Component</h3>
            <Child03/>
        </div>
    );
};

export default Child02;