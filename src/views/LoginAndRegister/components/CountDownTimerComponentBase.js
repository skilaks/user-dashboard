import React,{ useState, useEffect} from 'react'

export default function CountDownTimerComponentBase() {
    const [time,setTime]=useState({});
    const [seconds,setSeconds]=useState(5);
    const [timer,setTimer] = useState(0)
//----------------------------------

    //-----------------------
   function secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
      }
//---------------------------
useEffect(() => {
    let timeLeftVar =secondsToTime(seconds);
    setTime(timeLeftVar);
},[])
//----------------------------------------------------------------
function countDown(){
    let secound =seconds - 1;
    setTime(secondsToTime(secound));
    setSeconds(secound)
    if(secound ==0){
        clearInterval(timer);
    }
}
//----------------------------------------------------------------
function startTimer(){
if(timer==0&& seconds > 0){
    setTimer ( setInterval(countDown , 1000))
}
}
    return (
        <div>
            <button type="button" onClick={startTimer}>Start</button>
            {time.m} : {time.s}
        </div>
    )
}
