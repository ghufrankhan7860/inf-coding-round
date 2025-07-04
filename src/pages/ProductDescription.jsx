import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../store/cartSlice";


const ProductDescription = () => {
    const location = useLocation();
    const { state } = location;
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(state));
        
    };

    return (
        <div className="flex flex-col items-center mt-2">
            <div className="mt-2  w-1/2">
                <div className="flex justify-center p-2">
                    <img
                        src={state.image}
                        alt="Product-item-image"
                        className="h-70"
                    />
                </div>
                <div className="flex flex-col ">
                    <div className="text-3xl font-medium font-[poppins] p-2 text-gray-900">
                        {state.title}
                    </div>
                    <div className="text-xl font-medium font-[poppins] p-2 text-gray-800">
                        Product Description
                    </div>
                    <div className="font-[verdana] text-sm p-2 text-gray-500  overflow-hidden">
                        {state.description}
                    </div>
                    <div className="flex justify-between gap-2 p-3">
                        <div className=" text-3xl font-medium border-t-1 border-b-1 border-green-700 rounded-xl p-2 text-green-700">
                            ₹{state.price}
                        </div>
                        <button
                            className="bg-yellow-500 p-3 rounded-lg text-yellow-900 hover:cursor-pointer"
                            onClick={handleAddToCart}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProductDescription;
