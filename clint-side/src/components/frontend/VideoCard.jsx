const VideoCard = ({ blog }) => {
    //console.log(blog)

    function createMarkup() {
        return { __html: blog.videoUrl };
    }

    return (
        <div className="card w-fit bg-base-100 shadow-xl">
            <p dangerouslySetInnerHTML={createMarkup()}></p>
            <h2 className="card-title">{blog.blogTitle}</h2>
        </div>
    );
};

export default VideoCard;
