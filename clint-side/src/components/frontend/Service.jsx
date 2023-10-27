import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Service = () => {
    const serverUrl = "https://anc-global-ltd-server-side.vercel.app";
    const [products, setProducts] = useState([]);

    //---------PRODUCTS FETCH ----------
    useEffect(() => {
        fetch(`${serverUrl}/products`)
            .then((res) => res.json())
            .then((productData) => {
                setProducts(productData);
            });
    }, []);
    //console.log(products);
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
        <div className="px-8 lg:px-48">
            {/* Imported */}
            <div className="mb-5 my-5 lg:my-20 lg:w-3/4 mx-auto">
                <h1 className="text-[#4FACD7] text-3xl lg:text-6xl mb-5 text-center">
                    Our Products (Imported)
                </h1>
                <p className="text-lg lg:text-2xl">
                    # Number of Products: {importedProducts.length}
                </p>
                <hr />
            </div>
            <div className="grid lg:grid-cols-3 gap-5">
                {importedProducts.map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>
                ))}
            </div>
            {/* Exported */}
            <div className="mb-5 my-5 lg:my-20 lg:w-3/4 mx-auto">
                <h1 className="text-[#4FACD7] text-3xl lg:text-6xl mb-5 text-center">
                    Our Products (Exported)
                </h1>
                <p className="text-lg lg:text-2xl">
                    # Number of Products: {exportedProducts.length}
                </p>
                <hr />
            </div>
            <div className="grid lg:grid-cols-3 gap-5">
                {exportedProducts.map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>
                ))}
            </div>
        </div>
    );
};

export default Service;
