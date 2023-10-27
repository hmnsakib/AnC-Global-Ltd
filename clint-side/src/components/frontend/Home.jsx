import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import home2 from "../../assets/home2.jpg";
import home3 from "../../assets/home3.png";
import home4 from "../../assets/home4.png";
import { useEffect, useState } from "react";
import ProductCard from "../frontend/ProductCard";
import BlogCard from "../frontend/BlogCard";
import VideoCard from "./VideoCard";

const Home = () => {
    const whatapp = "https://wa.me/+8801798759422";
    const serverUrl = "https://anc-global-ltd-server-side.vercel.app";
    const [products, setProducts] = useState([]);
    const [blogs, setBlogs] = useState([]);

    //---------PRODUCTS FETCH ----------
    useEffect(() => {
        fetch(`${serverUrl}/products`)
            .then((res) => res.json())
            .then((productData) => {
                setProducts(productData);
            });
    }, []);
    //console.log(products);

    //------------BLOG FETCH----------------
    useEffect(() => {
        fetch(`${serverUrl}/blogs`)
            .then((res) => res.json())
            .then((blogData) => {
                setBlogs(blogData);
            });
    }, []);
    //console.log(blogs);

    return (
        <div className="px-8 lg:px-48">
            {/* 1st section- Hero */}
            <div className="my-5 lg:my-20 lg:flex items-center gap-5">
                {/* 1st left */}
                <div className="">
                    <div className="py-3 lg:py-12">
                        <p className="mb-5 text-[#4FACD7]">
                            All kind of import-export items
                        </p>
                        <h1 className="text-3xl lg:text-6xl font-semibold mb-5">
                            A trustworthy <br />
                            <span className="text-[#4FACD7] font-bold">
                                Importer Exporter
                            </span>
                            <br />
                            in Bangladesh
                        </h1>
                        <p>
                            Explore Worldwide Business Opportunities with Our
                            Import-Export Expertise. Start Your Global Journey
                            Here.
                        </p>
                    </div>
                    <div>
                        <Link
                            to="service"
                            className="btn bg-[#4FACD7] text-white mr-5 mb-5"
                        >
                            Our Procuct
                        </Link>
                        <Link
                            to={whatapp}
                            className="btn btn-outline btn-info text-white mr-5 mb-5"
                        >
                            <FaWhatsapp />
                            Call for Price
                        </Link>
                    </div>
                </div>
                {/* 1st right */}
                <div>
                    <img className="rounded-lg" src={home2} alt="" />
                </div>
            </div>
            <div className="divider"></div>
            {/* 2nd section- Our Services */}
            <div className="my-5 lg:my-20">
                {/* 2nd top */}
                <div className="mb-5 text-center lg:w-2/4 mx-auto">
                    <h1 className="text-[#4FACD7] text-3xl lg:text-6xl mb-5">
                        Our Services
                    </h1>
                    <p>
                        Import and export are fundamental pillars of
                        international trade, facilitating the exchange of goods
                        and services between nations.
                    </p>
                </div>
                {/* 2nd bottom */}
                <div className="lg:flex gap-5">
                    <div className="">
                        <div>
                            <img src={home3} alt="" />
                        </div>
                        <div>
                            <h1 className="mb-5">
                                Effortlessly Source Global Goods with Our
                                <span className="text-[#4FACD7] font-semibold">
                                    {" "}
                                    Import{" "}
                                </span>
                                Expertise.
                            </h1>
                            <p>
                                Streamline your international sourcing with our
                                import services, connecting you to quality
                                products from around the world. Our experienced
                                team handles customs, logistics, and compliance,
                                ensuring a hassle-free import process. Trust us
                                to bring the world to your doorstep, so your
                                business can thrive with ease in the global
                                marketplace.
                            </p>
                        </div>
                    </div>
                    <div className="lg:flex lg:flex-col-reverse">
                        <div>
                            <img src={home4} alt="" />
                        </div>
                        <div>
                            <h1 className="mb-5">
                                Effortlessly Source Global Goods with Our{" "}
                                <span className="text-[#4FACD7] font-semibold">
                                    {" "}
                                    Export{" "}
                                </span>
                                Expertise.
                            </h1>
                            <p>
                                Streamline your international sourcing with our
                                import services, connecting you to quality
                                products from around the world. Our experienced
                                team handles customs, logistics, and compliance,
                                ensuring a hassle-free import process. Trust us
                                to bring the world to your doorstep, so your
                                business can thrive with ease in the global
                                marketplace.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            {/* 3rd section- Our Products */}
            <div className="my-5 lg:my-20">
                {/* 3rd top */}
                <div className="mb-5 text-center lg:w-2/4 mx-auto">
                    <h1 className="text-[#4FACD7] text-3xl lg:text-6xl mb-5">
                        Our Products
                    </h1>
                    <p>
                        Import and export are fundamental pillars of
                        international trade, facilitating the exchange of goods
                        and services between nations.
                    </p>
                </div>
                {/* 3rd bottom */}
                <div className="grid lg:grid-cols-3 gap-5">
                    {products.slice(0, 6).map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        ></ProductCard>
                    ))}
                </div>
            </div>
            <div className="divider"></div>
            {/* 4th section- Our Blogs */}
            <div className="my-5 lg:my-20">
                {/* 3rd top */}
                <div className="mb-5 text-center lg:w-2/4 mx-auto">
                    <h1 className="text-[#4FACD7] text-3xl lg:text-6xl mb-5">
                        Our Blogs
                    </h1>
                    <p>
                        Import and export are fundamental pillars of
                        international trade, facilitating the exchange of goods
                        and services between nations.
                    </p>
                </div>
                {/* 3rd bottom */}
                <div className="grid lg:grid-cols-3 gap-5">
                    {blogs.slice(0, 3).map((blog) => (
                        <BlogCard key={blog._id} blog={blog}></BlogCard>
                    ))}
                </div>
            </div>
            <div className="divider"></div>
            {/* 4th section- Watch Our Videos */}
            <div className="my-5 hidden md:block lg:my-20">
                {/* 3rd top */}
                <div className="mb-5 text-center lg:w-2/4 mx-auto">
                    <h1 className="text-[#4FACD7] text-3xl lg:text-6xl mb-5">
                        Watch Our Videos
                    </h1>
                    <p>
                        Import and export are fundamental pillars of
                        international trade, facilitating the exchange of goods
                        and services between nations.
                    </p>
                </div>
                {/* 3rd bottom */}
                <div className="grid lg:grid-cols-2 gap-5">
                    {}
                    {blogs.map((blog) => (
                        <VideoCard key={blog._id} blog={blog}></VideoCard>
                    ))}
                </div>
            </div>
            {/* footer */}
        </div>
    );
};

export default Home;
