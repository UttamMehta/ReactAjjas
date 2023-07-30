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


    socket.on(Id1+Id2,(msg)=>{
        let {err}=msg;
    if(err){
        setArr([])
    }
    else{
        setArr(msg.Chat);
    }
    
    })

    return ()=>{
        // socket.disconnect();
    }
},)

function send(){
    if(Id1,Id2,Message)
    socket.emit("chat",{Id1,Id2,Message});
    else
    alert("Some Error");
}




console.log(userAuth);
// function sendMessage()

  return (
    <div>
        <h3>Sender: {userAuth.Id1}</h3>
        <h4>Receiver: {userAuth.Id2}</h4>
       <input type='text' placeholder='Enter your message' onChange={(e)=>setMessage(e.target.value)}/>
       <button>Send</button>
    </div>
  )
}
