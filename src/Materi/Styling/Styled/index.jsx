import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";

const Button = styled.button`
    border: 2px solid rgb(70, 70, 70);
    background-color: white;
    color: rgb(70, 70, 70);
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;

    background-color: white;
    border-color: rgb(0, 207, 86);
    color: rgb(0, 207, 86);

    &:hover {
        border-color: rgb(1, 130, 55);
        background-color: rgb(0, 207, 86);
        color: white; 
    }
`;

export default class Styled extends React.Component{

    render(){
        return(
            <div>
                <Button>Click Here :)</Button>
            </div>
        )
    }
}
