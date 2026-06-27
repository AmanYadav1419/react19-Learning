// 001 Counter Project.

import { useState } from "react"
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
  return (
    <>
        <h1>Count : {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={() => handleIncermentByAmount(5)}>Incerment by 5</button>
    </>
  )
}

export default Counter;