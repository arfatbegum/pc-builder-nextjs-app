import ReactStars from 'react-rating-stars-component';
import { MdAddShoppingCart } from "@react-icons/all-files/md/MdAddShoppingCart";
import { FiHeart } from "@react-icons/all-files/fi/FiHeart";
import { BiGitCompare } from "@react-icons/all-files/bi/BiGitCompare";
import { GrDeliver } from "@react-icons/all-files/gr/GrDeliver";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { MdCompareArrows } from "@react-icons/all-files/md/MdCompareArrows";
import { BsBrightnessHigh } from "@react-icons/all-files/bs/BsBrightnessHigh";
import Facebook from '@/assets/icons/facebook.svg';
import Twitter from '@/assets/icons/twitter.svg';
import Instagram from '@/assets/icons/instagram.svg';
import Linkedin from '@/assets/icons/linkedin.svg';
import Github from '@/assets/icons/github.svg';
import Paypal from '@/assets/icons/paypal.svg';
import Stripe from '@/assets/icons/stripe.svg';
import Link from 'next/link';
import Image from 'next/image';

const ProductInfo = () => {
    return (
        <div className="lg:w-2/3 w-full lg:p-8 p-2 flex justify-start items-start flex-col">
            <div className='lg:flex items-center'>
                <div className='lg:w-1/2 w-full'>
                    <h2 className=" lg:text-2xl text-xl text-gray-800 font-semibold">Plain White Tshirt</h2>
                    <div className="flex justify-start items-center gap-4">
                        <ReactStars
                            count={5}
                            size={22}
                            value={3}
                            edit={false}
                            activeColor="#e6bd00"
                        />
                        <p className=" font-normal text-sm leading-3 hover:text-gray-700 duration-100 cursor-pointer text-gray-500 underline">18 reviews</p>
                    </div>
                    <p className="font-bold text-2xl leading-6 text-primary mr-4 my-4">$190.00<span className=" font-semibold text-sm leading-3 hover:text-gray-700 duration-100  text-green-600 ml-2"> (In Stock)</span></p>

                    <div className="flex space-x-2 mt-7">
                        <button className='flex items-center bg-green-600 text-white text-sm font-bold border-2 border-primary shadow-sm rounded bottom-4 px-6 py-2'>
                            Add To Cart <MdAddShoppingCart className='text-xl ml-2'></MdAddShoppingCart>
                        </button>
                        <button className='bg-white border border-primary rounded shadow-sm '>
                            <FiHeart className='text-4xl text-primary px-2' />
                        </button>
                        <button className='bg-white border border-primary rounded shadow-sm '>
                            <BiGitCompare className='text-4xl text-primary px-2' />
                        </button>
                    </div>
                    <div class="flex justify-start space-x-2 mt-5">
                        <Link href="https://www.facebook.com/arfat.akter.98/">
                            <Image width={20} height={20} src={Facebook} alt="" className='w-6 h-6' />
                        </Link>
                        <Link href="https://www.linkedin.com/in/arfat-begum-0b22221b2/">
                            <Image width={20} height={20} src={Linkedin} alt="" className='w-7 h-7' />
                        </Link>
                        <Link href="https://twitter.com/arfatbegum">
                            <Image width={20} height={20} src={Twitter} alt="" className='w-6 h-6' />
                        </Link>
                        <Link href="https://instagram.com/arfat_akter_25">
                            <Image width={20} height={20} src={Instagram} alt="" className='w-7 h-7' />
                        </Link>
                        <Link href="https://github.com/arfatbegum" >
                            <Image width={20} height={20} src={Github} alt="" className='w-7 h-7' />
                        </Link>
                    </div>
                    <div className='flex justify-start items-center space-x-2'>
                        <span class="">
                            <Image src={Paypal} alt="" className='w-16 h-16' />
                        </span>
                        <span>
                            <Image src={Stripe} alt="" className='w-10 h-10' />
                        </span>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full bg-blue-100  bg-opacity-50 rounded-lg border-opacity-50 p-6 border-2 border-primary'>
                    <div class="list-none">
                        <li className='flex items-center justify-start mb-4'>
                            <GrDeliver className='text-4xl mr-4' />
                            Free shipping apply to all orders over SAR 400
                        </li>
                        <li className='flex items-center justify-start mb-4'>
                            <AiOutlineHome className='text-2xl mr-4' />
                            Home Delivery within 4 Days
                        </li>
                        <li className='flex items-center justify-start mb-4'>
                            <GrDeliver className='text-xl mr-4' />
                            Cash on Delivery Available
                        </li>
                        <li className='flex items-center justify-start mb-4'>
                            <MdCompareArrows className='text-2xl mr-4' />
                            2 Days returns money back guarantee
                        </li>
                        <li className='flex items-center justify-start mb-4'>
                            <BsBrightnessHigh className='text-2xl mr-4' />
                            2 years Warranty
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;