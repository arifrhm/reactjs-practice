// import { render } from "@testing-library/react";
// import React from "react";
// import PropTypes from "prop-types";


// class ClassComponent extends React.Component{
//     state = {
//         value: 0
//     }

//     handleMinus = () => {
//         if(this.state.value > 0)
//         this.setState({value: this.state.value - 1});
//     }

//     handlePlus = () => {
//         this.setState({value: this.state.value + 1});
//     }


//     render() {
//         return(
//             <div>
//                 <h1>Ini Class Component</h1>
//                 <h2>Hello {this.props.name}, Silahkan Coba Operasi Dibawah Ini</h2>
//                 <button onClick={this.handleMinus}>-</button>
//                 <span>{' '} {this.state.value} {' '}</span>
//                 <button onClick={this.handlePlus}>+</button>
//             </div>
//         )
//     }
// }

// ClassComponent.propTypes = {
//     name: PropTypes.string.isRequired
// }

// export default ClassComponent;