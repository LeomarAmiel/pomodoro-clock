import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import CircularBar from './CircularBar';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 20px;
    width: 250px;
    justify-content: center;

`;

const TimerButton = styled.button`
    background-color: transparent;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    z-index: 2;
    transition: background-color .3s ease-in, color .3s ease-out, border-width .2s, border-color .5s ;
    &:active {
        border: 1px solid black;
        box-shadow: 0 0 10px 1px black;
    }
    &:focus{
        outline: none;
    }
`;

class Timer extends React.Component {
    render () {
        console.log(this.props.onTimerDetails.hasStarted);
        return (
            <Wrapper>
                <ThemeProvider theme={{active: this.props.onTimerDetails.hasStarted}}>
                    <TimerButton onClick={this.props.onStartStop}> 
                        <CircularBar>
                            {this.props.onTimerDetails.timer} 
                        </CircularBar>
                    </TimerButton>
                </ThemeProvider>
            </Wrapper>
        );
    }
}

export default Timer;