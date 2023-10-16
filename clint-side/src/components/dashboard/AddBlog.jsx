import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

const AddBlog = () => {
    const editor = useRef(null);
    const [content, setContent] = useState("");

    return (
        <div className="m-8 p-8 w-10/12  bg-base-200 rounded-box">
            <h2 className="text-2xl mb-4 text-center">Add New Blog</h2>
            <form className="">
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
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Title:</span>
                    </label>
                    <input
                        type="text"
                        name="title"
                        placeholder=""
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">
                            Select Product:
                        </span>
                    </label>
                    <select className="select select-bordered" name="type">
                        <option disabled selected value="">
                            Pick a Product
                        </option>
                        {/* have to add options from DB*/}
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Title:</span>
                    </label>
                    {/* <input
                        type="text"
                        name="title"
                        placeholder=""
                        className="input input-bordered"
                    /> */}
                    <JoditEditor
                        ref={editor}
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
