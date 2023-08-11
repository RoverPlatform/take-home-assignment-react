
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
    email:string; 
    password:string;
}

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [userIsVerified, setUserIsVerified] = useState(false);
    const logInCredentials: LoginProps = {
        email: email,
        password:password
    }
    //still missing the credential verification logic

    const handleSubmit = (): void =>{
        //dispatch the info to the database
        console.log(logInCredentials);
        //if user credentials are verified
        if(userIsVerified){
            //navigate to the productlist page
            navigate("/products")
        }
        
    }
    return (
        <div className="card">
            <img>Logo</img>
            <h2>Sign in</h2>
            <form>
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label>Password</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button className="px-10 mx-auto" onClick={handleSubmit}>Sign in</button>
            </form>

        </div>
    )

};

export default Login;
