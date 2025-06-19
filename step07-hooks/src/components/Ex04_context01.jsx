import React, { useState, createContext } from "react";
import Child01 from "./Child01";

export const GlobalContext = createContext();

const Ex04_context01 = () => {
  const [list, setList] = useState([
    { id: 1, name: "test" },
    { id: 2, name: "test2" },
    { id: 3, name: "test3" }
  ]);

  const btnClick01 = () => {
    alert("Button Clicked!");
  };

  const btnClick02 = () => {
    alert("Button Clicked!");
  };

  return (
    <GlobalContext.Provider value={{list, setList, btnClick01, btnClick02}}>
      <div style={{border:"1px solid green", padding: "10px", margin: "10px"}}>
        {
          list.map((user) => <div key={user.id}> {user.id} : {user.name} </div>)
        }
        <Child01/>
      </div>
    </GlobalContext.Provider>
  );
};

export default Ex04_context01;
