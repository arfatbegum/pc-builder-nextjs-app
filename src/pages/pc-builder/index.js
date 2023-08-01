import { BsCpuFill, BsFillMotherboardFill } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { ImPowerCord } from "react-icons/im";
import { MdStorage } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import ReactStars from "react-rating-stars-component";
import Image from "next/image";
import RootLayout from "@/components/Layouts/RootLayout";

const PCBuilder = () => {

    return (
        <RootLayout >
            <div className="flex justify-center mx-auto w-full max-w-3xl bg-white border-gray-100 mt-5 border p-2 shadow-sm rounded my-8">
                <div className="w-full">
                    <div>
                        <h1 className="font-semibold text-lg text-center my-4 border-b-2 border-primary pb-3">
                            PC Builder - Build Your Own Computer
                        </h1>
                    </div>
                    <div className="flex justify-between items-center gap-2 px-8 border-b w-full border-gray-300 mb-4">
                        <div className=" text-green-600 shadow-gray-400 flex flex-col p-4 items-center rounded-md transition-all duration-200 bg-green-100">
                            <BsCpuFill size={45} />
                        </div>
                        <div>
                            <div role="status" className="max-w-sm animate-pulse">
                                <p className="mb-1 text-sm text-black">Processor</p>
                                <div className="h-6 bg-gray-200 rounded-md dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
                                <div className="flex justify-between items-center gap-2  p-2">
                                    <div className="flex items-center w-full">
                                        <div className="flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
                                            <Image src="" height={35} width={35} alt="" />
                                        </div>
                                        <div className="flex justify-between w-full gap-3">
                                            <div>
                                                <p className="font-medium">cpu.name</p>
                                                <div className='flex justify-center opacity-100 mb-3'>
                                                    <ReactStars
                                                        count={5}
                                                        size={20}
                                                        value={3}
                                                        edit={false}
                                                        activeColor="#e6bd00"
                                                    />
                                                </div>
                                            </div>
                                            <p className="text-red-500 font-medium whitespace-nowrap">
                                                cpu.price / -
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => router.push("/choose/cpu")}
                            className="bg-green-600 font-medium text-xs text-white py-2 cursor-pointer px-3 rounded"
                        >
                            Choose
                        </button>
                    </div>
                    <div className="flex justify-between items-center gap-2 px-8 border-b w-full border-gray-300 mb-4">
                        <div className=" text-green-600 shadow-gray-400 flex flex-col p-4 items-center rounded-md transition-all duration-200 bg-green-100">
                            <BsFillMotherboardFill size={45} />
                        </div>
                        <div>
                            <div role="status" className="max-w-sm animate-pulse">
                                <p className="mb-1 text-sm text-black">Motherboard</p>
                                <div className="h-6 bg-gray-200 rounded-md dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
                                <div className="flex justify-between items-center gap-2  p-2">
                                    <div className="flex items-center w-full">
                                        <div className="flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
                                            <Image src="" height={35} width={35} alt="" />
                                        </div>
                                        <div className="flex justify-between w-full gap-3">
                                            <div>
                                                <p className="font-medium">cpu.name</p>
                                                <div className='flex justify-center opacity-100 mb-3'>
                                                    <ReactStars
                                                        count={5}
                                                        size={20}
                                                        value={3}
                                                        edit={false}
                                                        activeColor="#e6bd00"
                                                    />
                                                </div>
                                            </div>
                                            <p className="text-red-500 font-medium whitespace-nowrap">
                                                cpu.price / -
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => router.push("/choose/cpu")}
                            className="bg-green-600 font-medium text-xs text-white py-2 cursor-pointer px-3 rounded"
                        >
                            Choose
                        </button>
                    </div>
                    <div className="flex justify-between items-center gap-2 px-8 border-b w-full border-gray-300 mb-4">
                        <div className=" text-green-600 shadow-gray-400 flex flex-col p-4 items-center rounded-md transition-all duration-200 bg-green-100">
                            <CgSmartphoneRam size={45} />
                        </div>
                        <div>
                            <div role="status" className="max-w-sm animate-pulse">
                                <p className="mb-1 text-sm text-black">RAM</p>
                                <div className="h-6 bg-gray-200 rounded-md dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
                                <div className="flex justify-between items-center gap-2  p-2">
                                    <div className="flex items-center w-full">
                                        <div className="flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
                                            <Image src="" height={35} width={35} alt="" />
                                        </div>
                                        <div className="flex justify-between w-full gap-3">
                                            <div>
                                                <p className="font-medium">cpu.name</p>
                                                <div className='flex justify-center opacity-100 mb-3'>
                                                    <ReactStars
                                                        count={5}
                                                        size={20}
                                                        value={3}
                                                        edit={false}
                                                        activeColor="#e6bd00"
                                                    />
                                                </div>
                                            </div>
                                            <p className="text-red-500 font-medium whitespace-nowrap">
                                                cpu.price / -
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => router.push("/choose/cpu")}
                            className="bg-green-600 font-medium text-xs text-white py-2 cursor-pointer px-3 rounded"
                        >
                            Choose
                        </button>
                    </div>
                    <div className="flex justify-between items-center gap-2 px-8 border-b w-full border-gray-300 mb-4">
                        <div className=" text-green-600 shadow-gray-400 flex flex-col p-4 items-center rounded-md transition-all duration-200 bg-green-100">
                            <ImPowerCord size={45} />
                        </div>
                        <div>
                            <div role="status" className="max-w-sm animate-pulse">
                                <p className="mb-1 text-sm text-black">Power Suply Unit</p>
                                <div className="h-6 bg-gray-200 rounded-md dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
                                <div className="flex justify-between items-center gap-2  p-2">
                                    <div className="flex items-center w-full">
                                        <div className="flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
                                            <Image src="" height={35} width={35} alt="" />
                                        </div>
                                        <div className="flex justify-between w-full gap-3">
                                            <div>
                                                <p className="font-medium">cpu.name</p>
                                                <div className='flex justify-center opacity-100 mb-3'>
                                                    <ReactStars
                                                        count={5}
                                                        size={20}
                                                        value={3}
                                                        edit={false}
                                                        activeColor="#e6bd00"
                                                    />
                                                </div>
                                            </div>
                                            <p className="text-red-500 font-medium whitespace-nowrap">
                                                cpu.price / -
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => router.push("/choose/cpu")}
                            className="bg-green-600 font-medium text-xs text-white py-2 cursor-pointer px-3 rounded"
                        >
                            Choose
                        </button>
                    </div>
                    <div className="flex justify-between items-center gap-2 px-8 border-b w-full border-gray-300 pb-2 mb-2">
                        <div className=" text-green-600 shadow-gray-400 flex flex-col p-4 items-center rounded-md transition-all duration-200 bg-green-100">
                            <MdStorage size={45} />
                        </div>
                        <div>
                            <div role="status" className="max-w-sm animate-pulse">
                                <p className="mb-1 text-sm text-black">Storage Device</p>
                                <div className="h-6 bg-gray-200 rounded-md dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
                                <div className="flex justify-between items-center gap-2  p-2">
                                    <div className="flex items-center w-full">
                                        <div className="flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
                                            <Image src="" height={35} width={35} alt="" />
                                        </div>
                                        <div className="flex justify-between w-full gap-3">
                                            <div>
                                                <p className="font-medium">cpu.name</p>
                                                <div className='flex justify-center opacity-100 mb-3'>
                                                    <ReactStars
                                                        count={5}
                                                        size={20}
                                                        value={3}
                                                        edit={false}
                                                        activeColor="#e6bd00"
                                                    />
                                                </div>
                                            </div>
                                            <p className="text-red-500 font-medium whitespace-nowrap">
                                                cpu.price / -
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => router.push("/choose/cpu")}
                            className="bg-green-600 font-medium text-xs text-white py-2 cursor-pointer px-3 rounded"
                        >
                            Choose
                        </button>
                    </div>
                    <div className="flex justify-between items-center gap-2 px-8 border-b w-full border-gray-300 mb-4">
                        <div className=" text-green-600 shadow-gray-400 flex flex-col p-4 items-center rounded-md transition-all duration-200 bg-green-100">
                            <FiMonitor size={45} />
                        </div>
                        <div>
                            <div role="status" className="max-w-sm animate-pulse">
                                <p className="mb-1 text-sm text-black">Monitor</p>
                                <div className="h-6 bg-gray-200 rounded-md dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
                                <div className="flex justify-between items-center gap-2  p-2">
                                    <div className="flex items-center w-full">
                                        <div className="flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
                                            <Image src="" height={35} width={35} alt="" />
                                        </div>
                                        <div className="flex justify-between w-full gap-3">
                                            <div>
                                                <p className="font-medium">cpu.name</p>
                                                <div className='flex justify-center opacity-100 mb-3'>
                                                    <ReactStars
                                                        count={5}
                                                        size={20}
                                                        value={3}
                                                        edit={false}
                                                        activeColor="#e6bd00"
                                                    />
                                                </div>
                                            </div>
                                            <p className="text-red-500 font-medium whitespace-nowrap">
                                                cpu.price / -
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => router.push("/choose/cpu")}
                            className="bg-green-600 font-medium text-xs text-white py-2 cursor-pointer px-3 rounded"
                        >
                            Choose
                        </button>
                    </div>
                    <div className="text-right mx-8">
                        <button
                            className=" bg-gray-900 text-white px-4 py-1.5 my-5 font-medium rounded-sm"
                        >
                            Complete Build
                        </button>
                    </div>
                </div>
            </div>
        </RootLayout>
    );
};

export default PCBuilder;