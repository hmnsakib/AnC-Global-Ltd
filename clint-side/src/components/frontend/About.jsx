import home3 from "../../assets/home3.png";
import home4 from "../../assets/home4.png";

const About = () => {
    return (
        <div className="px-48">
            <div className="my-20">
                {/* 2nd top */}
                <div className="mb-5 text-center w-2/4 mx-auto">
                    <h1 className="text-[#4FACD7] text-6xl mb-5">
                        Our Services
                    </h1>
                    <p>
                        Import and export are fundamental pillars of
                        international trade, facilitating the exchange of goods
                        and services between nations.
                    </p>
                </div>
                {/* 2nd bottom */}
                <div className="flex gap-5">
                    <div className="">
                        <div>
                            <img src={home3} alt="" />
                        </div>
                        <div>
                            <h1>
                                Effortlessly Source Global Goods with Our Import
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
                    <div className="">
                        <div>
                            <h1>
                                Effortlessly Source Global Goods with Our Import
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
                        <div>
                            <img src={home4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default About;
