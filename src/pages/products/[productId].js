import React, { useState } from 'react';
import ProductDescription from '@/components/UI/ProductDescription';
import ProductInfo from '@/components/UI/ProductInfo';
import ProductReviews from '@/components/UI/ProductReviews';
import ReviewForm from '@/components/UI/ReviewForm';
import Image from 'next/image';
import RootLayout from '@/components/Layouts/RootLayout';

const ProductDetails = ({ product }) => {
    // React state to manage component visibility
    const [component, setComponent] = useState(<ProductDescription product={product} />);

    const getComponent = (value) => {
        setComponent(value);
    };
    return (
        <RootLayout>
            <div>
                <div className='px-10'>
                    <div className="lg:flex justify-start w-full bg-white lg:p-8 md:p-4 p-2">
                        <Image width={400} height={400} className="w-[600px] object-cover object-center" src={product?.image} alt="img" />
                        <ProductInfo product={product} />
                    </div>
                    <div class="text-gray-700 body-font">
                        <div class="container py-7 mx-auto">
                            <div className='flex font-bold border-b-2 border-primary'>
                                <button onClick={() => getComponent(<ProductDescription product={product} />)} className='bg-green-600 text-white font-bold px-4 py-2 border-r border-gray-200'>Description</button>
                                <button onClick={() => getComponent(<ProductReviews product={product} />)} className='bg-green-600 text-white font-bold px-4 py-2 border-r border-gray-200'>Reviews</button>
                                <button onClick={() => getComponent(<ReviewForm />)} className='bg-green-600 text-white font-bold px-4 py-2'>Write Review</button>
                            </div>
                            <div className="p-4 bg-white">
                                {component}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RootLayout>
    );
};

ProductDetails.getLayout = function getLayout(page) {
    return page;
};

export default ProductDetails;

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:3000/api/products");
    const products = await res.json();

    const paths = products?.data?.map((product) => ({
        params: { productId: product._id },
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:3000/api/product/${params.productId}`);
    const product = await res.json();

    return {
        props: {
            product
        }
    };
};