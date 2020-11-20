import React, { useEffect, useState, useRef } from "react";
import Confetti from "react-confetti";
import Header from '../src/containers/Header'

export default function Shapes() {
  // const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [show, setShow] = useState(false);
  const confettiRef = useRef(null);

  useEffect(() => {
    // setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, []);

  const handleShow = (toggle) => {
    setShow(toggle);
  };

  return (
    <div>
      <div
        onMouseEnter={() => handleShow(true)}
        onMouseLeave={() => handleShow(false)}
        ref={confettiRef}
      >
        <Header />
        <Confetti
          recycle={show}
          numberOfPieces={400}
          width={width}
          height={500}
        />
      </div>
    </div>
  );
}
