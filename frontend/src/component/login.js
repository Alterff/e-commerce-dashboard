import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Login=()=>{
    const [email,setEmail]=React.useState("");
    const [pass,setPass]=React.useState("");
   const  Navigate=useNavigate();
   useEffect(()=>{
    const r=localStorage.getItem('user');
    if(r){
        Navigate('/');
    }
   },[])
    const GetData=async ()=>{
        let res=await fetch('http://localhost:5000/login',{
        method:'post',
        body:JSON.stringify({email,pass}),
        headers:{
            'Content-Type': 'application/json'
        }

        });
        res=await res.json();
        console.log(res);
        if(res.result){
            
            alert('incorrect email or password')
        }
        else{
            localStorage.setItem('user',JSON.stringify(res));
            Navigate('/');
        }
    }
    return(
        <div className="register">
        <h1>login</h1>
        <input type="text" className="inputBox" placeholder="enter email"  onChange={(e)=>setEmail(e.target.value)}   value={email}/>
        <input type="text" className="inputBox" placeholder="enter password"   onChange={(e)=>setPass(e.target.value)}   value={pass}/>
        <button className='appbutton' onClick={GetData}>Login</button>



        </div>
    )
}
export default Login;