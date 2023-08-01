import React from "react";
import ReactStars from "react-rating-stars-component";

const ProductReviews = () => {
    return (
        <div className="p-4">
            <div className="flex flex-col justify-start items-start w-full">
                <div className="flex justify-start items-start">
                    <p className="text-xl font-semibold text-gray-800">2 Reviews</p>
                </div>
                <div className="w-full flex justify-start items-start flex-col bg-gray-50">
                    <div className="w-full">
                        <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
                            <div>
                                <img src="https://i.ibb.co/RCTGZTc/Mask-Group-1.png" alt="girl-avatar" />
                            </div>
                            <div className="flex flex-col justify-start items-start space-y-2">
                                <p className="text-base font-medium leading-none text-gray-800">Arfat</p>
                                <p className="text-sm leading-none text-gray-600">23 March 2023</p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <ReactStars
                                count={5}
                                size={24}
                                value={4}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p className=" text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">This style relies more on neutral colors with little to no embellishment on furniture. Lighter fabrics, such as silk and cotton, are popular, as are lighter colors in wood and metal.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-start items-start flex-col bg-gray-50">
                    <div className="w-full">
                        <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
                            <div>
                                <img src="https://i.ibb.co/RCTGZTc/Mask-Group-1.png" alt="girl-avatar" />
                            </div>
                            <div className="flex flex-col justify-start items-start space-y-2">
                                <p className="text-base font-medium leading-none text-gray-800">Arfat</p>
                                <p className="text-sm leading-none text-gray-600">23 March 2023</p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <ReactStars
                                count={5}
                                size={24}
                                value={4}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p className=" text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">This style relies more on neutral colors with little to no embellishment on furniture. Lighter fabrics, such as silk and cotton, are popular, as are lighter colors in wood and metal.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductReviews;