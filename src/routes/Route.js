import VerifyUser from "componants/useForm/VerifyUser";
import SignIn from "pages/home/login/SignIn";
import SignUp from "pages/home/register/SignUp";
import ProtectedRoute from "./protectedRoute/protectedRoute";
 
const { default: Campaigns } = require("pages/Campaigns/Campaigns");
const { default: Dashboard } = require("pages/dashboard/dashboard");
const { default: Menubar } = require("pages/share/menu/Menubar");
const { createBrowserRouter } = require("react-router-dom");
 
const route = createBrowserRouter([
    {
        path: "dashboard",
        element:   <ProtectedRoute><Menubar/></ProtectedRoute>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            { 
                path: "/dashboard/apps",
                element: <Campaigns />
            }
        ]

    },
    {
        path: "/",
        element: <SignIn />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/verify",
        element: <VerifyUser />
    }
])
export default route;