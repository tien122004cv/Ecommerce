import { assets } from '../assets/assets'

export default function DressStyle() {
    return (
        <div className='w-10/12 mx-auto bg-primary py-6 px-15 rounded-3xl'>
            <h2 className='text-center py-3 text-4xl font-bold'>BROWSE BY DRESS STYLE</h2>
            <div className='flex flex-col gap-5 py-3'>
                <div className='flex items-center justify-between gap-5 '>
                    <div className='relative rounded-2xl overflow-hidden cursor-pointer'>
                        <img src={assets.casual} alt="" className='hover:scale-110 transition' />
                        <p className='absolute text-4xl font-semibold top-5 left-8'>Casual</p>
                    </div>
                    <div className='relative rounded-2xl overflow-hidden cursor-pointer'>
                        <img src={assets.formal} alt="" className='hover:scale-110 transition' />
                        <p className='absolute text-4xl font-semibold top-5 left-8'>Formal</p>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-5'>
                    <div className='relative rounded-2xl overflow-hidden cursor-pointer'>
                        <img src={assets.party} alt="" className='hover:scale-110 transition' />
                        <p className='absolute text-4xl font-semibold top-5 left-8'>Party</p>
                    </div>
                    <div className='relative rounded-2xl overflow-hidden cursor-pointer'>
                        <img src={assets.gym} alt="" className='hover:scale-110 transition' />
                        <p className='absolute text-4xl font-semibold top-5 left-8'>Gym</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
