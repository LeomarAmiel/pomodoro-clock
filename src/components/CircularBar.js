import React from 'react';
import styled from 'styled-components';

const SVGText = styled.text`
    z-index: 9;
`;

export default (props) => {
    return (
        <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <circle cx="50" cy="50" r="50" fill="none" stroke="#e6e6e6"/>
            <SVGText x="50" y="50" height="200" width="200" font-family="Verdana" font-size="64" fill="blue">
                {props.children}
            </SVGText>
        </svg>
    );
}