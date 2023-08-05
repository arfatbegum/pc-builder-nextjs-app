import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { signIn } from "next-auth/react";
import RootLayout from "@/components/Layouts/RootLayout";

const Login = () => {
    return (
        <RootLayout>
            <div className='h-[calc(100vh-80px)] max-w-7xl mx-auto pt-8'>
                <div className="lg:mt-24">
                    <div className="mx-auto sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center mb-4">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-700">
                                Sign In
                            </h1>
                        </div>

                        <div className="w-full max-w-xs">

                            <form onSubmit="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div className="flex items-center gap-5 justify-center">
                                    <div
                                        onClick={() =>
                                            signIn("google", {
                                                callbackUrl: "http://localhost:3000/",
                                            })
                                        }
                                        className="cursor-pointer "
                                    >
                                        <FcGoogle size={35} className="p-1" />
                                    </div>
                                    <div
                                        onClick={() =>
                                            signIn("github", {
                                                callbackUrl: "http://localhost:3000/",
                                            })
                                        }
                                        className="cursor-pointer "
                                    >
                                        <BsGithub size={30} className="p-1" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        email
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="text" placeholder="email" />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="******************" />
                                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                                </div>
                                <button className="w-full bg-[#37be4e] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Sign In
                                </button>
                            </form >
                        </div >
                    </div>
                </div>
            </div >
        </RootLayout>

    );
}

Login.getLayout = function getLayout(page) {
    return page;
};

export default Login;