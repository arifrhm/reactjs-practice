import React from "react";
import {useState} from 'react'

const FunctionalComponent = ({name}) =>{
    const [count, setCount] = useState(0)
    const onCount = () => {
    setCount(count + 1)
    }

    return(
        <div>
            <h1>Ini Tugas Functional Komponen</h1>
            <h2>Hello {name}, Tekan button Count Dibawah ini untuk menghitung</h2>
            <h4>Count On Plus: {count}</h4>
            <button onClick={onCount}>Count On Here</button>
        </div>
    )
}

FunctionalComponent.defaultProps = {
    name: 'Guest'
}

export default FunctionalComponent