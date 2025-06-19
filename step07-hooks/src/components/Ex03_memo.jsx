import React from 'react';

const Ex03_memo = () => {
    const [list,setList] = React.useState([1,2,3,4,5,6,7,8,9,10]);
    const [str,setStr] = React.useState("total");
    
    
    // const getAddResult = () => {
    //     console.log("getAddResult 호출됨");
    //     let result = 0;
    //     list.forEach((item) => {
    //         result += item;
    //     });
    //     return result;
    // };

    const memoizedTotal = React.useMemo(() => {
        console.log("useMemo 호출됨");
        let result = 0;
        list.forEach((item) => {
            result += item;
        });
        return result;
    },[list]); // list가 변경될 때만 재계산


    return (
        <div>
            <h3>useMemo 예제</h3>
            {
                list.map((item, index) => (
                    <h6 key={index}>{item}</h6>
                ))
            }
            <p>{str}: {memoizedTotal}</p>
            {/* <p>{str}: {getAddResult()}</p> */}
            <button onClick={() => {
                setList([10,...list]);
            }}>
                숫자추가                    
            </button>
            <button onClick={() => {
                setStr("변경된 문자열");
            }}>
                텍스트변경
            </button>
        </div>
    );
};

export default Ex03_memo;