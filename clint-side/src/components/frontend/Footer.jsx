import { Link } from "react-router-dom";
import finalLogo from "../../assets/final_logo.png";

const Footer = () => {
    return (
        <div className="bg-white px-48">
            <div className="grid grid-cols-3 gap-5 mt-20 pt-10 justify-between justify-items-center items-end">
                <div>
                    <img src={finalLogo} alt="" />
                    <p className="mt-5">
                        Phone: +880 1941-406196 <br />
                        Whatsapp: +880 1798-759422
                        <br />
                        E-mail: ancgloballtd@gmail.com <br />
                        Address: Sherkhali, Kotchandpur, Jhenaidah, Dhaka,
                        Bangladesh
                    </p>
                </div>
                <div>
                    <p className="text-lg font-bold">Manu</p>
                    <hr />
                    <ul className="">
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
                <div>
                    <p className="text-lg font-bold">Sequrity</p>
                    <hr />
                    <p>Customer Support</p>
                    <p>Delivery Details</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
            <div className="divider"></div>
            <p className="text-center">
                © Copyright 2022-Present, All Rights Reserved by Anc Global
                (Ptv) Ltd
            </p>
        </div>
    );
};

export default Footer;
