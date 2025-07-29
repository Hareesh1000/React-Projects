import React, { useState,useRef } from 'react'

function Stopwatch() {

    const[time,setTime] = useState(0);
    const[runStatus,setRunStatus] = useState(null);
     const intervalId = useRef(null);

    let hh='00';
    let mm='00';
    let ss='00';

    const startWatch= ()=>{
        if(runStatus) return; 
         intervalId.current = setInterval(
                ()=>{
                    setTime(prevtime => prevtime +1)
                },1000
            );

        setRunStatus(true);
    }

    const stopWatch=()=>{
        setRunStatus(null);
        setTime(0);
        if ( intervalId.current){
                clearInterval(intervalId.current);  
                intervalId.current = null;
        }
        
    }

    const pauseWatch=()=>{
          if ( intervalId.current){
                clearInterval(intervalId.current);  
                intervalId.current = null;
        }    
        setRunStatus(null);  
    }

  return (
    <div className='main'>
        <div className='stopWatch'>
            <div className='stopwatchDisplay'>
                <h2>{hh}:{mm}:{time}</h2>
            </div>
            <div className='buttons'>
                <button id='btnStart' onClick={startWatch}>Start</button>
                <button id='btnStop' onClick={stopWatch}>Stop</button>
                <button id='btnPause' onClick={pauseWatch}>Pause</button>
            </div>
        </div>
    </div>
  )
}

export default Stopwatch