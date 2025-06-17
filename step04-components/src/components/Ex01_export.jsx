import React from 'react';
import { num, name } from './Ex01_SubComponent'; // named import
import Ex01_Sub from './Ex01_SubComponent';
import Ex01_Sub2 from './Ex01_SubComponent2';
import { Ex01_Subcomponent3 } from './Ex01_SubComponent2'; // named import

const Ex01_export = () => {
    return (
        <>
            <Ex01_Sub />
            <Ex01_Sub2 />
            <Ex01_Subcomponent3 />
            <hr/>
            num: {num} <br />
            name: {name} <br />
            {/* Accessing exported variables from Ex01_SubComponent */} 
        </>
    );
};

export default Ex01_export;