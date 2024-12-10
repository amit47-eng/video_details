import React, { useRef, useState } from "react";

const CountdownTimer = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null); 

  const startCountdown = () => {
    if (timerRef.current) return; 

    timerRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const stopCountdown = () => {
    clearInterval(timerRef.current); 
    timerRef.current = null; 
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Countdown Timer</h1>
      <h2>{count}</h2>
      <button onClick={startCountdown}>Start Countdown</button>
      <button onClick={stopCountdown} style={{ marginLeft: "10px" }}>
        Stop Countdown
      </button>
    </div>
  );
};

export default CountdownTimer;
