import React, { useState } from "react";

function Counter() {
  const [counetr, setCounter] = useState(0);
  const handleBTN = () => {
    setCounter(counetr + 1);
  };
  return (
    <div>
      <button onClick={handleBTN} className="btn-style">
        Counter ➡️ {counetr}
      </button>
    </div>
  );
}

export default Counter;
