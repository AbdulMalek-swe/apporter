import logo from './logo.svg';
import './App.css';
import SignIn from 'pages/home/login/SignIn';
import Dashboard from 'pages/dashboard/dashboard';
import Menubar from 'pages/share/menu/Menubar';
import Campaigns from 'pages/Campaigns/Campaigns';
import { RouterProvider } from 'react-router-dom';
import route from 'routes/Route';

function App() {
  return (
    <div className="App">
      <RouterProvider router={route}>
            
      </RouterProvider>
     {/* <SignIn/> */}
     {/* <Dashboard/> */}
     {/* <Menubar/> */}
     {/* <Campaigns/> */}
    </div>
  );
}

export default App;
