import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContextProvider";

function PrivateRoute({children}) {
    const {userAuth}=useContext(AuthContext);
return <div>{userAuth.isAuth?children:<Navigate to="/login" />}</div> 

}

export default PrivateRoute;
