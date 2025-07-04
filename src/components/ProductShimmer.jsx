const ProductShimmer = () => {
    return (
        <div className="flex flex-col items-center h-90 w-70 shadow-lg rounded-lg border-1 m-2 border-gray-200 animate-pulse">
            <div className="mt-3 h-40 w-40 bg-gray-200 rounded"></div>

            <div className="p-2 w-full">
                <div className="h-5 bg-gray-200 rounded w-3/4 mt-2 mb-2"></div>
                <div className="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>

                <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6 mb-3"></div>

                <div className="flex justify-between gap-2 p-3">
                    <div className="h-6 w-12 bg-gray-200 rounded"></div>
                </div>
            </div>
        </div>
    );
};

export default ProductShimmer;
