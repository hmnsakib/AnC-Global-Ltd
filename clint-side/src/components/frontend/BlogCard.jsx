import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BlogCard = ({ blog }) => {
    //console.log(blog);

    function createMarkup() {
        return { __html: blog.blogBody };
    }

    return (
        <div className="card w-92 bg-base-100 shadow-xl">
            <div>
                <img src={blog.imageUrl} alt="" className="rounded-xl" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{blog.blogTitle}</h2>
                <p dangerouslySetInnerHTML={createMarkup()}></p>
                <div className="card-actions grid grid-cols-2 justify-between">
                    <Link
                        to="blogs"
                        className="btn btn-outline btn-info text-white"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};
BlogCard.propTypes = {
    children: PropTypes.node.isRequired,
};

export default BlogCard;
