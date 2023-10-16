import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>this is home</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
