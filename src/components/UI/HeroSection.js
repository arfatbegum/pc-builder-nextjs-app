import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <div className="flex lg:flex-row flex-col  justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
            <div>
                <h1 className="lg:text-6xl text-2xl font-black mb-2 text-green-600 mt-12 lg:mt-0">
                    WELCOME TO THE
                </h1>
                <p className="lg:text-6xl text-2xl font-black mb-2 text-primary">PC BUILDER</p>
                <p className="text-secondary font-semibold lg:text-xl text-md">
                    Your one-stop destination for all your computing needs!
                </p>
                <div className="text-primary lg:mt-16 mt-4">
                    <p>We are a premier online store dedicated to providing a vast selection of high-quality PC components </p>
                    <p>to DIY enthusiasts, gamers, and professionals alike.</p>
                </div>
                <Button className="mt-5 bg-green-600 uppercase text-white font-bold"> <Link href="/pc-builder">Build Your PC</Link></Button>
            </div>
            <div className="lg:w-1/2 w-full relative lg:-right-14">
                <Image layout="responsive" src="https://www.clipartkey.com/mpngs/m/53-533871_desktop-computer-png-transparent-computer-images-png.png" alt="" width={900} height={600} />
            </div>
        </div>
    );
};

export default HeroSection;