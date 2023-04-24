import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import img from '../../../assets/images/logo.png'
const Menubar = () => {
    return (
        <div className='  '>
            <div className='  mx-auto  bg-[#081633]'>
            <div className='container'>
         <div className="navbar  ">
          
  <div className="navbar-start  ">
    <div className="dropdown  ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/dashboard"> Dashboard</Link> </li>
        <li><Link  > Packeges</Link> </li>
        <li><Link to="/apps"> Apps</Link> </li>
        <li><Link  > Keywords</Link> </li>
        <li><Link to="/login"> Sign In</Link> </li>
      </ul>
    </div>
     
      <img src={img} width="140px"/>
     
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to="/dashboard" className='text-white'> Dashboard</Link> </li>
    <li><Link  className='text-white'> Packeges</Link> </li>
    <li><Link to="/Apps" className='text-white'> Apps</Link> </li>
    <li><Link  className='text-white'> Keywords</Link> </li>
    <li><Link to="/login" className='text-white'> Sign In</Link> </li>
    </ul>
  </div>
  
</div>
</div>
</div>
<Outlet/>
        </div>
    );
};

export default Menubar;