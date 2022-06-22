import userEvent from "@testing-library/user-event";
import {useState} from "react";

const FunctionalComponent = ({name}) =>{
    const [value, setValue] = useState(0);

    const handleMinus = () => {
        if(value > 0){
        setValue(value - 1);
        }
    }

    const handlePlus = () => {
        setValue(value + 1);
    }


    return(
        <div>
             <h1>Ini functional component</h1>
             <h2>Hello {name}, Semangat Belajar!</h2>

             <button onClick={handleMinus}>-</button>
             <span>{' '} {value} {' '}</span>
             <button onClick={handlePlus}>+</button>
        </div>
    )
}

FunctionalComponent.defaultProps = {
    name: 'Guest'
}

export default FunctionalComponent;