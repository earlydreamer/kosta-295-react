import React, { useRef, useState } from 'react';

// let countLet = 0;  
// 변수를 전역변수로 선언하면 렌더링과 상관없이 값이 유지되지만 컴포넌트간 값이 공유된다.


const Ref03 = () => {
    console.log("Ref03 component call.....");
    const countRef = useRef(0); //값이 변경되어도 리랜더링되지 않는다.
    let countLet = 0; //지역변수로 선언 시 렌더링될 때마다 초기화된다.

    const [render, setRender] =useState(0);

    const letCheck = ()=>{
        countLet++;
        console.log("countLet = " + countLet);
    }

    const refCheck=()=>{
        countRef.current = countRef.current +1;
        console.log("countRef.current = " + countRef.current);
    }
    return (
        <div>
            <h3> Ref 와 let  비교 </h3>
            <p>let : {countLet} 
            <button onClick={letCheck}>letUp</button>
            </p>

            <p>ref : {countRef.current}
            <button onClick={refCheck}>refUp</button>
            </p>
            <button onClick={()=>setRender(render+1)}>리랜더링</button>
        </div>
    );
};

export default Ref03;