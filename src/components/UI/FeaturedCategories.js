import { FiCpu } from "@react-icons/all-files/fi/FiCpu";
import { BsMotherboard, BsMemory } from 'react-icons/bs';
import { ImPowerCord } from 'react-icons/im';
import { FiMonitor } from 'react-icons/fi';
import { MdOutlineSdStorage } from 'react-icons/md';
import Link from "next/link";

const FeaturedCategories = () => {
    return (
        <section class="text-gray-700 body-font mb-8">
            <div class="container px-10 py-7 mx-auto">
                <h1 className='text-xl font-bold border-b-2 border-primary pb-3'>Featured Categories</h1>
                <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-5 items-center mt-8">
                    <Link href="category/processor" className="group group-hover:bg-opacity-60 transition duration-500 relative bg-white border-2 border-gray-100 flex justify-center items-center shadow-sm flex-col py-8">
                        <FiCpu className='text-5xl mb-4 text-green-600' />
                        <h5 className="text-md font-semibold tracking-tight text-gray-700 mb-1 capitalize">CPU / Processor</h5>
                    </Link >
                    <Link href="category/motherboard" className="group group-hover:bg-opacity-60 transition duration-500 relative bg-white border-2 border-gray-100 flex justify-center items-center shadow-sm flex-col py-8">
                        <BsMotherboard className='text-5xl mb-4 text-green-600' />
                        <h5 className="text-md font-semibold tracking-tight text-gray-700 mb-1 capitalize">Motherboard</h5>
                    </Link>
                    <Link href="category/psu" className="group group-hover:bg-opacity-60 transition duration-500 relative bg-white border-2 border-gray-100 flex justify-center items-center shadow-sm flex-col py-8">
                        <ImPowerCord className='text-5xl mb-4 text-green-600' />
                        <h5 className="text-md font-semibold tracking-tight text-gray-700 mb-1 capitalize">Power Suply Unit</h5>
                    </Link>
                    <Link href="category/storage" className="group group-hover:bg-opacity-60 transition duration-500 relative bg-white border-2 border-gray-100 flex justify-center items-center shadow-sm flex-col py-8">
                        <MdOutlineSdStorage className='text-5xl mb-4 text-green-600' />
                        <h5 className="text-md font-semibold tracking-tight text-gray-700 mb-1 capitalize">Storage Device</h5>
                    </Link>
                    <Link href="category/monitor" className="group group-hover:bg-opacity-60 transition duration-500 relative bg-white border-2 border-gray-100 flex justify-center items-center shadow-sm flex-col py-8">
                        <FiMonitor className='text-5xl mb-4 text-green-600' />
                        <h5 className="text-md font-semibold tracking-tight text-gray-700 mb-1 capitalize">Monitor</h5>
                    </Link >
                    <Link href="category/ram" className="group group-hover:bg-opacity-60 transition duration-500 relative bg-white border-2 border-gray-100 flex justify-center items-center shadow-sm flex-col py-8">
                        <BsMemory className='text-5xl mb-4 text-green-600' />
                        <h5 className="text-md font-semibold tracking-tight text-gray-700 mb-1 capitalize">RAM</h5>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCategories;