//import { application } from 'express';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const SignUp=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const Navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem("user");
        if(auth){
            Navigate('/');
        }
    },[]);
    const CollectData = async () => {
        
            let res = await fetch("http://localhost:5000/register", {
                method: 'post',
                body: JSON.stringify({ name, email, pass }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            const result = await res.json();
            localStorage.setItem("user",JSON.stringify(result));
            Navigate('/');
           
    }
    return(
        <div className='register'>
            <input type="text" placeholder='enter your name' className='inputBox' value={name} onChange={(e)=>setName(e.target.value)}></input>
            <input type="text" placeholder='enter your email' className='inputBox'value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="password" placeholder='enter password' className='inputBox'value={pass} onChange={(e)=>setPass(e.target.value)}></input>
            <button className='appbutton' onClick={CollectData}> SignUp</button>

        </div>
    )
}
export default SignUp;