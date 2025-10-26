import React, { useState } from "react";
import './Home.css'
const Home = () => {
  const [count, setCount] = useState(0);

  const handleOnIncrease = () => {
    setCount(count + 1);
  };
  const handleOnDecrease = () => {
    setCount(count - 1);
  };
  const handleOnReset = () => {
    setCount(0);
  };
  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <h3>Count: {count}</h3>
      <button onClick={handleOnIncrease} className="Increase">Increase</button>
      <button onClick={handleOnDecrease} disabled={count==0} className="Decrease">Decrease</button>
      <button onClick={handleOnReset} className="Reset">Reset</button>
    </div>
  );
};

export default Home;
