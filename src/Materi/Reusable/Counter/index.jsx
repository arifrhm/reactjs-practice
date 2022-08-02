// import React from "react";
// import styled from "styled-components";

// const Qty = styled.p`
//     font-size: 22px;
//     width: 600px;
// `;

// const Button = styled.button`
//     border: none;
//     outline: 0;
//     padding: 12px;
//     color: darkslategray;
//     background-color: lightgreen;
//     text-align: center;
//     cursor: pointer;
//     font-size: 18px;

//     &:hover{
//         opacity: 0.7;
//     }
// `;

// export default class Counter extends React.Component{
//     state = {
//         value: 0
//     }

//     handleMinus = () => {
//         this.setState({value: this.state.value - 1});
//     }

//     handlePlus = () => {
//         this.setState({value: this.state.value + 1});
        
//     }


//     render(){
//         return(
//             <div style={{display: 'flex'}}>
//                 <Button onClick={this.handleMinus}> - </Button>
//                 <Qty> 0 </Qty>
//                 <Button onClick={this.handlePlus}> + </Button>
//             </div>
//         )
//     }
// }