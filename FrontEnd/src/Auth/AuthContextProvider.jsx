import { createContext, useState } from "react";

 

export const AuthContext=createContext();

function AuthContextProvider({children}) {
const [userAuth,setUserAuth]=useState({
    isAuth:false,
    Id1:"",
    Id2:"",
    friend:[],
})

const loggedin=({Id1,arr})=>{
    setUserAuth({...userAuth,isAuth:true,Id1,friend:arr})
}

const loggedout=()=>{
    setUserAuth({isAuth:false,Id1:"",Id2:""});
}

const AddMessageUser=(Id2)=>{
    setUserAuth({...userAuth,Id2});
}



return <AuthContext.Provider value={{userAuth,loggedin,loggedout,AddMessageUser}}>
{children}
</AuthContext.Provider>
}

export default AuthContextProvider;
