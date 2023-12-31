import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'
import { AuthContext } from '../Auth/AuthContextProvider';

export default function IndividualChat() {
const [Message,setMessage]=useState("");
const {userAuth}=useContext(AuthContext);
const [arr,setArr]=useState([]);
const {Id1,Id2}=userAuth;

const socket=io("http://localhost:3035/",{transports:["websocket","polling"]});

useEffect(()=>{
socket.emit("Individual",({Id1,Id2}));
socket.on(Id1+Id2,(msg)=>{
  const {err,Chat}=msg;
  console.log(msg);
  if(err){
    
  }
  else{
    
    setArr(Chat);
  }
})
    return ()=>{
      
    }
},[])

function send(){
  socket.emit("chat",({Id1,Id2,Message}));
}

// console.log(userAuth);
// function sendMessage()

  return (
    <div>
        <h3>Sender: {userAuth.Id1}</h3>
        <h4>Receiver: {userAuth.Id2}</h4>
       <input type='text' placeholder='Enter your message' onChange={(e)=>setMessage(e.target.value)} value={Message}/>
       <button onClick={send}>Send</button>
       <div>
        {arr.length===0?<h4>Not Any Message Yet</h4>:<div>
        {arr.map((el,i)=>{
            return <div key={i} style={{display:"flex",justifyContent:"center"}}>
          <p>{el.Id1}:{el.Message}</p>
            </div>
        })}
        </div>}
       </div>
    </div>
  )
}
