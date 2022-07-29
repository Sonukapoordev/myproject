import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login() {

  const navigate = useNavigate()

  const[user, setUser] = useState({
      email : "",
      password : ""
  })

  const submit_data = e => {
     const { name, value } = e.target;
     setUser({
       ...user,
       [name] : value
     })
  }

  const login_data = () => {
    const {email, password}  = user
    if(email && password){
      axios.post("http://localhost:1337/login", user)
      .then(res => console.log(res));
    }else{
      alert('invalid');
    }
  }

  return (
    <>
    <div className='container'>
      <div className='row'>
         <div className='col-sm-4'></div>
         <div className='col-sm-4'>
            <div className='form-group'>
              <label>Email Address</label>
              <input type="text" name='email' value={user.email} className='form-control form-control-sm' onChange={submit_data}></input>
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input type="password" name='password' value={user.password} className='form-control form-control-sm' onChange={submit_data}></input>
            </div>
            <div type="button" onClick={login_data} className='btn btn-primary btn-sm'>Login</div>
            <div type="button" onClick={() => navigate('/registration')} className='btn btn-primary btn-sm'>Registration</div>
         </div>
      </div>
    </div>
    </>
  )
}

export default Login