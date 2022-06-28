import React from "react";
import styled from "styled-components";

const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${(props) => (props.primary ? "#2EC76D" : "white")};
    color: ${(props) => (props.primary ? "white" : "black")};
    border: ${(props) => (props.primary ? "none" : "1px solid gray")};
    color: ${(props) => props.colorText};
    width: ${(props) => props.width};
    font-size: 1em;
    font-weight: 500;
    padding: ${(props) => props.padding};
    padding: ${(props) => (props.small ? "0.3em 0.5em" : "0.8em 2em")};
    border: ${(props) => props.unbordered && "none"};
    border-radius: ${(props) => (props.bordered ? "5px" : "none")};
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ButtonS = ({ children, ...rest }) => {
    return <Button {...rest}>{children}</Button>;
};

export default ButtonS;
