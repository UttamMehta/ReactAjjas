import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from "../Auth/AuthContextProvider";

function Chat() {
    const {userAuth,AddMessageUser}=useContext(AuthContext);
console.log("hi");
// console.log(userAuth);
  return (
    <div>
    <div>
        {
            userAuth.friend.map((el,i)=>{
                return <h1 key={i} ><Link onClick={()=>AddMessageUser(el)}to="/individual" style={{color:"black",textDecoration:"none"}}  >{el}</Link></h1>
       
    //    return <p  key={i} onClick={()=>AddMessageUser(el)}>{el}</p>    
     })
        }
</div>
      {/* <ShowAllChat /> */}

    </div>
  )
}

export default Chat;
