const ProductCard = ({ product }) => {
    return (
        <div className="flex flex-col items-center h-90 w-70 shadow-lg rounded-lg border-1 m-2 border-yellow-400">
            <img
                src={product.image}
                alt="product-image"
                className="mt-3 h-40"
            />

            <div className="p-2">
                <div className=" font-medium p-2 max-h-20">{product.title}</div>
                <div className="text-xs p-2 text-gray-700 max-h-10 overflow-hidden">
                    {product.description}
                </div>
                <div className="flex justify-between gap-2 p-3">
                    <div className="text-green-700">₹{product.price}</div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
