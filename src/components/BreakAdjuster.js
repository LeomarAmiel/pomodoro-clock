import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: center;
`;

const Button = styled.button`
    border: 0;
    background-color: transparent;
    color: blue;
    font-size: 28px;

    &:focus{
        outline: none;
    }
`;

class BreakAdjuster extends React.Component {
    render () {
        return (
            <Wrapper>
                <p>Break</p>
                <div>
                    <Button onClick={ !this.props.onHasStarted 
                        ? () => this.props.onModify({category: 'break', operation: 'minus'})
                        : null
                    }> - </Button>
                    <span> {this.props.onBreak} </span>
                    <Button  onClick={ !this.props.onHasStarted 
                        ? () => this.props.onModify({category: 'break', operation: 'plus'})
                        : null
                    }>+</Button>
                </div>
            </Wrapper>
        );
    }
}

export default BreakAdjuster;