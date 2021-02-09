import React from 'react';
import '../../src/App.scss';
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
            6500
          ]}
        />
      </div>
      </header>
  );
}

export default Animate;
