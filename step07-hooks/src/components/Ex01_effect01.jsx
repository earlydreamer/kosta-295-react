import React, { use, useEffect } from 'react';

const Ex01_effect01 = () => {
    const [count, setCount] = React.useState(0);  
    useEffect(() => {
        console.log('렌더링 시에');   
    });
    const [str,setStr] = React.useState("");    
    useEffect(() => {
        console.log(`최초 임포트 시에만: `);
    }, []); // 최초 한번에만 실행하겠다


    useEffect(() => {
        console.log(`count가 변경될 때마다: ${count}`); 
    }, [count]); // count가 변경될 때마다 실행



    return (
        <div>
            <h3> useEffect test </h3>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        
            <h3> str:{str}</h3>
            <button onClick={() => setStr("set Str ... ")}>Set String</button>

        </div>
    );
};

export default Ex01_effect01;