import React from "react";
import ClassComponent from "./Pembahasan/ClassComponent";
import FunctionalComponent from "./Pembahasan/FunctionalComponent";

export default class FirstComponent extends React.Component{
    render() {
        return(
            <div>
                <ClassComponent name="Sukma Giri Pratama"/>
                <FunctionalComponent/>
            </div>
        )
    }
}