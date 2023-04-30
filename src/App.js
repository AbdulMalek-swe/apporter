import './App.css';
import { RouterProvider } from 'react-router-dom';
import route from 'routes/Route';
import { AuthContextProvider } from 'context/authContext';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="App">
   <AuthContextProvider>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <RouterProvider router={route}>
        </RouterProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
