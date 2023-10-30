import React from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Nav=()=>{
    const auth=localStorage.getItem("user");
    const Navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        Navigate('/signup');
    }
    return(
        <div>
            {auth?
            <ul className="nav-ul">
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">add products</Link></li>
            <li><Link to="/update">update products</Link></li>
          
            <li><Link to="/profile">profile </Link></li>
            <li><Link onClick={logout} to='/signup'>logout ({JSON.parse(auth).name})</Link></li></ul>
            :
            <ul className="nav-ul nav-ur">
                <li><Link to='/signup'>signup</Link></li>
                <li><Link to='/login'>login</Link></li></ul>
            }
            



        </div>
    )
}
export default Nav;

