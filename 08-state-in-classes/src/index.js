import {React,Component} from 'react';
import ReactDOM from 'react-dom';

//----------example-1-----------//
//----create class component and use state to add counter

// class Counter extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             count:0
//         }
//         this.handleAction = this.handleAction.bind(this);
//     }    

//     handleAction(){
//         this.setState({
//             count:this.state.count+1
//         });
//     }
//         render(){
//         return(
//             <div>
//                 <button onClick={this.handleAction}>Add Acounter</button>
//                 <p>Counter:{this.state.count}</p>
//             </div>
//         );
//     }

// }
// ReactDOM.render(
//     <Counter/>,
//     document.getElementById("root")
// );

//----------example-2-----------//
//----create counter class component & write AddCounter function in it.
//--- pass AddCounter method to another component Child Component.

// const Child =({incrementCounter,incrementCounter2,incrementCounter3})=>{
//     return(
//         <div>
//             <div>
//             <span>Async set State: </span><button onClick={incrementCounter}>Counter</button>
//             </div>

//             <div>
//             <span>Call back function-Sync setState: </span> <button onClick={incrementCounter2}>Counter</button>
//             </div>
//             <div>
//             <span>Functional setState: </span> <button onClick={incrementCounter3}>Counter</button>
//             </div>
//         </div>
//     );
// }
// class Counter extends Component{  
//     constructor(props){
//         super(props);
//         this.state={
//             count:0
//         }
//         this.AddCounter=this.AddCounter.bind(this);
//         this.AddCounter2=this.AddCounter2.bind(this);
//         this.AddCounter3=this.AddCounter3.bind(this);
//     }

//     //1-setState is Async function, it shows old values

//     AddCounter(){
//         this.setState({
//             count:this.state.count+1
//         });
//         console.log("Counter1:",this.state.count);
//     }

//     //2-If you need to set the state and immediately act on that change, you can pass in a callback function as     
//     //  the second argument to setState, like this:

//     AddCounter2(){
//         this.setState({count:this.state.count+1},function(){
//             console.log("Counter2:",this.state.count);
//         });        
//     }
//     //3-Functional setState is the preferred way to call setState because it’s guaranteed to work correctly, every
//     //  time. Try to use it whenever you can.
//     AddCounter3(){
//         this.setState( (state,props) =>{
//             return{
//                 count:state.count+1
//             } 
//         });
//         this.setState( (state,props) =>{
//             return{
//                 count:state.count+1
//             } 
//         });
//          this.setState( (state,props) =>{
//             return{
//                 count:state.count+1
//             } 
//         });
//         console.log("Counter3:",this.state.count);
//         //but remember setstate is async, its console value will show previous values.
//     }


//     render(){
//         return(
//           <div>
//               <Child incrementCounter={this.AddCounter} incrementCounter2={this.AddCounter2} incrementCounter3={this.AddCounter3}/>
//               <div>Counter:{this.state.count}</div>              
//           </div>  
//         );
//     }
// }


// ReactDOM.render(
//     <Counter/>,
//     document.getElementById("root")
// );

//--------------------------------Example-3--------------------------//
//--------------------Cleaner Syntax for Class Component------------//
//----------------- simple way to write state without constructor.
//----------------  write handler function as arrow function and no need to bind every function in constructor.


// class Counter extends Component{
    
//     state={
//         count:0
//     }

//     addCounter = () =>{
//         return(
//             this.setState({
//                 count:this.state.count+1
//             })
//         );
//     }
    
//     render(){
//         return(
//             <div>
//                 <Child incrementCounter = {this.addCounter}/>
//                 Counter:{this.state.count}
//             </div>
//         );
//     }
// }

// const Child =({incrementCounter})=>{
//     return(
//         <button onClick={incrementCounter}>Add Counter</button>
//     );
// }

// ReactDOM.render(
//     <Counter/>,
//     document.getElementById("root")
// );

class Home extends Component{
    state={
        kitchen:true,
        bathroom:false,
        livingRoom:true,
        bedroom:false
    }
    kitchenSwitch=()=>{
        return(
            this.setState({
                kitchen:!this.state.kitchen
            })
        );
    }
    bathroomSwitch=()=>{
        return(
            this.setState({
                bathroom:!this.state.bathroom
            })
        );
    }
    livingroomSwitch=()=>{
        return(
            this.setState({
                livingRoom:!this.state.livingRoom
            })
        );
    }
    bedroomSwitch=()=>{
        return(
            this.setState({
                bedroom:!this.state.bedroom
            })
        );
    }
    render(){
        return(
            <div>
            <table>
            <tbody>
                <tr>
                    <td>Kitchen:{this.state.kitchen?"On":"Off"}</td>
                </tr>
                <tr>
                    <td>Bathroom:{this.state.bathroom?"On":"Off"}</td>
                </tr>
                <tr>
                    <td>Livingroom:{this.state.livingRoom?"On":"Off"}</td>
                </tr>
                <tr>
                    <td>Bedroom:{this.state.bedroom?"On":"Off"}</td>
                </tr>
                <tr>
                    <td><button onClick={this.kitchenSwitch}>Kitchen</button></td>
                    <td><button onClick={this.bathroomSwitch}>Bathroom</button></td>
                    <td><button onClick={this.livingroomSwitch}>Livingroom</button></td>
                    <td><button onClick={this.bedroomSwitch}>bedroom</button></td>
                </tr>
            </tbody>
            </table>    

            </div>
        );
    }
}

ReactDOM.render(
    <Home/>,
    document.getElementById("root")
);
