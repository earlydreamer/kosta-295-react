import React, { useState } from "react";

const Ex02_Form1 = () => {
    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");
    const inputName = (e) => {    
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        setUserName(e.target.value); //state를 변경하고 다시 렌더링)
    };

  return (
    <div>
      <h1>
        이름 : <input type="text" value={userName} name="userName" onChange={inputName} /><br/>
        나이 : <input type="text" value={userAge!==0?userAge:""} name="userAge" onChange={(e)=>{setUserAge(e.target.value)}} />
      </h1>
    </div>
  );
};

export default Ex02_Form1;
