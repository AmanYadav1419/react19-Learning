import React,{ useRef } from 'react'

const UseRefHookExample = () => {

    // to use the hook , write useRef pass a value and store it into a variable.
    const element = useRef(null);
    console.log(element);

    return (
    <div>UseRefHookExample</div>
  )
}

export default UseRefHookExample