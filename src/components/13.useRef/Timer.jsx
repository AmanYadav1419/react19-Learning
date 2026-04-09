// step 2 : For Timer component.

// importing essential hooks
import React, { useRef, useEffect, useState } from "react";

const Timer = () => {

    // creating useState variables for the timer, initial value set to 0.
    const [time, setTime] = useState(0);
    
    // second one is for the interval ref, initial value set to null
    const intervalRef = useRef(null);


    // function to reset the timer to zero
    const ResetTimer = () => {

        // first we have to stop the timer for that clear interval method we will use
        clearInterval(intervalRef.current);

        // and then we will make the time to zero (0).
        setTime(0)
    }

    // now for creating a timer we will use useEffect , to run the side effects
    useEffect(()=> {
        intervalRef.current = setInterval(()=>{
            // now we will set the time , update the count.
            setTime(prevTime => prevTime + 1)
            // 1000 means -> 1 second 
        },1000)

        // now after that we have to clear the interval also 
        return () => {
            // and for the clearinterval pass the ref current value.
            clearInterval(intervalRef.current)
        }
    }, []);
  
    return <div>
        {/* now in the ui need to show the ui or the time */}
        <h1>Time :- {time}</h1>

        {/* creating a button to stop the timer functionality */}
        {/* with that passing clear interval function to stop the timer */}
        <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>

        {/* now one more button to set the timer to zero (0). i.e Reset */}
        <button onClick={() => ResetTimer()}>Reset</button>
    </div>;
};

export default Timer;
