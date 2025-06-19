import React, { useContext } from 'react';
import { GlobalContext } from "./Ex04_context01";
import Child02 from "./Child02";

const Child01 = () => {
  const {list, setList, btnClick01} = useContext(GlobalContext);
  const addList = () => {
    setList([...list, {id: list.length + 1, name: `test${list.length + 1}`}]);
  }
  
  return (
    <div style={{border: "1px solid red", padding: "10px", margin: "10px"}}>
      <h3>Child01 Component</h3>
      <button onClick={btnClick01}>Click Me</button>
      <button onClick={addList}>추가</button>
      <hr/>
      <Child02/>
    </div>
  );
};

export default Child01;