import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Blog = () => {
    const serverUrl = "https://anc-global-ltd-server-side.vercel.app";
    const [blogs, setBlogs] = useState([]);

    //------------BLOG FETCH----------------
    useEffect(() => {
        fetch(`${serverUrl}/blogs`)
            .then((res) => res.json())
            .then((blogData) => {
                setBlogs(blogData);
            });
    }, []);


    return (
        <div className="px-8 lg:px-48">
            <div className="mb-5 my-5 lg:my-20 lg:w-3/4 mx-auto">
                <h1 className="text-[#4FACD7] text-3xl lg:text-6xl mb-5 text-center">
                    Our Blogs
                </h1>
                <p className="text-lg lg:text-2xl">
                    # Number of Blogs: {blogs.length}
                </p>
                <hr />
            </div>
            <div className="grid lg:grid-cols-2 gap-5">
                {blogs.map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>
                ))}
            </div>
        </div>
    );
};

export default Blog;