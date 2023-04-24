import React from 'react';
import { AiFillYoutube, AiOutlineDelete, AiOutlinePauseCircle, AiOutlinePlusCircle } from 'react-icons/ai';
 
const Campaigns = () => {
    return (
        <div className="overflow-x-auto w-full mt-2">
            <div className='container mx-auto'>
             <div class="grid lg:grid-cols-2 md:grid-cols-1    gap-4     my-20 ">
          <div className='text-start flex'>
            <h1 className='text-3xl font-bold'>Apps </h1>
            <button className='flex items-center justify-center ml-1 bg-black text-white px-1 rounded'> <AiOutlinePlusCircle /><span>Add App</span></button>
          </div>
          <div className='flex sm:h-12 xs:h-2  '>
           
            <div className='ml-2 h-8 flex'>
              <button className='flex item-center justify-center bg-[#fa4f4f] h-8 rounded p-1 m-1'>
                <div className='mt-1'> <AiOutlineDelete /></div>
                <span  >Remove Apps</span>
              </button>
              <button className='flex item-center justify-center bg-[#5db4fd] h-8 rounded p-1 m-1'>
                <div className='mt-1 '> <AiFillYoutube /></div>
                <span  >Ressume Campaigns</span>
              </button>
              <button className='flex item-center justify-center bg-[#fabf4d] h-8 rounded p-1 m-1'>
                <div className='mt-1'> <AiOutlinePauseCircle /></div>
                <span  >Pause Campaigns</span>
              </button>
            </div>
          </div>
        </div>
            <table className="table w-full">
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
                    {/* row 1 */}

                    {/* row 4 */}
                   {
                    [0,1,2,3,4,5,6,7,8,9].map((item)=> <tr>
                    <th>                  
                        <div className="flex items-center space-x-3">
                        <label>
                            <input type="checkbox"  className="checkbox font-[12px]" />
                        </label>
                            <div>
                                <div className="font-bold text-gray-500">Yancy Tear</div>
                            </div>
                        </div>
                    </th>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div>
                                <div  className="font-bold text-gray-500">Yancy Tear</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div>
                                <div  className="font-bold text-gray-500">Yancy Tear</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div>
                                <div  className="font-bold text-gray-500">Yancy Tear</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div>
                                 
                                {
                                    item%3==0&& <div  className="font-bold text-gray-500 bg-[#fabf4d]">paused</div>
                                }
                                {
                                    item%3==1&& <div  className="font-bold text-gray-500 bg-[#5db4fd]">Ongoing</div>
                                }
                                {
                                    item%3==2&& <div  className="font-bold text-gray-500 bg-[#62f19d]">Completed</div>
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
    );
};

export default Campaigns;