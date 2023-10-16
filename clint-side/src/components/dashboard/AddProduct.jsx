
const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const title = event.target.form.name.value;
        const category = event.target.form.category.value;
        const type = event.target.form.type.value;
        const image = event.target.form.image.value;
        const productDetails = { title, category, type, image }
        
        
    }



    return (
        <div className="m-8 p-8 w-10/12  bg-base-200 rounded-box">
            <h2 className="text-2xl mb-4 text-center">Add New Product</h2>
            <form className="" onSubmit={handleAddProduct}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Title:</span>
                    </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Men t-shirt for winter, Original head light of Yamaha FZS V3, Fresh Rupali Mango etc."
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
                        name="category"
                        placeholder="T-Shirt, Cole, Motor Parts, Fertilizer etc."
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
                        name="type"
                        required
                        >
                        <option disabled selected>
                            Select a Type
                        </option>
                        <option value="import">Import</option>
                        <option value ="export">Export</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">
                            Upload Image:
                        </span>
                    </label>
                    <input
                        type="file"
                        name="image"
                        className="file-input w-full max-w-xs"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-warning text-lg text-center my-8">
                    <p className="flex gap-4 items-center">Submit</p>
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
