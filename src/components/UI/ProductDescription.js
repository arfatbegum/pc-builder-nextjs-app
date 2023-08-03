const ProductDescription = ({ product }) => {
    return (
        <div className='lg:p-4'>
            <p>{product?.data?.description}</p>
            <h1 className='text-xl font-bold text-gray-900 py-2'>Key Features</h1>
            <ul>
                {product?.data?.keyFeatures?.map((keyFeature, index) => (
                    <li key={index}>{keyFeature}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductDescription;