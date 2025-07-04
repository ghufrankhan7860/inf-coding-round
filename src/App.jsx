import fetchProducts from "./APIs/productsAPI";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
const App = () => {
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <Provider store={store}>
            <Navbar />
            <Outlet />
        </Provider>
    );
};

export default App;
