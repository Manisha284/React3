import React,{useState,useEffect} from 'react'
import './stylesheet1.css'

function Clock() {
    const time=new Date().toLocaleTimeString();
    const [Time,setTime]=useState(time)
    const date=new Date().toLocaleDateString();
    useEffect(()=>{
        setTimeout(()=>{setTime({time})},1000)
    })

    return (
        <div className="Manu">
            <h1>Hello,My Name is SAM</h1>
            <p>Today's Date : {date}</p>
            <p>Current Time : {time} </p>
        </div>
    )
    }
export default Clock