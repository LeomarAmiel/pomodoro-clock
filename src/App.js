import React, { Component } from 'react';
import PomodoroClock from './components/PomodoroClock'
import { injectGlobal } from 'styled-components';

injectGlobal`
    html, body {
        box-sizing: content-box;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
        @media screen and (min-width: 360px) {
            font-size: 20px;
        }
        @media screen and (min-width: 768px) {
            font-size: 22px;
        }
        @media screen and (min-width: 1024px) {
            font-size: 24px;
        }
    };
    button {
        cursor: pointer;
    }
    a {
        cursor: pointer;
    }
`;

class App extends Component {
  render() {
    return (
      <div>
          <PomodoroClock/>
      </div>
    );
  }
}

export default App;
