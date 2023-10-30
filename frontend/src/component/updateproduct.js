import React, { useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
const Updateproduct=()=>{
    const [name,setname]=React.useState('');
    const [price,setprice]=React.useState('');
    const [category,setcategory]=React.useState('');
    const [company,setcompany]=React.useState('');
   const params=useParams();
   const Navigate=useNavigate();
   useEffect(()=>{
    Getproductdetails();
   },[])

   const Getproductdetails=async()=>{
    console.warn(params);
    let result =await fetch(`http://localhost:5000/product/${params.id}`);
    result=await result.json();
    console.log(result);
    setname(result.name);
    setprice(result.price);
    setcategory(result.category);
    setcompany(result.company);
   }
    
    const getData=async ()=>{
        
        let result=await fetch(`http://localhost:5000/update/${params.id}`,{
            method:'put',
            body:JSON.stringify({name,price,category,company}),
        
                headers:{
                    'Content-Type': 'application/json'
                }
            
        })
        result=await result.json();
        if(result){
            Navigate('/');
        }
      
    }
    return(
        <div className='register'><h1>update product</h1>
        <input type="text" className='inputBox' placeholder='enter product name' value={name} onChange={(e)=>{setname(e.target.value)}}/>
        <input type="text" className='inputBox' placeholder='price' value={price} onChange={(e)=>{setprice(e.target.value)}}/>
        <input type="text" className='inputBox' placeholder='category' value={category} onChange={(e)=>{setcategory(e.target.value)}}/>
        <input type="text" className='inputBox' placeholder='company' value={company} onChange={(e)=>{setcompany(e.target.value)}}/>
        <button className='appbutton' onClick={getData}>update</button>
        
        
        </div>
    )
}
export default Updateproduct;