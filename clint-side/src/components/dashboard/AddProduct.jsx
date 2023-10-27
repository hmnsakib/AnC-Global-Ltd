import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const serverUrl = "https://anc-global-ltd-server-side.vercel.app";
    const navigate = useNavigate();

    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const productTitle = form.productTitle.value;
        const imageUrl = form.imageUrl.value;
        const productCategory = form.productCategory.value;
        const productType = form.productType.value;

        const productDetails = {
            productTitle,
            imageUrl,
            productCategory,
            productType,
        };
        console.log(productDetails);

        fetch(`${serverUrl}/addproduct`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(productDetails),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    toast.success("'Add New Product' Successful !");
                    form.reset();
                    navigate("/dashboard/products");
                } else {
                    toast.error("'Add New Product' Failed !");
                }
            });
    };

    return (
        <div className="m-8 p-8 w-4/5  bg-base-200 rounded-box">
            <h2 className="text-2xl mb-4 text-center">Add New Product</h2>

            <form className="" onSubmit={handleAddProduct}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Title:</span>
                    </label>
                    <input
                        type="text"
                        name="productTitle"
                        placeholder="enter product title"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Image URL:</span>
                    </label>
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="enter product image url"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Category:</span>
                    </label>
                    <input
                        type="text"
                        name="productCategory"
                        placeholder="t-shirt, cole, motor parts, fertilizer etc."
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">
                            Business Type:
                        </span>
                    </label>
                    <select
                        className="select select-bordered"
                        name="productType"
                        required
                    >
                        <option disabled selected>
                            Select a Type
                        </option>
                        <option value="Import">Import</option>
                        <option value="Export">Export</option>
                    </select>
                </div>
                <input
                    type="submit"
                    value="Submit"
                    className="btn btn-warning text-lg text-center my-8"
                />
            </form>
        </div>
    );
};

export default AddProduct;
