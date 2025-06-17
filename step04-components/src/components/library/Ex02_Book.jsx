import React from 'react';
// const Book = (props) => {
//     return (
//         <div>
//             <h1>{props.bookName}</h1>
//             <h3>This is the book component.</h3>
//             <h3>This book is {props.page} pages.</h3>
//         </div>
//     );
// };


//구조분해할당으로 Props 받아오기
const Book = ({ bookName="Unknown Book", page=0 }) => {
    return (
        <div>
            <h1>{bookName}</h1>
            <h3>This is the book component.</h3>
            <h3>This book is {page} pages.</h3>
        </div>
    );
};




export default Book;