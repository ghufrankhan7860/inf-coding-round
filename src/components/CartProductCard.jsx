import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
const CartProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product));
    };
    return (
        <div className="flex flex-col items-center h-90 w-70 shadow-lg rounded-lg border-1 m-2 border-yellow-400">
            <div className="flex justify-center relative w-full">
                <span className="absolute top-2 right-1 p-2 text-yellow-500 bg-yellow-800 rounded-xl ">
                    {product.count}
                </span>
                <img
                    src={product.image}
                    alt="product-image"
                    className="mt-3 h-40"
                />
            </div>

            <div className="p-2">
                <div className=" font-medium p-2">{product.title}</div>
                <div className="text-xs p-2 text-gray-700 max-h-10 overflow-hidden">
                    {product.description}
                </div>
                <div className="flex justify-between gap-2 p-3">
                    <div className="text-green-700">₹{product.price}</div>
                    <button
                        className="bg-yellow-500 p-3 rounded-lg text-yellow-900"
                        onClick={handleRemoveFromCart}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartProductCard;
