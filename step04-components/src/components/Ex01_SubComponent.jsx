import React from "react";

let num = 123;
let name = "test-name";

const Ex01_SubComponent = () => { //Component
  return (
    <>
      sub componentc
      <br />
      num:{num}
      <br />
      name:{name}
      <br />
    </>
  );
};

export default Ex01_SubComponent;
export { num, name }; // export variables to be used in other components    
