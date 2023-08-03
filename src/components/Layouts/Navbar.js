import { AiFillCaretDown } from 'react-icons/ai';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';
import { BiSolidUser } from 'react-icons/bi';

const items = [
    {
        key: '1',
        label: (
            <Link href="/category/processor" >
                CPU / Processor
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link href="/category/motherboard" >
                Motherboard
            </Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link href="/category/ram" >
                RAM
            </Link>
        ),
    },
    {
        key: '4',
        label: (
            <Link href="/category/psu" >
                Power Supply Unit
            </Link>
        ),
    },
    {
        key: '5',
        label: (
            <Link href="/category/storage" >
                Storage Device
            </Link>
        ),
    },
    {
        key: '6',
        label: (
            <Link href="/category/monitor" > Monitor </Link>
        ),
    },
    {
        key: '7',
        label: (
            <Link href="/category/others" > Others </Link>
        ),
    },
];
const Navbar = () => {
    return (
        <header class="text-white body-font">
            <div class="bg-green-600 container mx-auto flex flex-wrap p-5 md:flex-row flex-col items-center justify-between">
                <div className='flex'>
                    <Link
                        href="/"
                        className='font-bold text-xl text-white hover:text-white'
                    >
                        PC BUILDER
                    </Link>
                    <nav class="mr-auto ml-4 py-1 pl-4 border-l border-white flex flex-wrap items-center text-base justify-center hover:text-white">
                        <Dropdown
                            menu={{
                                items,
                            }}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space className='hover:text-white'>
                                    Categories
                                    <AiFillCaretDown />
                                </Space>
                            </a>
                        </Dropdown>
                    </nav>
                </div>
                <div className='flex items-center'>
                    <Link href="/pc-builder" class="inline-flex items-center text-white font-bold bg-gray-900 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 hover:text-white">PC BUILDER </Link>
                    <div className='items-center flex ml-4 md:mt-0 mt-2'>
                        <BiSolidUser className='text-3xl' />
                        <button className='flex flex-col ml-2 text-sm'>
                            Account
                            <span className='text-xs'>Register/Login</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;