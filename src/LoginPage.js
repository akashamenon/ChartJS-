import {React} from 'react';
import { useState } from 'react';
// import {useHistory} from "react-router-dom";
import './LoginPage.css';
//import {useNavigator} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  // let history = useHistory();
  const navigate = useNavigate();
  const[username,setUserName]=useState('');
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[password2,setPassword2]=useState('')
  const [disableSignup, setDisableSignup] = useState(false);

  const onInputChange = () => {

  }
    const message=()=>
    {
      
        console.log(" Login Successfull");
        console.log(username);
        localStorage.setItem('userInfo', JSON.stringify({userName: username, email: email}));
        // put navigation logic here
        // history.push('/profile');
        // window.open("/profile")
       
        navigate('/profilePage');
    }
     return (
        <div class="container">
      <div id="login-form">
        <h1>Login</h1>
        <div class="input-control">
          <label for="username">Username</label>
          <input id="username" name="username" type="text" value={username} onChange={(e)=>setUserName(e.target.value)} />
          <div class="error"></div>
        </div>
        <div class="input-control">
          <label for="email">Email</label>
          <input id="email" name="email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <div class="error"></div>
        </div>
        <div class="input-control">
          <label for="password">Password</label>
          <input id="password" name="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <div class="error"></div>
        </div>
        <div class="input-control">
          <label for="password2">Password again</label>
          <input id="password2" name="password2" type="password" value={password2} onChange={(e)=>setPassword2(e.target.value)} />
          <div class="error"></div>
        </div>
         <button type="" onClick={(e)=>{message()}} disabled={disableSignup}>Sign Up</button> 
      </div>
    </div>
     );
}
     
             
             
             
export default LoginPage