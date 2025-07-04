import { useSelector, useDispatch } from "react-redux";
import CartProductCard from "../components/CartProductCard";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
        console.log("Cart cleared");
    };
    return (
        <div className="mt-2">
            {cartItems.length ? (
                <button
                    className="p-2 m-2 bg-red-500 text-white rounded-xl"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
            ) : (
                <div className="flex justify-center items-center h-100">
                    <div className="text-6xl items-center text-red-400">
                        NO ITEMS IN THE CART
                    </div>
                </div>
            )}

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
