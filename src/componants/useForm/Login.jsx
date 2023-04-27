import React, { useContext, useState } from 'react';
import pic from '../../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from 'context/authContext';
import { toast } from 'react-hot-toast';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
const Login = () => {
  const formData = new FormData();
  const {register, handleSubmit, watch,} = useForm(); 
  const {loginData} = useContext(AuthContext)
  const navigate = useNavigate()
  const onSubmit = data => {
     
    formData.append("password",data.password)
    formData.append("username",data.username)
    
    fetch('https://mossaddakdevelopedapp.pythonanywhere.com/api/account/login/', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
      
        loginData(data.data)
        if(data.data.token){
          navigate("/dashboard")
          toast.success('Successfully login');
        }
       
      })
      .catch(error => console.log(error));
  }
  // google login field 
  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      localStorage.setItem("access",tokenResponse.access_token)
      navigate("/dashboard")
    }
  });

    return (
        <div class="h-screen md:flex">
      <div class="flex items-center justify-center   py-10 md:w-1/2 h-full bg-[#041532]">
        <div>
      <form  onSubmit={handleSubmit(onSubmit)} >
            <div className='text-left'>
            <h1 class="mb-1 text-2xl font-bold text-white">Sign In</h1>
            </div>
              <div class="mb-4 flex items-center flex-col rounded-xl  bg-blue ">
 
              <input type="text" placeholder="username" className="input input-bordered   w-full max-w-xs focus:outline-none border-2 inputs text-white border-white mt-1"  {...register("username")} />  
              <input type="password" placeholder="password" className="input input-bordered   w-full max-w-xs focus:outline-none border-2 inputs text-white border-white mt-1"  {...register("password")} />  
              
              </div>
              <button type="submit" class="mb-2 mt-4 block w-full rounded-2xl   py-2 font-semibold   bg-white text-gray-400"  >Login</button>
             
            </form>
           
                <div class="  ">
                   
                   
                <button class="group my-4 py-2 rounded-2xl border-2 border-gray-300 px-6 transition duration-300 focus:bg-blue-50 active:bg-blue-100 bg-white hover:text-gray-400 w-full text-center" onClick={() => login()}>
            <div class="relative flex flex-wrap items-center   gap-4 justify-center ">
              <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" class="left-0 w-5" alt="google logo" />
              <span class="block text-sm font-semibold tracking-wide text-gray-400 transition duration-300   sm:text-base ">Google</span>

            </div>
          </button>

                </div>
             
              <div class="my-2 rounded-xl text-gray-300 p-4 text-center   bg-white">
                <p className='text-gray-700'>have an account yet!</p>
                <Link to="/signup"class="font-medium text-blue-500 hover:underline">signup now</Link>
              </div></div>
        </div>
          <div class="bg-[#11213e] i relative hidden w-1/2 items-center justify-around overflow-hidden   md:flex  ">
          <div>
            <img src={pic} alt='loading...'/>
          </div>
        </div>
      </div>

    );
};

export default Login;