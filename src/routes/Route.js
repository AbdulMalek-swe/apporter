import SignIn from "pages/home/login/SignIn";

const { default: Campaigns } = require("pages/Campaigns/Campaigns");
const { default: Dashboard } = require("pages/dashboard/dashboard");
const { default: Menubar } = require("pages/share/menu/Menubar");
const { createBrowserRouter } = require("react-router-dom");

const route = createBrowserRouter([
    {
        path:"/",
        element:<Menubar/>,
        children:[
         {
               path:"dashboard",
            element:<Dashboard/>
        },
        {
            path:"apps",
         element:<Campaigns/>
     }
     
        ]
        
    },
    {
       path:"/login",
       element:<SignIn/>
    }
])
export default route;