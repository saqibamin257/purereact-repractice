import React from 'react';
import ReactDOM from 'react-dom';

//----------------------Example-1-----------------//
//-----------------Keep state of child component into parent component-------------------//

// class Layout extends React.Component{
    
//     state={
//         showSidebar:true
//     }
    
//     toggleSidebar=()=>{
//         this.setState({
//             showSidebar:!this.state.showSidebar
//         });
//     }
//     render(){
//         const {showSidebar}=this.state;
//         return(
//             <div>
//                 {
//                     showSidebar &&
//                     <Sidebar onHide={this.toggleSidebar}>
//                         Welcome to Sidebar
//                     </Sidebar>
//                 }
//                 <Content
//                 onShowSidebar={this.toggleSidebar}
//                 isSidebarVisible={showSidebar}
//                 >
//                     Content Component
//                 </Content>
//             </div>
//         );
//     }
// }

// const Sidebar =({onHide,children})=>{
//     return(
//         <div>
//             {children}
//             <button onClick={onHide}>Hide</button>
//         </div>

//     );
// }
// const Content = ({onShowSidebar,isSidebarVisible,children}) => {
//     return(
//         <div>
//             {children}
//             {  !isSidebarVisible &&
//                 <button onClick={onShowSidebar}>
//                   show
//                 </button>
//             }
//         </div>
//     );
// }

// ReactDOM.render(
//     <Layout/>,
//     document.getElementById("root")
// );




//-----------------Example-2------------//
//-----------Input Control----------//
//--------Control Input---------------//

// const InputExample=()=>{
//     const [text, setText] = React.useState('');
//     const handleChange=(event)=>{
//         setText(event.target.value)
//     }

//     return(
//         <div>
//             <input
//             type="text"
//             onChange={handleChange}            
//             />
//             {text}
//         </div>
//     );
// }

// ReactDOM.render(
//     <InputExample/>,
//     document.getElementById("root")
// );

//-----------Example-3------------//
//-----------Input Control----------//
//--------Using UseRef---------------//

const RefInput = () => {
    const input = React.useRef();
    const showInput =()=>{
        alert(`input contains: ${input.current.value}`)
    }
    return(
        <div>
            <input type="text" ref={input}/>
            <button onClick={showInput}>
                Alert the value!
            </button>
        </div>
    );
}
ReactDOM.render(
    <RefInput/>,
    document.getElementById("root")
);

