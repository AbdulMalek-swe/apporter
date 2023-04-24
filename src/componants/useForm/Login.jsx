import React from 'react';
import pic from '../../assets/images/logo.png'
const Login = () => {
    return (
        <div class="h-screen md:flex">
      <div class="flex items-center justify-center   py-10 md:w-1/2 h-full bg-[#041532]">
          <form  >
          <div className='text-left'>
          <h1 class="mb-1 text-2xl font-bold text-white">Sign in</h1>
          </div>
            <div class="mb-4 flex items-center rounded-xl  bg-blue ">
            <input type="text" placeholder="example@gmail.com" className="input input-bordered   w-full max-w-xs focus:outline-none border-2 inputs text-white" />
            </div>
            <button type="submit" class="mb-2 mt-4 block w-full rounded-2xl   py-2 font-semibold   bg-white text-gray-400"  >Continue</button>
            <button class="group my-4 py-2 rounded-2xl border-2 border-gray-300 px-6 transition duration-300 focus:bg-blue-50 active:bg-blue-100 bg-white hover:text-gray-400">
              <div class="relative flex flex-wrap items-center justify-between gap-4  ">
                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" class="left-0 w-5" alt="google logo" />
                <span class="block text-sm font-semibold tracking-wide text-gray-400 transition duration-300   sm:text-base ">Signin with Google</span>
              </div>
            </button>
            <div class="my-2 rounded-xl text-gray-300 p-4 text-center   bg-white">
              <p className='text-gray-700'>Don't have an account yet!</p>
              <a href="http://" class="font-medium text-blue-500 underline">signup now</a>
            </div>
          </form>
        </div>
          <div class="bg-[#11213e] i relative hidden w-1/2 items-center justify-around overflow-hidden   md:flex  ">
          <div>
            <img src={pic}/>
          </div>
        </div>
      </div>

    );
};

export default Login;