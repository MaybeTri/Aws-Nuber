import React ,{useState} from "react";
import UserPool from "../UserPool";
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import "./form.css";


const Signup = ()=>{

 
    
    const [email,setEmail] = useState("");
    const [password,setPassword]= useState("");
    const [role,setRole]= useState("customer");

    const history = useHistory();


    function handleSelectChange(event) {
        setRole(event.target.value);
        console.log(event.target.value);
    }


    const attributeList = [];

    var customRole = {
        Name : 'custom:role',
        Value : role,
    };    

    attributeList.push(customRole);


    const onSubmit = (event) =>{
        event.preventDefault();
        UserPool.signUp(email, password,attributeList,null, (err,data) => {
            if (err) {
                console.error(err);
                window.alert(err.message);
            }
            console.log(data); 
            history.push('/login');
        });
    };



return (
    <div>
    <div class="container">    
    <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}>
        </input>
        <label htmlFor="password">Password</label>
        <input type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}>
        </input>
        <label for="role">Choose a role:</label>
        <select  value={role} onChange={handleSelectChange}> 
            <option value="customer">Customer</option>
            <option value="driver">Driver</option>
        </select>

        <button type="submit">Signup</button>
    </form>
    <a href="/login"><button>Go to Login</button></a>

    </div>
    </div>


);

};



export default Signup;
