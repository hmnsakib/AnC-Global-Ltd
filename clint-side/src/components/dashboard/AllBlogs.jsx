import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";

const AllBlogs = () => {
    const loadedBlogs = useLoaderData();
    //console.log(loadedBlogs);
    return (
        <div className="m-8 w-4/5">
            <div className="text-center mb-4">
                <h2 className="text-2xl mb-2">
                    Blogs that have been added so far...
                </h2>
            </div>

            <div className="p-8 bg-base-200 rounded-box">
                <h2 className="text-2xl">
                    # Total Blogs: {loadedBlogs.length}
                </h2>
                <div className="divider"></div>
                <div className="grid grid-cols-3 gap-8">
                    {loadedBlogs.map((blogs) => (
                        <BlogCard key={blogs._id} blogs={blogs}></BlogCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;
