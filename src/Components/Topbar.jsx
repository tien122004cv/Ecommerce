import React from 'react'
import { IoClose } from 'react-icons/io5'

export default function Topbar() {
    return (
        <div className='bg-black text-white'>
            <div className='w-10/12 mx-auto relative text-center py-2'>
                <p className='text-sm text-gray-300'>Sign up and get 20% off to your first order.
                    <span className='underline pl-1 cursor-pointer'>Sign Up Now</span>
                </p>
                <button className='absolute right-0 top-0 bottom-0'>
                    <IoClose className='text-xl cursor-pointer' />
                </button>
            </div>
        </div>
    )
}
