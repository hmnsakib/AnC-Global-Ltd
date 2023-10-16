import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


const AllBlogs = () => {
    return (
        <div className="m-8 p-8 w-10/12  bg-base-200 rounded-box">
            <div className="text-center mb-8">
                <h2 className="text-2xl mb-4">
                    Products that have been added so far...
                </h2>
                <Link to="/dashboard/addblog">
                    <button className="btn btn-warning text-lg">
                        <p className="flex gap-4 items-center">
                            <FaPlusCircle />
                            Add New Blog
                        </p>
                    </button>
                </Link>
            </div>
            <div>.....................</div>
        </div>
    );
};

export default AllBlogs;