import { useState, useEffect } from "react";
import fetchProducts from "../APIs/productsAPI";
import ProductCard from "../components/ProductCard";
import { NavLink } from "react-router-dom";

const Products = () => {
    const [productsList, setProductsList] = useState([]);
    const getProducts = async (setsetProductsList) => {
        const data = await fetchProducts();
        setsetProductsList(data);
    };

    useEffect(() => {
        getProducts(setProductsList);
    }, []);

    return (
        <div className="mt-2">
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
        </div>
    );
};

export default Products;
