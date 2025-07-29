import React from 'react'

function Stopwatch() {
  return (
    <div className='main'>
        <div className='stopWatch'>
            <div className='stopwatchDisplay'>
                <h2>00:00:00:000</h2>
            </div>
            <div className='buttons'>
                <button id='btnStart'>Start</button>
                <button id='btnStop'>Stop</button>
                <button id='btnPause'>Pause</button>
            </div>
        </div>
    </div>
  )
}

export default Stopwatch