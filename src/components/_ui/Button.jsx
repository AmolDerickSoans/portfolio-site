import React, { Component } from 'react';
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";

const ButtonContainer = styled("button")`

    $mainC: #f7f7f7;
    padding: 1em 2em;
    background: $mainC;
    font-weight: 600;
    color: gray;
    outline: none;
    border: none;
    font-size: 1rem;
    border-radius: 10px;
    box-shadow: 
    inset 0 0 15px rgba(55, 84, 170,0),
    inset 0 0 20px rgba(255, 255, 255,0),
    7px 7px 15px rgba(55, 84, 170,.15),
    -7px -7px 20px rgba(255, 255, 255,1),
    inset 0px 0px 4px rgba(255, 255, 255,.2);
    position: relative;
    transition: background 100ms ease-in-out;

    @media(max-width:${dimensions.maxwidthMobile}px) {
        padding: 0.8em 1.8em;
        font-size: 1em;
    }

    p {
        margin: 0;
    }

  

    &:hover {
        box-shadow: 
          inset 7px 7px 15px rgba(55, 84, 170,.15),
          inset -7px -7px 20px rgba(255, 255, 255,1),
          0px 0px 4px rgba(255, 255, 255,.2);
      }
      transition: box-shadow 399ms ease-in-out;
    &.Button--secondary {
        background: ${colors.blue200};
        color: ${colors.blue600};
        padding: 0.95em 1.8em;
        font-size: 0.95rem;

        &:hover {
            background: ${colors.blue300};
            transition: background 100ms ease-in-out;
        }
    }
`

class Button extends Component {
    render() {
        const { children, ...props } = this.props;
        return (
            <ButtonContainer
                onClick={this.props.onClick}
                {...props}>
                {this.props.children}
            </ButtonContainer>
        );
    }
}

export default Button;