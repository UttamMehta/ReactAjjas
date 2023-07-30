import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthContextProvider";
import { Link, Navigate } from "react-router-dom";
import io from 'socket.io-client';

function Login() {
const [user,setUser]=useState({email:""})
const {userAuth,loggedin}=useContext(AuthContext);



// const socket = io('');

const handle=(e)=>{
  e.preventDefault();

  let arr1=["abc@gmail.com","xyz@gmail.com","pqr@gmail.com","qwe@gmail.com","lqr@gmail.com"];
  let arr=arr1.filter((el)=>{
    return el!==user.email;
  })

//   console.log(arr);

  if(user.email){
    let Id1=user.email;

    loggedin({Id1,arr})
  }
}

if(userAuth.isAuth)
return <Navigate to="/chat" />

  return (
    <div>
      <form >
        <div>
          <label>
            Email   </label>
            <input type="email" placeholder="email" name="email" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} />
        
        </div>
        <div> 
          <input type="submit" value="SUBMIT" onClick={handle}/>
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
