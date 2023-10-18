import { Link, useLoaderData } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import ProductCard from "./ProductCard";

const Products = () => {
    const products = useLoaderData();
    //console.log(products)
    const importedProducts = products.filter(
        (product) => product.productType === "Import"
    );
    //console.log(importedProducts);

    const exportedProducts = products.filter(
        (product) => product.productType === "Export"
    );
    //console.log(importedProducts);
    return (
        <div className="m-8 w-4/5">
            <div className="text-center mb-4">
                <h2 className="text-2xl mb-2">
                    Products that have been added so far...
                </h2>
                <Link to="/dashboard/addproduct">
                    <button className="btn btn-warning text-lg">
                        <p className="flex gap-4 items-center">
                            <FaPlusCircle />
                            Add New Product
                        </p>
                    </button>
                </Link>
            </div>

            <div className="p-8 bg-base-200 rounded-box">
                <h2 className="text-2xl">
                    # Imported Products: {importedProducts.length}
                </h2>
                <div className="divider"></div>
                <div className="grid grid-cols-3 gap-8">
                    {importedProducts.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        ></ProductCard>
                    ))}
                </div>
            </div>

            <div className="divider"></div>
            <div className="p-8 bg-base-200 rounded-box">
                <h2 className="text-2xl">
                    # Exported Products: {exportedProducts.length}
                </h2>
                <div className="divider"></div>
                <div className="grid grid-cols-3 gap-8">
                    {exportedProducts.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        ></ProductCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
