import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0); 

  const tick = () => {
    setCount(prevCount => prevCount + 1);
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return() => {
      clearInterval(interval);
    }
  }, []);  // inside that array is the dependency list

  return(
    <div>
      {count}
    </div>
  );
}
export default IntervalHookCounter;
