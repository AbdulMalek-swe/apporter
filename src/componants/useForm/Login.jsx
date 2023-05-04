import React, { useContext, useEffect, useState } from 'react';
import pic from '../../assets/images/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from 'context/authContext';
import { toast } from 'react-hot-toast';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import load from '../../assets/images/spinner-sm.gif'
import { useCookies } from 'react-cookie';
const Login = () => {
  const formData = new FormData();
  const {register, handleSubmit, watch,} = useForm(); 
  const {loginData} = useContext(AuthContext)
  const [cookie,setCookie] = useCookies(["token"])
  const search = useLocation().search ;
  console.log(search);
//   console.log(search);
  const redirects = search? search.split("=")[1] : "/";
  let navigate = useNavigate()
 
const token = cookie['token'];
useEffect(()=>{
  if(token){
    navigate("/dashboard")
  }
},[navigate,token])
 
  const [loader,setLoader] = useState(false);
  const onSubmit = data => {
     setLoader(true)
    formData.append("password",data.password)
    formData.append("username",data.username)
    fetch('https://apporaterapiv11devbymossaddak.pythonanywhere.com/api/account/login/', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.data);
        if(data.data.token){
          navigate("/dashboard")
          loginData(data.data)
          setLoader(false)
          // toast.success('Successfully login');
        }
        else if(data?.data?.non_field_errors){
          toast.error(data?.data?.non_field_errors[0])
        }
        else{
          toast.error("wrong password")
        }
        setLoader(false)
      })
      .catch(error =>  {
        toast.error("Log in failed")
        setLoader(false)
      });
  }
  // google login field 
  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      // localStorage.setItem("access",tokenResponse.access_token)
      setCookie("token",tokenResponse.access_token,{maxAge:3600*24*3})
      navigate("/dashboard")
    }
  });

    return (
      <>
      {
         loader && <div className='flex items-center justify-center h-screen'><img src={load} alt="loading..." width="40px" height="40px"/></div>
     }
     {
     !loader  &&
       <div class="h-screen md:flex">
       <div class="flex items-center justify-center   py-10 md:w-1/2 h-full bg-[#041532]">
         <div>
       <form  onSubmit={handleSubmit(onSubmit)} >
             <div className='text-left'>
             <h1 class="mb-1 text-2xl font-bold text-white">Sign In</h1>
             </div>
               <div class="mb-4 flex items-center flex-col rounded-xl  bg-blue ">
  
               <input type="text" placeholder="username" className="input input-bordered   w-full max-w-xs focus:outline-none border-2 inputs text-white border-white mb-1 mt-2"  {...register("username")} />  
               <input type="password" placeholder="password" className="input input-bordered   w-full max-w-xs focus:outline-none border-2 inputs text-white border-white mb- mt-2"  {...register("password")} />  
               
               </div>
               <button type="submit" class="mb-1 mt-2 block w-full rounded-2xl   py-2 font-semibold   bg-white text-gray-700 hover:bg-blue-400 hover:text-white"  >Login</button>
              
             </form>
            
                 <div class="  ">
                    
                    
                 <button class="group my-2 py-2 rounded-2xl border-2 border-gray-300 px-6 transition duration-300 focus:bg-blue-50 active:bg-blue-100 bg-white hover:text-gray-400 w-full text-center hover:bg-[#bdbdbd64] hover:text-blue-700" onClick={() => login()}>
             <div class="relative flex flex-wrap items-center   gap-4 justify-center  ">
               <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" class="left-0 w-5" alt="google logo" />
               <span class="block text-sm font-semibold   sm:text-base ">Google </span>
 
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
     }
      </>
       

    );
};

export default Login;