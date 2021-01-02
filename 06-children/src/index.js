import React from 'react';
import ReactDOM from 'react-dom';




//uncomment each example one by one to see result in browser. 


//------------Example-1(a)-----------------//
//---Icon Button Component
//---show text inside button.
//-- normal way

// function IconButton(){
//     return(
//      <i className="fa fa-heart like-button">do the things</i>    
//     );
// }

// ReactDOM.render(
//     <IconButton/>,
//     document.getElementById('root')
// )



//------------Example-1(b)-----------------//
//---create Icon Button  resuable Component, so that what ever argument pass to the function it displays in button
//-- by using children

// const IconButton = ({children}) =>{
//     return(
//      <i className="fa fa-heart like-button">{children}</i>    
//     );
// }

// ReactDOM.render(
//     <IconButton>Do THE THINGS</IconButton>,
//     document.getElementById('root')
//  )


//-------------Different Types of Children-------------//
//(a) show all children

// function AllChildren({children}){
//     return(
//         <div>
//             {children}
//         </div>       
//     );
// }

// ReactDOM.render(
//     <AllChildren>
//         <p>1st child</p>
//         <p>2nd child</p>
//         <p>3rd child</p>
//     </AllChildren>,
//     document.getElementById('root')
// );

//(b) first child only and last child

const AllChildren=({children})=>{
    const item = React.Children.toArray(children);
    return(
        <div>
            <span>first child:{item[0]}</span>
            <span>last child:{item[item.length-1]}</span>
        </div>       
    );
}

ReactDOM.render(
    <AllChildren>
        <p>1st child</p>
        <p>2nd child</p>
        <p>3rd child</p>
    </AllChildren>,
    document.getElementById('root')
);
