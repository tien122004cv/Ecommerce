import { FaRegUserCircle } from 'react-icons/fa'
import { IoCartOutline, IoSearch } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='w-10/12 mx-auto py-4 flex items-center justify-between'>
            <Link className='text-4xl font-bold'>SHOP.CO</Link>
            <div className='space-x-4'>
                <NavLink>Shop</NavLink>
                <NavLink>On Sale</NavLink>
                <NavLink>New Arrivals</NavLink>
                <NavLink>Brands</NavLink>
            </div>
            <div className='w-1/2 relative'>
                <input type="text" placeholder='Search for products...'
                    className='w-full bg-gray-100 py-2 rounded-full pl-9 focus:outline-gray-200'
                />
                <button className='absolute top-0 left-2 bottom-0 text-xl'>
                    <IoSearch />
                </button>
            </div>
            <div className='flex space-x-3 text-xl'>
                <Link><IoCartOutline /></Link>
                <Link><FaRegUserCircle /></Link>
            </div>
        </div>
    )
}
