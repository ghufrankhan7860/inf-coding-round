import { useSelector } from "react-redux";
import CartProductCard from "../components/CartProductCard";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const handleClearCart = () => {};
    return (
        <div className="mt-2">
            <div>
                <button
                    className="p-2 m-2 bg-red-500 text-white rounded-xl"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
            </div>
            <div className="flex flex-wrap ">
                {cartItems.map((productItem) => (
                    <CartProductCard
                        key={productItem.id}
                        product={productItem}
                    />
                ))}
            </div>
        </div>
    );
};

export default Cart;
