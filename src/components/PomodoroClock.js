import React from 'react';
import styled from 'styled-components';
import BreakAdjuster from './BreakAdjuster';
import FocusAdjuster from './FocusAdjuster';
import Timer from './Timer';

const Wrapper = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
`;

const updateTimer = (modification) => {
    return function update (state) {
        if(modification.category==='focus') {
            if(modification.operation==='plus') {
                return {
                    focus: state.focus + 1,
                    timer: state.timer + 1,
                };
            }
            else {
                return {
                    focus: state.focus - 1,
                    timer: state.timer - 1,
                };
            }
        }
        else {
            if(modification.operation==='plus') {
                return {
                    break: state.break + 1
                }
            } 
            else {
                return {
                    break: state.break - 1
                }
            }
        }
    }
}

class PomodoroClock extends React.Component {
    constructor () {
        super();
        this.state = {
            break: 5,
            focus: 25,
            timer: 25,
            hasStarted: false,
            timerFunction: 'focus',
            intervalId: null
        }
    }

    onModify = (modification) => {
        this.setState(updateTimer(modification));
    } 

    startStopClock = () => {
        if(this.state.hasStarted === true ) {
            clearInterval(this.state.intervalId);
            this.setState({hasStarted: false, timer: this.state.focus, intervalId: null});
            return null;
        }
        this.setState({hasStarted: !this.state.hasStarted});
        var intervalId = setInterval(this.clockStartFocusAction, 1000);
        this.setState({intervalId: intervalId, timer: this.state.focus});
    }

    clockStartFocusAction = () => {
        this.setState({ timer: this.state.timer-1 });
        if(this.state.timer===-1){
            clearInterval(this.state.intervalId);
            var intervalId = setInterval(this.clockStartBreakAction, 1000);
            this.setState({
                intervalId: intervalId,
                timer: this.state.break
            });
        }
    } 

    clockStartBreakAction = () => {
        this.setState({timer: this.state.timer -1});
        if(this.state.timer===-1) {
            clearInterval(this.state.intervalId);
            var intervalId = setInterval(this.clockStartFocusAction, 1000);
            this.setState({
                intervalId: intervalId,
                timer: this.state.focus
            });
        }
    }

    

    render() {
        return (
            <Wrapper>
                <BreakAdjuster onBreak={this.state.break} onHasStarted={this.state.hasStarted} onModify={this.onModify}/>
                <Timer onTimerDetails={this.state} onStartStop={this.startStopClock}/>
                <FocusAdjuster onFocus={this.state.focus} onHasStarted={this.state.hasStarted} onModify={this.onModify}/>
            </Wrapper>
        )
    }
} 

export default PomodoroClock;