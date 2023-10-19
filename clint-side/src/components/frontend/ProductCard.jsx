import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
    const whatapp = "https://wa.me/+8801798759422";
    //console.log(product);
    const id = product._id;

    return (
        <div className="card w-92 bg-base-100 shadow-xl">
            <div>
                <img src={product.imageUrl} alt="" className="rounded-xl" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{product.productTitle}</h2>
                <div className="card-actions grid grid-cols-2 justify-between">
                    <Link
                        to={whatapp}
                        className="btn bg-[#4FACD7] text-white mr-5"
                    >
                        <FaWhatsapp />
                        Call for Price
                    </Link>
                    <Link
                        to= {`/blogs/${id}`}
                        className="btn btn-outline btn-info text-white"
                    >
                        See Blog
                    </Link>
                </div>
            </div>
        </div>
    );
};
ProductCard.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProductCard;
