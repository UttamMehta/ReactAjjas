import React, { useState } from 'react';

function Progress(props) {
const [state,setState]=useState(50);

const increase=()=>{
    setState((prev)=>prev+4);
}

const decrease=()=>{
    setState((prev)=>prev-4);
}


    return (
        <div>
            <div>
            <p style={{width:state,backgroundColor:"red"}}>{state}</p>
            </div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
     
            
        </div>
    );
}

export default Progress;