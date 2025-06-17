import React from 'react';

const Ex01_SubComponent2 = () => {//import할때  Ex01_SubComponent2 로 사용, 이름 변경 가능
    return (
        <div>
            sub2 component
        </div>
    );
};

export const Ex01_Subcomponent3 = () => { //import할때  {Ex01_subComponent3} 로 사용
    return (
        <>
            sub3 component
        </>
    );
}

export default Ex01_SubComponent2;