import toast from "react-hot-toast";
import { Link } from "react-router-dom";
//import AddBlog from "./AddBlog";

const ProductCard = (product) => {
    const serverUrl = "https://anc-global-ltd-server-side.vercel.app";
    const id = product.product._id;

    const handleDelete = (id) => {
        //console.log(id)
        fetch(`${serverUrl}/products/${id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => {
                //console.log(data);
                if (data.deletedCount > 0) {
                    // const remaining = productState.filter(
                    //     (product) => product !== id
                    // );
                    //setProductState(remaining);
                    toast.success("'Product Delete' Successful !");
                } else {
                    toast.error("'Product Delete' Failed !");
                }
            });
    };

    return (
        <div className="card bg-base-100 shadow-xl">
            <div>
                <img src={product.product.imageUrl} alt="" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{product.product.productTitle}</h2>
                <p>Category: {product.product.productCategory}</p>
                <p>Business Type: {product.product.productType}</p>
                <div className="card-actions justify-end">
                    {/* {<AddBlog id={id}></AddBlog>} */}
                    <Link to={`/dashboard/addblog/${id}`}>
                        <button className="btn btn-outline btn-info">
                            Add Blog
                        </button>
                    </Link>
                    <button
                        onClick={() => handleDelete(id)}
                        className="btn btn-outline btn-error"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
