import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Sidebar2 from "./Sidebar2";
// import Sidebar from "./Sidebar";

const Dashboard = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <div className="flex">
                <Sidebar2></Sidebar2>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
