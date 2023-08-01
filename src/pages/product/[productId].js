import React, { useState } from 'react';
import ProductDescription from '@/components/UI/ProductDescription';
import ProductInfo from '@/components/UI/ProductInfo';
import ProductReviews from '@/components/UI/ProductReviews';
import ReviewForm from '@/components/UI/ReviewForm';
import Image from 'next/image';
import Navbar from '@/components/Layouts/Navbar';
import RootLayout from '@/components/Layouts/RootLayout';

const ProductDetails = () => {
    // React state to manage component visibility
    const [component, setComponent] = useState(<ProductDescription />);

    const getComponent = (value) => {
        setComponent(value);
    };
    return (
        <RootLayout>
            <div>
                <div className='px-10'>
                    <div className="lg:flex justify-start w-full bg-white lg:p-8 md:p-4 p-2">
                        <Image width={400} height={400} className="w-[600px] object-cover object-center" src="https://images.samsung.com/is/image/samsung/p6pim/sa_en/ls24a336nhmxue/gallery/sa-en-s33a-24-ls24a336nhmxue-531234509?$650_519_PNG$" alt="img" />
                        <ProductInfo />
                    </div>
                    <div class="text-gray-700 body-font">
                        <div class="container py-7 mx-auto">
                            <div className='flex font-bold border-b-2 border-primary'>
                                <button onClick={() => getComponent(<ProductDescription />)} className='bg-green-600 text-white font-bold px-4 py-2 border-r border-gray-200'>Description</button>
                                <button onClick={() => getComponent(<ProductReviews />)} className='bg-green-600 text-white font-bold px-4 py-2 border-r border-gray-200'>Reviews</button>
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