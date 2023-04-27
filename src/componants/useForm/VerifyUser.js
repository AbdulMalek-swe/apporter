import { AuthContext } from 'context/authContext';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const VerifyUser = () => {
    const {loginData} = useContext(AuthContext)
    const formData = new FormData();
  const {register, handleSubmit, watch,} = useForm(); 
   const navigate = useNavigate();
  const onSubmit = data => {
    
    formData.append("otp",data.otp)
    fetch('https://mossaddakdevelopedapp.pythonanywhere.com/api/account/verify/', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
         if(data?.data?.token){
            loginData(data.data)
            navigate("/dashboard")
           toast.success('Successfully logged in!');
         }
         else{
            toast.error("Wrong Otp")
         }
        
      })
      .catch(error => {
        toast.error("Wrong Otp")
      });
  }
    return (
        <div class="h-screen ">
        <div class="flex items-center justify-center   py-10 h-full bg-[#041532]">
            <form  onSubmit={handleSubmit(onSubmit)} >
            <div className='text-left'>
            <h1 class="mb-1 text-2xl font-bold text-white">Otp  </h1>
            </div>
              <div class="mb-4 flex items-center flex-col rounded-xl  bg-blue ">

              <input type="number" placeholder="first name" className="input input-bordered   w-full max-w-xs focus:outline-none border-2 inputs text-white border-white mt-1"  {...register("otp")} />  
                 
              
              </div>
              <button type="submit" class="mb-2 mt-4 block w-full rounded-2xl   py-2 font-semibold   bg-white text-gray-400"  >Submit</button>
              
            </form>
          </div>
            
        </div>
    );
};

export default VerifyUser;