import React, {useState, useEffect } from 'react';


// requires 2 states, running state and elapsed time

const Stopwatch = () => {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime,setElapsedTime] = useState(0);
    useEffect(() => {
        let id;
        if(isRunning) {
            id =setInterval(() => {
            setElapsedTime(prevTime => prevTime +1 );
            console.log("tick")
            },
             1000);
        }
        return () => {
            clearInterval(id);
            console.log('clean');
        }
    },[isRunning]);
  
    return (
        <div
            className='stopwatch'>
                <h2>Stopwatch</h2>
                <span className='stopwatch-time'>{elapsedTime}</span>
                <button onClick={ () => setIsRunning((prevValue)=>!prevValue)}>
                    {isRunning ? "Stop" : "Start"}
                </button>
                <button onClick={() => setElapsedTime(0)}>Reset</button>

        </div>
    );
}

export default Stopwatch;