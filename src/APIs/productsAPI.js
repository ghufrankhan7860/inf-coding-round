const URL = "https://fakestoreapi.com/products";
const fetchProducts = async () => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log("Error in fetching data");
    }
}
export default fetchProducts;