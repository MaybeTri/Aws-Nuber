import React ,{useState,useContext} from "react";
import { AccountContext } from "./Account";
import { useHistory } from "react-router-dom";
import Pool from "../UserPool";
import './form.css';


const Login = ()=>{
    
    
    const [email,setEmail] = useState("");
    const [password,setPassword]= useState("");

    const { authenticate } = useContext(AccountContext);

    const history = useHistory();

    const onSubmit = (event) =>{
        event.preventDefault();

        authenticate(email,password).then(data=>{
            console.log("Logged in!",data);

            var cognitoUser = Pool.getCurrentUser();
            
            console.log(cognitoUser.getUserAttributes);
            if(cognitoUser.getUserAttributes  === "driver"){

                console.log(cognitoUser.getUserAttributes);

                history.push('/driverhome');
            } else{
                history.push('/driverhome');
            }

            
        }).catch(err=>{
            window.alert(err.message);
            console.error("Failed to login",err);
        });

    };

return (
    
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

        <button type="submit">Login</button>
    </form>
    
    </div>


);

};



export default Login;
