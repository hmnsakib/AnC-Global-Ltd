import toast from "react-hot-toast";

const BlogCard = (blogs) => {
    //console.log(blogs);
    const serverUrl = "http://localhost:8000";
    const id = blogs.blogs._id;

    const handleDelete = (id) => {
        //console.log(id)
        fetch(`${serverUrl}/blogs/${id}`, {
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

    function createMarkup() {
        return { __html: blogs.blogs.blogBody };
    }
    //console.log(createMarkup());

    return (
        <div className="card bg-base-100 shadow-xl">
            <div>
                <img src={blogs.blogs.imageUrl} alt="" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{blogs.blogs.blogTitle}</h2>
                <p>Product: {blogs.blogs.productTitle}</p>
                <p>Publish Date: {blogs.blogs.publishDate}</p>
                <br />
                <p>Blog Details:</p>
                <div dangerouslySetInnerHTML={createMarkup()}></div>
                <div className="card-actions justify-end">
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

export default BlogCard;
