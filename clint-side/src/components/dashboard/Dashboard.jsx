import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Sidebar2 from "./Sidebar2";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <div className="flex">
                <Sidebar2></Sidebar2>
                <Outlet></Outlet>
                <Toaster
                    position="bottom-center"
                    toastOptions={{ duration: 5000 }}
                />
            </div>
        </div>
    );
};

export default Dashboard;
