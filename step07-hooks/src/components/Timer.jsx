import React, { useEffect } from 'react';

const Timer = () => {
    
    useEffect(() => {
        console.log('타이머가 시작되었습니다.');

        const timer = setInterval(() => {
            console.log('1초마다 실행됩니다.');
        }, 1000);

        return () => {
            console.log('타이머가 종료되었습니다.');
            clearInterval(timer); // clearInterval을 호출하여 타이머를 정리합니다.
        };
    }, []);

    return (
        <div>
            <h2>타이머 컴포넌트</h2>
            <p>타이머가 실행 중입니다.</p>
        </div>
    );
};

export default Timer;
