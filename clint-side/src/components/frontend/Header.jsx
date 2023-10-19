import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
    const whatapp = "https://wa.me/+8801798759422";
    return (
        <div className="bg-white px-48">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link to="">Home</Link>
                            </li>
                            <li>
                                <Link to="about">About</Link>
                            </li>
                            <li>
                                <Link to="services">Services</Link>
                            </li>
                            <li>
                                <Link to="blogs">Blogs</Link>
                            </li>
                            <li>
                                <Link to="contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/">
                        <img className="h-12 w-32" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="">Home</Link>
                        </li>
                        <li>
                            <Link to="about">About</Link>
                        </li>
                        <li>
                            <Link to="services">Services</Link>
                        </li>
                        <li>
                            <Link to="blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link to="contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link
                        to={whatapp}
                        className="btn bg-[#4FACD7] btn-active text-white"
                    >
                        <FaWhatsapp />
                        Call for Price
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
