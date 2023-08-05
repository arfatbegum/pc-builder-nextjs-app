import ReactStars from "react-rating-stars-component";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import { AiOutlinePlusCircle } from "@react-icons/all-files/ai/AiOutlinePlusCircle";
import { FiHeart } from "@react-icons/all-files/fi/FiHeart";
import Link from 'next/link';
import Image from "next/image";

const ProductCard = ({ product }) => {

    const { _id, name, image, category, price, status, reviews } = product;
    // Calculate average rating
    const totalReviews = reviews?.length;
    const averageRating = totalReviews ? reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews : 0;

    return (
        <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-white border-2 border-gray-100 flex justify-center items-center shadow-sm">
            <div className="text-center h-full overflow-hidden">
                <div className="image-container">
                    <Image width={500} height={500} layout="responsive" src={image} alt="img" />
                </div>
                <div className="p-4">
                    <span className="text-sm font-semibold text-green-600">{category}</span>
                    <h5 className="text-md font-semibold tracking-tight text-gray-700 mb-1 capitalize">{name?.slice(0, 20)}</h5>
                    <h2 className="text-xl font-bold text-green-600">${price}</h2>
                    <span className="text-sm font-semibold text-green-600">({status})</span>
                    <div className='flex justify-center opacity-100 mb-3'>
                        <ReactStars
                            count={5}
                            size={22}
                            value={averageRating}
                            edit={false}
                            activeColor="#e6bd00"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col top-4 right-4 space-y-2 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                <Link href={`/products/${_id}`} className=' bg-white border-2 border-gray-200'>
                    <AiOutlineEye className='text-xl text-green-600 m-2' />
                </Link>
                <button className=' bg-white border-2 border-gray-200'>
                    <AiOutlinePlusCircle className='text-xl text-green-600 m-2' />
                </button>
                <button className='bg-white border-2 border-gray-200'>
                    <FiHeart className='text-xl text-green-600 m-2'></FiHeart>
                </button>
            </div>

        </div>
    );
};

export default ProductCard;