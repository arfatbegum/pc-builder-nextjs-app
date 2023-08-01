import React from 'react';
import { FiSend } from "@react-icons/all-files/fi/FiSend";
import ReactStars from 'react-rating-stars-component';

const ReviewForm = () => {
    return (
        <div class="lg:w-[500px] w-full lg:m-4 bg-white">
            <form action="">
                <div className='flex justify-between gap-3'>
                    <div class="w-1/2">
                        <h1 class="text-gray-900 text-xl mb-3 font-bold">Rate Us</h1>
                    </div>
                    <div class="w-1/2">
                        <ReactStars
                            count={5}
                            size={24}
                            value={0}
                            edit={false}
                            activeColor="#ffd700"
                        />
                    </div>
                </div>
                <div class=" relative mb-4">
                    <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" class="w-full bg-white border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div class="relative mb-4">
                    <label for="message" class="leading-7 text-sm text-gray-600">Review</label>
                    <textarea id="message" name="message" class="w-full bg-white border border-gray-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button class="w-full flex items-center justify-center text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary text-lg"><FiSend className='text-xl text-white mr-2' />Post Review</button>
            </form>
        </div>
    );
};

export default ReviewForm;