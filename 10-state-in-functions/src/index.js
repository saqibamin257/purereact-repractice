import React,{useState} from 'react';
import ReactDOM from 'react-dom';


//----------------Example-1--------------------//
//---create ES-6 functional component by using useState for storing states.
//---useState takes initial value, and returns array of two things, first current state value, second function to change state.
//---here clicked is storing current state and setClicked is a function to change state.


// const OneTimeButton = ({onClick}) =>{
    
//     //state
//     const [clicked, setClicked] = useState(false);


//     const handleClick=()=>{        
//             onClick();
//             setClicked(true);
//         }

//     return(
//         <div>
//             <button onClick={handleClick} disabled={clicked}>Click ME!</button>
//         </div>
//     );
// }

// ReactDOM.render(
//     <OneTimeButton onClick={()=>alert("hi")}/>,
//     document.getElementById("root")
// );


//---------------Example-2--------------------//
//------------Step Tracker--------------//
//---create addCount function and call on button click----------//


// const StepTracker =()=>{
//     const [count, setCount] = useState(0);

//     const addCount =()=>{
//         setCount(count=>count+1);
//     }

//     return(
//         <div>
//             <button onClick={addCount}>Add</button>
//             Count:{count}
//         </div>
//     );
// }

// ReactDOM.render(
//     <StepTracker/>,
//     document.getElementById("root")
// );

//---------------Example-3--------------------//
//------------Step Tracker--------------//
//---  call and write function directly on button click----------//


// const StepTracker =()=>{
//     const [count, setCount] = useState(0);   

//     return(
//         <div>
//             <button onClick={()=>setCount(count=>count+1)}>Add</button>
//             Count:{count}
//         </div>
//     );
// }

// ReactDOM.render(
//     <StepTracker/>,
//     document.getElementById("root")
// );


//-----------Example-4-------------------//
//-----------State as Arrays-----------//

// const RandomList =()=>{
//     const [items, setItems] = useState([]);

//     const addItem=()=>{
//         setItems([
//             ...items,
//             {
//                 id:items.length,
//                 value:Math.random()*100
//             }
//         ]);
//     }
    
//     return(
//         <>
//         <button onClick={addItem}>Add a number</button>
//         <ul>
//             {
//                 items.map( (item) =>(
//                     <li key={item.id}>{item.value}</li>
//                 ))
//             }
//         </ul>
//         </>

//     );
// }

// ReactDOM.render(
//     <RandomList/>,
//     document.getElementById("root")
// );

//-----------Example-4-------------------//
//-------------------------State as an Object------------------------//

const MultiCounter =()=>{
 
    const [counts, setCount] = useState({
     countA:0,
     countB:0
 })

 const incA=()=>{
     setCount(counts =>({
         ...counts,
         countA:counts.countA +1
     }))
 }
 const incB=()=>{
    setCount(counts =>({
        ...counts,
        countB:counts.countB +1
    }))
}
const badIncA=()=>{
    setCount({        
        countA:counts.countA +1
    })
}
return(
    <div>
        <div>
            CountA:{counts.countA}            
        </div>
        <div>
            CountB:{counts.countB}            
        </div>
        <button onClick={incA}>Count-A</button>
        <button onClick={incB}>Count-B</button>
        <button onClick={badIncA}>BADCount-A</button>
    </div>
)}




ReactDOM.render(
    <MultiCounter/>,
    document.getElementById('root')
)