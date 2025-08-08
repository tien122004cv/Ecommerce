import { assets } from "../assets/assets"
import Brandsbar from "./Brandsbar"

export default function Hero() {
    return (
        <div className='bg-[#F1F1F1] relative'>
            <div className="w-10/12 mx-auto flex justify-between items-center gap-8">
                <div className="w-1/2 space-y-6">
                    <p className="text-6xl font-bold">
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                    </p>
                    <p className="text-gray-400">
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>

                    <button className="px-15 py-3 bg-black text-white rounded-full">Shop now</button>

                    <div className="flex items-center space-x-4 py-4">
                        <div>
                            <strong className="text-4xl">200+</strong>
                            <p className="text-gray-400 pt-1">International Brands</p>
                        </div>
                        <div className="px-5 border border-y-0 border-x-gray-400">
                            <strong className="text-4xl">2,000+</strong>
                            <p className="text-gray-400 pt-1">High-Quantity Products</p>
                        </div>
                        <div>
                            <strong className="text-4xl">30,000+</strong>
                            <p className="text-gray-400 pt-1">Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 relative">
                    <img src={assets.hero} alt="" className="w-full" />
                    <img src={assets.star} alt="" className="absolute w-20 top-1/8 right-0" />
                    <img src={assets.star} alt="" className="absolute w-10 bottom-1/2 left-0" />
                </div>
            </div>
            <Brandsbar />
        </div>
    )
}
