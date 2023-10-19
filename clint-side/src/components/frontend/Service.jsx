import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Service = () => {
    const serverUrl = "http://localhost:8000";
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
        <div className="px-48">
            {/* Imported */}
            <div className="mb-5 my-20 w-3/4 mx-auto">
                <h1 className="text-[#4FACD7] text-6xl mb-5 text-center">
                    Our Products (Imported)
                </h1>
                <p className="text-2xl">
                    # Number of Products: {importedProducts.length}
                </p>
                <hr />
            </div>
            <div className="grid grid-cols-3 gap-5">
                {importedProducts.map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>
                ))}
            </div>
            {/* Exported */}
            <div className="mb-5 my-20 w-3/4 mx-auto">
                <h1 className="text-[#4FACD7] text-6xl mb-5 text-center">
                    Our Products (Exported)
                </h1>
                <p className="text-2xl">
                    # Number of Products: {exportedProducts.length}
                </p>
                <hr />
            </div>
            <div className="grid grid-cols-3 gap-5">
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