import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";

const Products = () => {
    return (
        <div className="m-8 w-10/12">
            <div className="text-center mb-8">
                <h2 className="text-2xl mb-4">
                    Products that have been added so far...
                </h2>
                <Link to="/dashboard/addproduct">
                    <button className="btn btn-warning text-lg">
                        <p className="flex gap-4 items-center">
                            <FaPlusCircle />
                            Add New Product
                        </p>
                    </button>
                </Link>
            </div>

            <div className="flex flex-col w-full border-opacity-50">
                <div className="grid h-20 card bg-base-200 rounded-box place-items-center">
                    <h2 className="text-2xl">Imported Products</h2>
                    ....................
                </div>
                <div className="divider"></div>
                <div className="grid h-20 card bg-base-200 rounded-box place-items-center">
                    <h2 className="text-2xl">Exported Products</h2>
                    ........................
                </div>
            </div>
        </div>
    );
};

export default Products;
