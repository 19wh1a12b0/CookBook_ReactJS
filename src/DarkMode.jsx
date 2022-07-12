import React, { useState, useEffect } from 'react'
import './App.css'

function DarkMode() {

    const getMode = ()=> {
        return JSON.parse(localStorage.getItem("mode")) || false
    }
    
    const [dark,setMode] = useState(getMode())
        useEffect(()=>{
            localStorage.setItem("mode",JSON.stringify(dark))  
        },[dark]);

  return (
    <div>
        <div className="nav">
            <label class="switch">
            <input type="checkbox" checked={dark} onChange={() =>setMode(!dark)}/>
            <span class="slider round"></span>
            </label>
        </div>
    </div>
  )
}

export default DarkMode;
