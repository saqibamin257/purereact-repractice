import React from 'react';
import ReactDOM from 'react-dom';

//------------Example-1------------------//
//-----------Destructuring method---------//

// const Greetings = ({fname,lname}) =>{
//     return(
//     <h1>Hello {fname} {lname}!!</h1>
//     );
// }

// ReactDOM.render(
//     <Greetings fname="SAQIB" lname="AMIN"/>,
//     document.getElementById("root")
// );

//--------------Example-2--------------//
// const Greetings = (props) =>{
//     let msg = `Hello ${props.firstName} ${props.lastName}!`;
//     return(
//     <h1>{msg}</h1>
//     );
// }

// ReactDOM.render(
//     <Greetings firstName="SAQIB" lastName="Amin" />,
//     document.getElementById("root")
// );

//------------------Example-3---------------//
//-----------------PASS DATA FROM CHILD TO PARENT----------------//

const handleAction = (event) => {
    return(console.log("Child did = ", event));
}

const Parent = () => {
    return(
        <Child onAction = {handleAction} />
    );
}

const Child = ({onAction}) => {
    return(
        <button onClick={onAction} > Click </button>
    );
}

ReactDOM.render(
    <Parent/>,
    document.getElementById("root")
);

