import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Ex01_effect01 from "./components/Ex01_effect01";
import Ex02_effect02 from "./components/Ex02_effect02";
import Ex03_memo from "./components/Ex03_memo";
import Ref01 from "./components/Ref01";
//import './App.css'
import Ref02 from "./components/Ref02";
import Ref03 from "./components/Ref03";
import Ex04_context01 from "./components/Ex04_context01";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Ex04_context01 />
      {/* <Ref04 /> */}
      {/* <Ref03/>
      <Ref03/>  */}
      {/* <Ref02/> */}
      {/* <Ref01/> */}
      {/* <Ex03_memo/> */}
      {/* <Ex02_effect02/> */}
      {/* <Ex01_effect01/> */}
    </>
  );
}

export default App;
