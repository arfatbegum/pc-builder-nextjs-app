import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import ReactStars from "react-rating-stars-component";

const ProductReviews = ({ product }) => {
    const { reviews } = product?.data;
    return (
        <div className="p-4">
            <div className="flex flex-col justify-start items-start w-full">
                <div className="flex justify-start items-start">
                    <p className="text-xl font-semibold text-gray-800">{reviews.length} Reviews</p>
                </div>
                {reviews?.map((review, index) => (
                    <div key={index} className="w-full flex justify-start items-start flex-col bg-gray-50">
                        <div className="w-full">
                            <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
                                <div>
                                    <Avatar
                                        style={{
                                            backgroundColor: '#87d068',
                                        }}
                                        icon={<UserOutlined className='my-auto' />}
                                    />
                                </div>
                                <div className="flex flex-col justify-start items-start space-y-2">
                                    <p className="text-base font-medium leading-none text-gray-800">{review?.user}</p>
                                    <p className="text-sm leading-none text-gray-600">2 August 2023</p>
                                </div>
                            </div>
                            <div className="mt-3">
                                <ReactStars
                                    count={5}
                                    size={24}
                                    value={review?.rating}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                                <p className=" text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">{review?.comment}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default ProductReviews;