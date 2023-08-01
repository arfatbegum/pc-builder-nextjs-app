import ReactStars from "react-rating-stars-component";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import { AiOutlinePlusCircle } from "@react-icons/all-files/ai/AiOutlinePlusCircle";
import { FiHeart } from "@react-icons/all-files/fi/FiHeart";
import Link from 'next/link';
import Image from "next/image";

const ProductCard = () => {

    return (
        <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-white border-2 border-gray-100 flex justify-center items-center shadow-sm">
            <div className="text-center h-full overflow-hidden">
                <Image className="w-full object-cover object-center" src="https://images.samsung.com/is/image/samsung/p6pim/sa_en/ls24a336nhmxue/gallery/sa-en-s33a-24-ls24a336nhmxue-531234509?$650_519_PNG$" alt="img" width={500} height={500}
                />
                <div className="p-4">
                    <span className="text-sm font-semibold text-green-600">Monitor</span>
                    <h5 className="text-md font-semibold tracking-tight text-gray-700 mb-1 capitalize">Smart Watch Black</h5>
                    <h2 className="text-xl font-bold text-green-600">$150.00</h2>
                    <span className="text-sm font-semibold text-green-600">(In stock)</span>
                    <div className='flex justify-center opacity-100 mb-3'>
                        <ReactStars
                            count={5}
                            size={22}
                            value={3}
                            edit={false}
                            activeColor="#e6bd00"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col top-4 right-4 space-y-2 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                <Link href="product-details/:id" className=' bg-white border-2 border-gray-200'>
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