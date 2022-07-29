import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
function Registration() {
    const { reset } = useForm();
    const navigate = useNavigate()
    const [ user, setUser ] = useState({
        name: "",
        password: "",
        email: ""
    })

    const handleChange = e => {
        const { name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = async() =>{
        const { name , password , email} = user
        if(name && password && email){
        axios.post("http://localhost:1337/register", user)
        .then(res => res.status === 200,
            window.location.href = "/"
        )
        // res =>  setUser(res.json())
        }
    }
  return (
    <>
    <div className='container'>
        {console.log("User", user)}
        <div className='row'>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
                <div className='form-group'>
                <label>Name</label>
                <input type="text" placeholder="name" name='name' value={user.name} className='form-control form-control-sm' onChange={handleChange}></input>
                </div>
                <div className='form-group'>
                <label>Password</label>
                <input type="password" placeholder="password" name='password' value={user.password} className='form-control form-control-sm' onChange={handleChange}></input>
                </div>
                <div className='form-group'>
                <label>Email</label>
                <input type="text" placeholder="Email" name='email' value={user.email} className='form-control form-control-sm' onChange={handleChange}></input>
                </div>
                <div type="button" className='btn btn-primary' onClick={register}>Register</div>
                <div type="button" className='btn btn-primary' onClick={() => navigate('/Login')}>login</div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Registration  