import React, { useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../assets/images/logo.png'
import './style.css'
import { hoverEffectLink, hoverEffectLinkMenu, hoverEffectSpan, hoverEffectSpanMenu } from './menuClass';
import { useCookies } from 'react-cookie';
const Menubar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
 
  const handleLogout = e =>{
    removeCookie('token');
    window.location.reload()
  }
  let content;
  if(true){
   content =  <div className='  '>
  <div className='  mx-auto  bg-[#081633]'>
    <div className='container-sk'>
      <div className="navbar  ">
        {/* drawer menu start here  */}
        <div className="navbar-start  ">
          <div className="dropdown  ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
              <Link to="/dashboard"  className={hoverEffectLink}>
                Dashboard
                <span className={hoverEffectSpan} ></span>
              </Link>
              <Link to="/packege"  className={hoverEffectLink}>
                Packeges
                <span className={hoverEffectSpan} ></span>
              </Link>
              <Link to="/dashboard/apps"  className={hoverEffectLink}>
                Apps
                <span className={hoverEffectSpan} ></span>
              </Link>
              <Link to="/keyword"  className={hoverEffectLink}>
                Keywords
                <span className={hoverEffectSpan} ></span>
              </Link>
              <button onClick={handleLogout}  className={hoverEffectLink}>
                Log out
                <span className={hoverEffectSpan} ></span>
              </button>
            </ul>
          </div>

          <img src={img} width="140px" alt='loading ...' />

        </div>

        <div className="navbar-end hidden lg:flex  ">
          <ul className="menu menu-horizontal px-1">
            <Link to="/dashboard"   className={hoverEffectLinkMenu}>
              Dashboard
              <span className={hoverEffectSpanMenu} ></span>
            </Link>
            <Link to="/pakege"  className={hoverEffectLinkMenu}>
              Packeges
              <span className={hoverEffectSpanMenu} ></span>
            </Link>
            <Link to="/dashboard/apps"   className={hoverEffectLinkMenu}>
              Apps
              <span className={hoverEffectSpanMenu} ></span>
            </Link>
            <Link to="/keyword"  className={hoverEffectLinkMenu}>
              Keywords
              <span className={hoverEffectSpanMenu} ></span>
            </Link>
            <button  onClick={handleLogout}  className={hoverEffectLinkMenu}>
              Log out
              <span className={hoverEffectSpanMenu} ></span>
            </button>
          </ul>
        </div>

      </div>
    </div>
  </div>
  <Outlet />
</div>}
  return (
   <>{content}</>
  );
};

export default Menubar;








