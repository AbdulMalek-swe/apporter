import React, { useEffect, useState } from 'react';
import { AiFillYoutube, AiOutlineDelete, AiOutlinePauseCircle, AiOutlinePlusCircle } from 'react-icons/ai';

const Campaigns = () => {
    const [data,setData] = useState([]);
   
    useEffect(()=>{
      fetch('https://mossaddakdevelopedapp.pythonanywhere.com/api/app/app-screenshot/')
      .then(res=>res.json())
      .then(data=>{
        setData(data.data)
      })
    },[])
    return (
        <div className=" ">
            <div className='container-sk'>
                <div class="grid lg:grid-cols-2 md:grid-cols-1 place-content-between gap-4 my-8 ">
                    <div className='flex'>
                        <h1 className='text-3xl font-bold'>Apps </h1>
                        <button className='flex items-center justify-center ml-1 bg-black text-white px-3 py-0 rounded text-[12px]'> <AiOutlinePlusCircle /><span>Add App</span></button>
                    </div>
                    <div className='flex lg:justify-end'>
                        <div className='flex lg:flex-row flex-col'>
                            <button className='flex items-center justify-center bg-[#fa4f4f] h-8 py-1 px-3 m-1'>
                                <div className='mt-1'> <AiOutlineDelete /></div>
                                <span  >Remove Apps</span>
                            </button>
                            <button className='flex item-center justify-center bg-[#5db4fd] h-8 py-1  px-3 m-1'>
                                <div className='mt-1 '> <AiFillYoutube /></div>
                                <span  >Ressume Campaigns</span>
                            </button>
                            <button className='flex item-center justify-center bg-[#fabf4d] h-8 py-1 px-3 m-1'>
                                <div className='mt-1'> <AiOutlinePauseCircle /></div>
                                <span  >Pause Campaigns</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='overflow-x-scroll'>
                <table className="table w-full overflow-x-auto">
                    {/* head */}
                    <thead>
                        <tr>

                            <th className='text-black font-extrabold'>App Name</th>
                            <th className='text-black font-extrabold'>Packege</th>
                            <th className='text-black font-extrabold'>Reviews</th>
                            <th className='text-black font-extrabold'>Installs</th>
                            <th className='text-black font-extrabold'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((i, item) => <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <label>
                                            <input type="checkbox" className="checkbox font-[12px]" />
                                        </label>
                                        <div>
                                            <div className="font-bold text-gray-500">{i.title}</div>
                                        </div>
                                    </div>
                                </td>
                              
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold text-gray-500">{i.score}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold text-gray-500">{i.reviews}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold text-gray-500">{i.installs}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>

                                            {
                                                item % 3 == 0 && <div className="font-bold text-gray-500 bg-[#fabf4d] px-2">paused</div>
                                            }
                                            {
                                                item % 3 == 1 && <div className="font-bold text-gray-500 bg-[#5db4fd] px-2">Ongoing</div>
                                            }
                                            {
                                                item % 3 == 2 && <div className="font-bold text-gray-500 bg-[#62f19d] px-2">Completed</div>
                                            }
                                        </div>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                    {/* foot */}


                </table>
                </div>
            </div>
        </div>
    );
};

export default Campaigns;