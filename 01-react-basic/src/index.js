import React from 'react';
import ReactDOM from 'react-dom';


//-----------example-1---------//
// function HelloWorld(){
//     return(
//         <h1>Hello World Again!</h1>
//     );
// }

// ReactDOM.render(
// <HelloWorld/>,
// document.getElementById("root")
// );

//---------example-2----------//
//---------composition of components---------//

// function Hello(){
//     return(
//         <span>Hello</span>
//     );
// }

// function World(){
//     return(
//         <span>World!!</span>
//     );
// }

// function HelloWorld(){
//     return(
//         <h1><Hello/><World/></h1>
//     );
// }

// ReactDOM.render(
//     <HelloWorld/>,
//     document.getElementById("root")
// );

///--------------------------Exercise-3 Book Component------------------------------///
// create a book component which show Title, Author ,Rating and isbn number.


// function Book(){
//     return(
//         <div>
//         <div className="title">
//             THE TITILE
//         </div>
//         <div className="author">
//             THE AUTHOR
//         </div>
//         <ul>
//             <li>5 star</li>
//             <li>ISBN# 115544</li>
//         </ul>
//         </div>
//     );
// }

// ReactDOM.render(
//     <Book/>,
//     document.getElementById("root")
// );

///--------------------------Exercise-4 --Ternary Operation Logic----------------------------///
//Return the appropriate JSX from this component so that when username is undefined or null,
//it renders “Not logged in”. When username is a string, render “Hello, username”.

// function UserName(){
//     let username = "saqib";
//     //let username = undefined;
//     //let username = null;
//     return(
//         <h1>
//             {username ? `Hello ${username}`:'Not LoggedIn'} 
//         </h1> 
//     );
// }

// ReactDOM.render(
//     <UserName/>,
//     document.getElementById("root")
// );

//-----------------Example-5 ------
//-----------------Empty Tags & fragments---------//


// function NameCells(){
//     return(
//         <>
//         <td>First Name</td>
//         <td>Last Name</td>
//         </>
//     );
// }

// function Biography() {
//     return(
//         <table>
//             <tbody>
//                 <tr>
//                     <NameCells/>
//                 </tr>
//                 <tr>
//                     <td>Saqib</td>
//                     <td>Amin</td>
//                 </tr>
//             </tbody>
//         </table>
//     );
// }

// ReactDOM.render(
//     <Biography/>,
//     document.getElementById("root")
// );

//----------------Example-6-------------//
//--------If in JSX---------------------//

//1- by using ternary operators.

// function ValidIndicatiors(){
//     const isValid=true;
//     return(
//         <span>{isValid?'VALID':'INVALID'}</span>
//     );
// }

// ReactDOM.render(
//     <ValidIndicatiors/>,
//     document.getElementById("root")
// );

//2- by using boolean && operator
function ValidIndicatiors(){
    const isValid = false;
    return(        
        <span>
            
            {isValid && "VALID"}
            {!isValid && "INVALID"}        
        </span>
    );
}

ReactDOM.render(
    <ValidIndicatiors/>,
    document.getElementById("root")
);