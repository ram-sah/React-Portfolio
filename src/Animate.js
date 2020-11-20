import React from 'react';
import './App.css';
import Typical from 'react-typical';
function Animate() {
  return (
      <header>        
        <div className="App-header">
        I'm a{" "}
        <Typical
          loop={Infinity}
          wrapper='b'
          steps={[
            'FULL-STACK DEVELOPER',
            5500,
            '"SOFTWARE ENGINEER"',
            6500,
            '"WEB DESIGNER"',
            2000
          ]}
        />
      </div>
      </header>
  );
}

export default Animate;
