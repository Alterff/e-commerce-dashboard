import React from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';

const Product_list=()=>{
    const [products,setproducts]=React.useState([]);
    useEffect(()=>{
        getProduct();
    },[])
    const Deletee=async(id)=>{
        let result=await fetch(`http://localhost:5000/delete/${id}`,{
            method:'Delete'

        }
        
        )
        result=await result.json();
        if(result){
            alert('product deleted');
        }
    }
    const searchHandler=async (event)=>{
        let key=event.target.value;
        if(key){
        let result=await fetch(`http://localhost:5000/search/${key}`);
        result=await result.json();
        setproducts(result);}
        else{
            getProduct();
        }
    }
    
    const getProduct=async ()=>{
        let result=await fetch('http://localhost:5000');
         result=await result.json();
         setproducts(result);
    }
    console.log(products);
return (
<div className="product-list">
    
<h2>Product List</h2>
<input placeholder='search' className='inp' onChange={searchHandler}/>
<ul>
    <li>operation</li>
<li>S. No.</li>
<li>Name</li>
<li>Price</li>
<li>Category</li>
</ul>

{
   products.length>0? products.map((item,index)=>
        <ul key={item._id}>
            <li>{index+1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <li><button onClick={()=>Deletee(item._id)}>delete</button>
            <Link to={"update/"+item._id} >update</Link>        </li>   
        </ul>
        
    )
    :<h1>no result !!!</h1>
}

</div>

)
}


export default Product_list;