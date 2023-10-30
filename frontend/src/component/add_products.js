import React from 'react';
const ADD_PRODUCTS=()=>{
    const [name,setname]=React.useState('');
    const [price,setprice]=React.useState('');
    const [category,setcategory]=React.useState('');
    const [company,setcompany]=React.useState('');
    const [error,seterror]=React.useState(false);
    
    const getData=async ()=>{
        if(!name || !price || !category || !company){
            seterror(true);
            return false;
        }
        
        const Userid=JSON.parse(localStorage.getItem('user'))._id;
        let result=await fetch('http://localhost:5000/add-product',{
            method:'post',
            body:JSON.stringify({name,price,category,Userid,company}),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const res=await result.json();
        console.log(res);
    }
    return(
        <div className='register'><h1>add product</h1>
        <input type="text" className='inputBox' placeholder='enter product name' value={name} onChange={(e)=>{setname(e.target.value)}}/>
        {error && !name&& <span className='invalid'>enter valid Name</span>}
        <input type="text" className='inputBox' placeholder='price' value={price} onChange={(e)=>{setprice(e.target.value)}}/>
        {error && !price&& <span className='invalid'>enter valid price</span>}
        <input type="text" className='inputBox' placeholder='category' value={category} onChange={(e)=>{setcategory(e.target.value)}}/>
        {error && !category&& <span className='invalid'>enter valid category</span>}
        <input type="text" className='inputBox' placeholder='company' value={company} onChange={(e)=>{setcompany(e.target.value)}}/>
        {error && !company&& <span className='invalid'>enter valid company</span>}
        <button className='appbutton' onClick={getData}>Add</button>
        
        
        </div>
    )
}
export default ADD_PRODUCTS;