import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, Navigate } from "react-router-dom";

function Login() {
const [user,setUser]=useState({email:""})
const {userAuth,loggedin}=useContext(AuthContext);

const handle=()=>{
  e.preventDefault();

// console.log(user);
}

if(userAuth.isAuth)
return <Navigate to="/chat" />

  return (
    <div>
      <form >
        <div>
          <label>
            Email
            <input type="email" placeholder="email" name="email" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} />
          </label>
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
