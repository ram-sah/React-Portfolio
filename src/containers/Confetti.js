import React, { useEffect, useState, useRef } from "react";
import Confetti from "react-confetti";
import Header from './Header'

export default function Shapes() {
  const [width, setWidth] = useState(null);
  const [show, setShow] = useState(false);
  const confettiRef = useRef(null);

  useEffect(() => {

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
          numberOfPieces={50}
          width={width}
          height={500}
        />
      </div>
    </div>
  );
}
