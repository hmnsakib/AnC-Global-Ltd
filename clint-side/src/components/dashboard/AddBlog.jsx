import JoditEditor from "jodit-react";
import toast from "react-hot-toast";
import { useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import moment from "moment";

const AddBlog = () => {
    const serverUrl = "http://localhost:8000";
    const loadedproduct = useLoaderData();
    //console.log(loadedproduct);
    const { productTitle, imageUrl, _id } = loadedproduct;
    //console.log(productTitle, imageUrl, _id);

    const editor = useRef(null);
    const [content, setContent] = useState("");

    const handleAddBlog = (event, productInfo) => {
        console.log(productInfo);
        event.preventDefault();
        const form = event.target;
        const productTitle = form.productTitle.value;
        const productId = form.productId.value;
        const imageUrl = form.imageUrl.value;
        const blogTitle = form.blogTitle.value;
        const blogBody = content;
        const publishDate = moment().format("LL (LT)");

        const blogDetails = {
            productTitle,
            productId,
            imageUrl,
            blogTitle,
            blogBody,
            publishDate,
        };
        //console.log(blogDetails);

        fetch(`${serverUrl}/addblog`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(blogDetails),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    toast.success("'Add Blog' Successful !");
                    form.reset();
                } else {
                    toast.error("'Add Blog' Failed !");
                }
            });
    };

    return (
        <div className="m-8 p-8 w-10/12  bg-base-200 rounded-box">
            <h2 className="text-2xl mb-4 text-center">Add New Blog</h2>
            <form className="" onSubmit={handleAddBlog}>
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">
                            Upload Image:
                        </span>
                    </label>
                    <input
                        type="file"
                        name="image"
                        className="file-input w-full max-w-xs"
                    />
                </div> */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">
                            Product Title:
                        </span>
                    </label>
                    <input
                        type="text"
                        name="productTitle"
                        defaultValue={productTitle}
                        readOnly
                        placeholder=""
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Product ID:</span>
                    </label>
                    <input
                        type="text"
                        name="productId"
                        defaultValue={_id}
                        readOnly
                        placeholder=""
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Image URL:</span>
                    </label>
                    <input
                        type="text"
                        name="imageUrl"
                        defaultValue={imageUrl}
                        readOnly
                        placeholder=""
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Blog Title:</span>
                    </label>
                    <input
                        type="text"
                        name="blogTitle"
                        placeholder=""
                        className="input input-bordered"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg"> Blog Body:</span>
                    </label>
                    {/* <input
                        type="text"
                        name="title"
                        placeholder=""
                        className="input input-bordered"
                    /> */}
                    <JoditEditor
                        ref={editor}
                        //name={blogBody}
                        value={content}
                        onChange={(newContent) => setContent(newContent)}
                    />
                </div>
                <button className="btn btn-warning text-lg text-center my-8">
                    <p className="flex gap-4 items-center">Submit</p>
                </button>
            </form>
        </div>
    );
};

export default AddBlog;
