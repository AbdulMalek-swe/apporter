import React from 'react';
import { PureComponent } from 'react';
import { BarChart,Line, Bar,LineChart, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AiOutlinePauseCircle } from 'react-icons/ai'
import { BsMessenger } from 'react-icons/bs'
 
const data = [
  {
    name: 'Page A',

    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',

    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',

    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',

    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',

    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',

    pv: 4300,
    amt: 2100,
  },
];
 
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data1 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
    cv:1232
    },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
    cv:123
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
    cv:123
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    cv:129,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    cv:1232,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    cv:1232,
    amt: 2100,
  },
];
const Dashboard = () => {
  return (
    <div className='mt-12 bg-white'>
      <div className='container mx-auto'>
        <div class="grid sm:grid-cols-2  xs:grid-cols-1 gap-4 place-content-between h-12 ">
          <div className='text-start'>
            <h2 className='text-2xl font-bold'>Campaigns Score</h2>
          </div>
          <div className='flex sm:h-12 xs:h-2 justify-end'>
            <select className="select selects select-bordered h-8 focus:border-none   max-w-xs">
              <option disabled selected>App Name</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <div className='ml-2 h-8'>
              <button className='flex item-center justify-center bg-indigo-600 h-8 rounded p-1'>
                <div className='mt-1'> <AiOutlinePauseCircle /></div>
                <span  >Pause Campaigns</span>
              </button>
            </div>
          </div>
        </div>

        {/* card design  */}
        <div className='mt-20'>
          <h2 className='text-2xl font-bold text-start'>Your Report</h2>
        </div>
        <div class="grid md:grid-cols-3 sm:grid-cols-2  xs:grid-cols-1 gap-4 place-content-center  ">
          <div className="card w-full bg-gray-400 shadow-xl border-2">
            <div className="card-body">
              <div><BsMessenger size={33} /></div>
              <h2 className="card-title text-black-500">1232</h2>
              <h4 className='text-black-400 text-start'>If a dog chews shoes whos </h4>
            </div>
          </div>
          <div className="card w-full bg-gray-400 shadow-xl border-2">
            <div className="card-body">
              <div><BsMessenger size={33} /></div>
              <h2 className="card-title text-black-500">1232</h2>
              <h4 className='text-black-400 text-start'>If a dog chews shoes whos </h4>
            </div>
          </div>
          <div className="card w-full bg-gray-400 shadow-xl border-2">
            <div className="card-body">
              <div><BsMessenger size={33} /></div>
              <h2 className="card-title text-black-500">1232</h2>
              <h4 className='text-black-400 text-start'>If a dog chews shoes whos </h4>
            </div>
          </div>

        </div>


        <div className='bg-gray-200 p-5 mt-20'>
          <div className='my-10 sm:my-20 xs:my-20'>
            <div class="grid sm:grid-cols-2  xs:grid-cols-1 gap-4 place-content-between sm:h-12 xs:h-20 ">
              <div>
                <h2 className='text-2xl font-bold text-start'>Review statistics</h2>
              </div>
              <div className='   '>
                <div className='bg-gray-500 flex justify-center items-center w-[70%] rounded-2xl'>
                  <div className='bg-white p-1 m-1 rounded-2xl'>Apr 1, 2023</div>
                  <div className='bg-white p-1 m-1 rounded-2xl'>Apr 1, 2023</div>
                </div>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" aspect={16 / 9}>
            <BarChart

              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}

            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#70f174" />

            </BarChart>

          </ResponsiveContainer>
        </div>

        <div className='bg-gray-200 p-5 mt-20'>
          <div className='my-10 sm:my-20 xs:my-20'>
            <div class="grid sm:grid-cols-2  xs:grid-cols-1 gap-4 place-content-between sm:h-12 xs:h-20 ">
              <div>
                <h2 className='text-2xl font-bold text-start'>Keywor Performance</h2>
              </div>
              <div className='   '>
                <div className='  flex justify-center items-center    '>
                  <div className='  p-1 m-1 flex items-center '> <span className='block w-2 h-2 bg-green-400 rounded-full '></span> keyword</div>
                 
                  <div className='  p-1 m-1 flex items-center '> <span className='block w-2 h-2 bg-orange-400 rounded-full '></span> keyword</div>
                  <div className='  p-1 m-1 flex items-center '> <span className='block w-2 h-2 bg-yellow-400 rounded-full '></span> keyword</div>
                </div>
              </div>
            </div>
          </div>
        

 
          <ResponsiveContainer width="100%" aspect={16 / 9}>
        <LineChart
         
          data={data1}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d"  activeDot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
        </div>



      </div>
    </div>
  );
};

export default Dashboard;