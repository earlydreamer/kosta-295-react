import React, { useEffect } from "react";
import Timer from "./Timer"; // Timer 컴포넌트가 별도로 정의되어 있다고 가정합니다.

const Ex02_effect02 = () => {
  const [showTimer, setShowTimer] = React.useState(false);

  return (
    <div>
      <h3> useEffect 타이머 예제 </h3>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "타이머 숨기기" : "타이머 보이기"}
      </button>
    </div>
  );
};

export default Ex02_effect02;
