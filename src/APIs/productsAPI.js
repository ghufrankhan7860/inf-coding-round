const URL = "https://fakestoreapi.com/products";
const fetchProducts = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}
export default fetchProducts;