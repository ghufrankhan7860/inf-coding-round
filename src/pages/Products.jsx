import { useState, useEffect } from "react";
import fetchProducts from "../APIs/productsAPI";
import ProductCard from "../components/ProductCard";
import { NavLink } from "react-router-dom";
import Shimmer from "../components/Shimmer";
const Products = () => {
    const [productsList, setProductsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getProducts = async (setsetProductsList, setIsLoading) => {
        const data = await fetchProducts();
        setsetProductsList(data);
        setIsLoading(false);
    };

    useEffect(() => {
        getProducts(setProductsList, setIsLoading);
    }, []);

    return (
        <div className="mt-2">
            {isLoading ? (
                <Shimmer />
            ) : (
                <div className="flex flex-wrap ">
                    {productsList.map((productItem) => (
                        <NavLink
                            to={"/desc/" + productItem.id}
                            key={productItem.id + productItem.category}
                            state={productItem}
                        >
                            <ProductCard
                                key={productItem.id}
                                product={productItem}
                            />
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
