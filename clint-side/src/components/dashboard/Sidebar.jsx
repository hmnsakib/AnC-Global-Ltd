import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <div className="bg-sky-200 px-10 py-6 shadow-xl flex justify-between border-b-2 border-b-neutral-400">
                <Link to="/dashboard">
                    <h1 className="text-3xl font-bold">
                        AnC Global (Ptv.) Ltd
                    </h1>
                    <h2 className="text-2xl">Dashboard</h2>
                </Link>
                <div className="flex items-center">
                    <div>
                        <h2 className="">Logged in as,</h2>
                        <h1 className="text-xl">User name</h1>
                    </div>
                    <button className="btn ml-8">Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
