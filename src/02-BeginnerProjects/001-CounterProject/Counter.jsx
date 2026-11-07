// 001 Counter Project.

import { useState } from "react"
import "./counter.css"

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prev => prev + 1)
    }

    const handleDecrement = () => {
        setCount(prev => prev - 1)
    }

    const handleIncermentByAmount = (amount) => {
        setCount(prev => prev + amount)
    }

    const countClass = count > 0 ? "counter-display positive" : count < 0 ? "counter-display negative" : "counter-display"

  return (
    <div className="counter-wrapper">
      <div className="counter-card">
        <p className="counter-title">Counter</p>
        <div className={countClass}>{count}</div>
        <div className="counter-actions">
          <button className="counter-btn btn-decrement" onClick={handleDecrement}>Decrement</button>
          <button className="counter-btn" onClick={handleIncrement}>Increment</button>
          <button className="counter-btn btn-by5" onClick={() => handleIncermentByAmount(5)}>+5</button>
        </div>
      </div>
    </div>
  )
}

export default Counter;
