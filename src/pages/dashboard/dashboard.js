import React, { useEffect, useState } from 'react';

import { BarChart, Line, Bar, LineChart,   XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AiOutlinePauseCircle, AiFillStar } from 'react-icons/ai'
import { BsMessenger } from 'react-icons/bs'
import { FaCloudDownloadAlt } from 'react-icons/fa'
  
import moment from 'moment/moment';
 
const Dashboard = () => {
  const [review, setReview] = useState([]);
  const [key, setKey] = useState({});
  const [count, setCount] = useState(0);
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [amount,setAmount] = useState({})
  const [app, setApp] = useState([]);
  useEffect(() => {
    fetch('https://apporaterapiv11devbymossaddak.pythonanywhere.com/api/app/campaign-review/')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const startDate = new Date(start);
        const endDate = new Date(end);
        
        const filteredData = data?.last_five_days_review
        .filter(item => {
          const itemDate = new Date(item.day);
          
          return   itemDate>=startDate  && itemDate <= endDate;
        });
        console.log(filteredData);
       if(start||end){
        setReview(filteredData)
       }   
     else{
      setReview(data?.last_five_days_review)
     }
     

        setAmount(data)
      })
  }, [start,end])
  useEffect(() => {
    fetch('https://apporaterapiv11devbymossaddak.pythonanywhere.com/api/app/appkeyword-screenshot/')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setKey(data)
      })
  }, [])
  useEffect(() => {
    fetch('https://apporaterapiv11devbymossaddak.pythonanywhere.com/api/app/app/')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setApp(data.data)
      })
  }, [])
 
  useEffect(() => {
    fetch('https://apporaterapiv11devbymossaddak.pythonanywhere.com/api/account/total_user/' )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCount(data?.total_user)
      })
  }, [])
  const formatDateString = (dateString) => {

    const date = moment(dateString.day);
    return `${date.format('MM')} / ${date.format('D')}`;
  };
  
  return (
    <div className='bg-white'>

      <div className='container-sk'>
        <div class="grid sm:grid-cols-2  xs:grid-cols-1 gap-4 place-content-between items-center my-8">
          <div className='text-start' >
            <h2 className='text-2xl font-bold'>Campaigns Score</h2>
          </div>
          <div className='flex sm:h-12 xs:h-2 justify-end items-center'>
            <select className="select selects select-bordered rounded-none h-8 focus:border-none bg-[#eeeeee]  max-w-xs">
              <option disabled selected>App Name</option>
            
               {
                app.map(item=><option value={item.platform}>{item.platform}</option>)
               }
            </select>
            <div className='ml-2 mt-2 h-12'>
              <button className='flex items-center justify-center bg-[#62a9f8]  h-10   px-2 text-[#cbdbf3]'>
                <div className='mx-1'> <AiOutlinePauseCircle /></div>
                <span  >Pause Campaigns</span>
              </button>
            </div>
          </div>
        </div>

        {/* card design  */}
        <div className='mb-1'>
          <h2 className='text-2xl font-bold text-start mt-[0px]'>Your Report</h2>
        </div>
        <div class="grid md:grid-cols-3 sm:grid-cols-2  xs:grid-cols-1 gap-4    ">
          <div className="card w-full bg-[#eeeeee] rounded-none  border-2">
            <div className="card-body">
              <div><BsMessenger size={33} /></div>
              <h2 className="card-title text-[#424243]">{amount?.overall_reviews}</h2>
              <h4 className='text-[#aeb0af] text-start'>Apporter review givens </h4>
            </div>
          </div>
          <div className="card w-full bg-[#eeeeee] rounded-none    border-2">
            <div className="card-body">
              <div><FaCloudDownloadAlt size={33} /></div>
              <h2 className="card-title text-[#424243]">{count ? count : '0'}</h2>
              <h4 className='text-[#aeb0af] text-start'>Install by Apporter users </h4>
            </div>
          </div>
          <div className="card w-full bg-[#eeeeee] rounded-none  border-2">
            <div className="card-body">
              <div><AiFillStar size={33} /></div>
              <h2 className="card-title text-[#8af08d] text-[30px]">12%</h2>
              <h4 className='text-[#aeb0af] text-start'>Important of avg keyword rating </h4>
            </div>
          </div>

        </div>


        <div className='bg-gray-200 p-5  my-8'>
          <div className='my-10 sm:my-20 xs:my-20'>
            <div class="grid sm:grid-cols-2  xs:grid-cols-1 gap-4 place-content-between items-center   ">
              <div className=''>
                <h2 className='text-2xl font-bold text-start'>Review statistics</h2>
              </div>

              <div className='flex md:justify-end'>
                <div className='bg-[#d6d6d6] lg:w-[400px] md:w-[250px] p-2 rounded-xl'>
                  {/* here filter-date classename i declare,, its implement is == share > menu > style.css */}
                  <span className='bg-white p-1 px-3 m-1 rounded-2xl w-[100%] filter-dates'>
                    <input type='date' onChange={e => setStart(e.target.value)} className=' w-[35%]   ' />
                  </span>

                  <span className='bg-white p-1 px-3 m-1 rounded-2xl w-[100%] filter-dates'>  <input type='date' onChange={e => setEnd(e.target.value)} className=' w-[35%]  ' /></span>

                </div>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" aspect={16 / 9}>
            <BarChart
              data={review}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}

            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={(day) => formatDateString(day)} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total_reviews" fill="#70f174" />

            </BarChart>

          </ResponsiveContainer>
        </div>

        <div className='bg-gray-200 p-5 mt-20'>
          <div className='my-10 sm:my-20 xs:my-20'>
            <div class="grid sm:grid-cols-2  xs:grid-cols-1 gap-4 place-content-between   ">
              <div>
                <h2 className='text-2xl font-bold text-start'>Keyword Performance</h2>
              </div>
              <div className=' flex justify-end  '>
                <div className='  flex   items-center    '>
                  <div className='  p-1 m-1 flex items-center mx-1 '> <span className='block w-2 h-2 bg-green-400 rounded-full mx-1 mt-1'></span> keyword</div>

                  <div className='  p-1 m-1 flex items-center '>

                    <span className='block w-2 h-2 bg-orange-400 rounded-full mx-1 mt-1'></span> keyword

                  </div>
                  <div className='  p-1 m-1 flex items-center mx-1'> <span className='block w-2 h-2 bg-yellow-400 rounded-full mx-1 mt-1'></span> keyword</div>
                </div>
              </div>
            </div>
          </div>



          <ResponsiveContainer width="100%" aspect={16 / 9}>
            <LineChart

              data={key?.last_five_days_review}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={(day) => formatDateString(day)} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="total_reviews" stroke="#8884d8" activeDot={{ r: 8 }} />

            </LineChart>
          </ResponsiveContainer>
        </div>



      </div>
    </div>
  );
};

export default Dashboard;