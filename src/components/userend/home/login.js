import React from 'react';
import { useState } from 'react';
import Axios from 'axios'
function SignIn(){
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [data,setdata]=useState("");
  const [msg,setmsg]=useState("");
  const handleSubmit=()=>{
    Axios.get("http://localhost:4000/users/get-password/"+email)
    .then((res) => {
      if(res.status === 200) {
        setdata(res.data);
      }
      else Promise.reject()
    })
    .catch((err) => {
      if(err) alert(err);
    })
    if(data){
        if(pass===data.password){
          localStorage.setItem('username',data.name);
          localStorage.setItem('id',data._id);
          setmsg("login successful");
          document.getElementById("message").style.color="green";
        }
        else{
          setmsg("login failed");
          document.getElementById("message").style.color="red";
        }
    }
  }
  return (
    <div style={{maxWidth:"50%"}} className='d-grid mx-auto'>
      <h2 className="text-center mb-4">Login</h2>
      <p id="message" className='text-center'>{msg}</p>
      <form className='form-control' onSubmit={handleSubmit}>
        <label htmlFor="email" className="form-label">Email</label>
        <input type="text" id="email" onChange={(event) => setEmail(event.target.value)} className="form-control my-2" placeholder="Enter your email"/>
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" id="password" onChange={(event) => setPass(event.target.value)} className="form-control my-2" placeholder="Enter your password"/>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default SignIn;