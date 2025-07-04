import ProductShimmer from "./ProductShimmer";

const Shimmer = () => {
    return (
        <div className="flex flex-wrap justify-center">
            {Array(10)
                .fill("")
                .map((_, index) => (
                    <ProductShimmer key={index} />
                ))}
        </div>
    );
};

export default Shimmer;
