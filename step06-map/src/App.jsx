import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Ex04_ConditionRendering from '../../step05-state/src/components/Ex04_ConditionRendering'
// import './App.css'
import Ex05_MapkeyTest02 from '../../step04-components/src/map함수예제/Ex05_MapkeyTest02';
import Ex04_MapKeyTest01 from '../../step04-components/src/map함수예제/EX04_MapKeyTest01';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Ex04_MapKeyTest01/>
    {/* <Ex05_MapkeyTest02/> */}
    </>
  )
}

export default App
