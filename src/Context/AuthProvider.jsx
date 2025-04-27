import React,{ useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { UserAuthDetails } from "./AuthCon";
export function AuthProvider ({children}){
    const navigate = useNavigate();
    const [userName,setUserName]=useState('');
    const [user,setUser]=useState('');
    const [selectedBook, setSelectedBook] = useState(null);
    const [psw,setPsw] =useState('');
    const login =()=>{
        localStorage.setItem('userName' ,userName);
        const user = localStorage.getItem('userName');
        setUser(user);
        navigate('/das');
    }
    useEffect(()=>{
      const user = localStorage.getItem('userName');
      setUser(user);
    },[])
    const logOut = () =>{
        localStorage.clear();
        setPsw('');
        setUserName('');
        setUser('');
        setSelectedBook(null);
        navigate('/');
    }
    
    
return <>
     <UserAuthDetails.Provider value={{userName,setUserName,psw,setPsw,login,user,logOut,selectedBook,setSelectedBook}}>{children}</UserAuthDetails.Provider>
</>
}