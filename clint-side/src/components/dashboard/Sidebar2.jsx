import { NavLink } from "react-router-dom";

const Sidebar2 = () => {
    return (
        <div className="bg-sky-200 p-10 shadow-xl w-1/5 h-auto min-h-screen">
            <ul className="text-2xl">
                <li className="m-4">
                    <NavLink
                        //
                        to="products"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Products
                    </NavLink>
                </li>

                <li className="m-4">
                    <NavLink
                        //
                        to="blogs"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Blogs
                    </NavLink>
                </li>

                {/* <li className="m-4">
                    <NavLink
                        //
                        to="users"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Users
                    </NavLink>
                </li>
                <li className="m-4">
                    <NavLink
                        //
                        to="contactinfo"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Contact Info
                    </NavLink>
                </li> */}
            </ul>
        </div>
    );
};

export default Sidebar2;
