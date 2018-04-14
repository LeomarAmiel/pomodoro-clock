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

class FocusAdjuster extends React.Component {
    render () {
        return (
            <Wrapper>
                <p>Focus</p>
                <div>
                    <Button onClick={ !this.props.onHasStarted 
                        ? () => this.props.onModify({category: 'focus', operation: 'minus'})
                        : null
                    }> - </Button>
                    <span> {this.props.onFocus} </span>
                    <Button onClick={ !this.props.onHasStarted 
                        ? () => this.props.onModify({category: 'focus', operation: 'plus'})
                        : null
                    }> + </Button>
                </div>
            </Wrapper>
        );
    }
}

export default FocusAdjuster;